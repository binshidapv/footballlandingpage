import Image from "next/image";
import { site } from "@/data/site";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

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

            <div className="mt-6">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-white/45">
                Follow Us
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href={site.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow FC Strikers on Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#67f55b] hover:bg-[#67f55b] hover:text-[#07152f]"
                >
                  <FaInstagram size={19} aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat with FC Strikers on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#67f55b] hover:bg-[#67f55b] hover:text-[#07152f]"
                >
                  <FaWhatsapp size={19} aria-hidden="true" />
                </a>

                {site.contact.facebook && (
                  <a
                    href={site.contact.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow FC Strikers on Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[#67f55b] hover:bg-[#67f55b] hover:text-[#07152f]"
                  >
                    <FaFacebookF size={17} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
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

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 transition hover:text-[#67f55b]"
              >
                <Mail size={16} aria-hidden="true" />
                {site.contact.email}
              </a>

              <div className="space-y-2 pt-1">
                {site.contact.branches.map((branch) => (
                  <div key={branch.city}>
                    <p className="font-bold text-white">{branch.city}</p>
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="mt-1 flex items-center gap-2 transition hover:text-[#67f55b]"
                    >
                      <Phone size={15} aria-hidden="true" />
                      {branch.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/register"
              className="mt-6 inline-flex rounded-xl bg-[#67f55b] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105"
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
