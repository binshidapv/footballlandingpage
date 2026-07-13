import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#050505] px-4 pt-20 text-white">
      <div className="container-custom">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-4">
          <div>
            <Image
              src="/logos/logo.png"
              alt="FC Strikers Logo"
              width={120}
              height={120}
              className="object-contain"
            />

            <p className="mt-5 text-sm leading-7 text-white/60">
              FC Strikers Football Academy develops young players through
              professional coaching, discipline, teamwork, and match experience.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#67f55b]">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              {site.navigation.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-[#67f55b]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#67f55b]">
              Programs
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              {site.programs.map((program) => (
                <a key={program.title} href="/programs" className="hover:text-[#67f55b]">
                  {program.title} — {program.age}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-[#67f55b]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-white/60">
              <p>{site.contact.email}</p>
              <p>{site.contact.phones?.[0]}</p>
              <p>Ajman, Sharjah, Dubai, Umm Al Quwain</p>
            </div>

            <a
              href="/register"
              className="mt-6 inline-flex rounded-xl bg-[#67f55b] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:scale-105"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 py-6 text-sm text-white/45 md:flex-row">
          <p>© 2026 FC Strikers Football Academy. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}