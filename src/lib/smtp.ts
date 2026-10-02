import net from "node:net";
import tls from "node:tls";

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
};

function getConfig(): SmtpConfig {
  const config = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
    to: process.env.FORM_TO || "info.fcsfa@gmail.com",
  };

  if (!config.host || !config.user || !config.pass || !config.from) {
    throw new Error("SMTP configuration is incomplete");
  }

  return config as SmtpConfig;
}

function waitForReply(socket: net.Socket | tls.TLSSocket, validCodes: number[]) {
  return new Promise<string>((resolve, reject) => {
    let response = "";

    const onData = (chunk: Buffer) => {
      response += chunk.toString("utf8");
      const lines = response.split("\r\n").filter(Boolean);
      const lastLine = lines.at(-1);

      if (!lastLine || !/^\d{3} /.test(lastLine)) return;

      cleanup();
      const code = Number(lastLine.slice(0, 3));
      if (validCodes.includes(code)) resolve(response);
      else reject(new Error(`SMTP server rejected the request (${code})`));
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
    };

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function command(
  socket: net.Socket | tls.TLSSocket,
  value: string,
  validCodes: number[],
) {
  const reply = waitForReply(socket, validCodes);
  socket.write(`${value}\r\n`);
  await reply;
}

function openSocket(config: SmtpConfig) {
  return new Promise<net.Socket | tls.TLSSocket>((resolve, reject) => {
    const socket =
      config.port === 465
        ? tls.connect({ host: config.host, port: config.port, servername: config.host })
        : net.connect({ host: config.host, port: config.port });

    socket.once(config.port === 465 ? "secureConnect" : "connect", () => resolve(socket));
    socket.once("error", reject);
    socket.setTimeout(15000, () => socket.destroy(new Error("SMTP connection timed out")));
  });
}

function upgradeToTls(socket: net.Socket, host: string) {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const secureSocket = tls.connect({ socket, servername: host });
    secureSocket.once("secureConnect", () => resolve(secureSocket));
    secureSocket.once("error", reject);
  });
}

export async function sendSmtpMail(subject: string, text: string, replyTo?: string) {
  const config = getConfig();
  let socket = await openSocket(config);

  try {
    await waitForReply(socket, [220]);
    await command(socket, `EHLO ${config.host}`, [250]);

    if (config.port !== 465) {
      await command(socket, "STARTTLS", [220]);
      socket = await upgradeToTls(socket as net.Socket, config.host);
      await command(socket, `EHLO ${config.host}`, [250]);
    }

    await command(socket, "AUTH LOGIN", [334]);
    await command(socket, Buffer.from(config.user).toString("base64"), [334]);
    await command(socket, Buffer.from(config.pass).toString("base64"), [235]);
    await command(socket, `MAIL FROM:<${config.from}>`, [250]);
    await command(socket, `RCPT TO:<${config.to}>`, [250, 251]);
    await command(socket, "DATA", [354]);

    const safeSubject = subject.replace(/[\r\n]/g, " ");
    const safeReplyTo = replyTo?.replace(/[\r\n]/g, "");
    const body = text.replace(/^\./gm, "..");
    const headers = [
      `From: FC Strikers Website <${config.from}>`,
      `To: ${config.to}`,
      `Subject: ${safeSubject}`,
      ...(safeReplyTo ? [`Reply-To: ${safeReplyTo}`] : []),
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "Content-Transfer-Encoding: 8bit",
    ];

    await command(socket, `${headers.join("\r\n")}\r\n\r\n${body}\r\n.`, [250]);
    await command(socket, "QUIT", [221]);
  } finally {
    socket.destroy();
  }
}
