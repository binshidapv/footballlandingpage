import { sendSmtpMail } from "@/lib/smtp";

export const runtime = "nodejs";

function clean(value: FormDataEntryValue | null, maxLength = 5000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  let submissionKind = "";

  try {
    const form = await request.formData();
    const kind = clean(form.get("kind"), 20);
    submissionKind = kind;

    if (kind === "registration") {
      const fields = {
        studentName: clean(form.get("studentName"), 100),
        parentName: clean(form.get("parentName"), 100),
        schoolName: clean(form.get("schoolName"), 150),
        email: clean(form.get("email"), 254),
        phone: clean(form.get("phone"), 30),
        birthday: clean(form.get("birthday"), 20),
        address: clean(form.get("address"), 1000),
      };

      if (Object.entries(fields).slice(0, 6).some(([, value]) => !value)) {
        return Response.json({ error: "Please complete all required fields." }, { status: 400 });
      }

      await sendSmtpMail(
        `New registration: ${fields.studentName}`,
        [
          `Student name: ${fields.studentName}`,
          `Parent name: ${fields.parentName}`,
          `School: ${fields.schoolName}`,
          `Email: ${fields.email}`,
          `Phone: ${fields.phone}`,
          `Birthday: ${fields.birthday}`,
          `Address: ${fields.address || "Not provided"}`,
        ].join("\n"),
        fields.email,
      );

      return Response.json({ success: true });
    }

    if (kind === "contact") {
      const name = clean(form.get("name"), 100);
      const email = clean(form.get("email"), 254);
      const phone = clean(form.get("phone"), 30);
      const subject = clean(form.get("subject"), 150);
      const message = clean(form.get("message"));

      if (!name || !email || !message) {
        return Response.redirect(new URL("/contact?success=0", request.url), 303);
      }

      await sendSmtpMail(
        `Website enquiry: ${subject || "General enquiry"}`,
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\n\nMessage:\n${message}`,
        email,
      );

      return Response.redirect(new URL("/contact?success=1", request.url), 303);
    }

    return Response.json({ error: "Unsupported form." }, { status: 400 });
  } catch (error) {
    console.error("Form submission failed", error);
    if (submissionKind === "contact") {
      return Response.redirect(new URL("/contact?success=0", request.url), 303);
    }
    return Response.json({ error: "Unable to send your message. Please try again." }, { status: 500 });
  }
}
