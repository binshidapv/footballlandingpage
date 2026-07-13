import { site } from "@/data/site";
import { Mail, MapPinned, Phone } from "lucide-react";

export default function ContactPage() {
  const success = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("success") : null;

  return (
    <main className="bg-white px-4 pb-20 pt-40">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Contact Us
          </p>

          <h1 className="mt-4 font-[var(--font-bebas)] text-6xl leading-none text-[#07152f] md:text-7xl">
            Get In Touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Contact FC Strikers Football Academy for registration, training
            programs, locations, and general inquiries.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-200 bg-[#f6f7fb] p-8 text-center shadow-lg">
            <Mail className="mx-auto text-[#67f55b]" size={36} />
            <h3 className="mt-5 text-lg font-black text-[#07152f]">Email</h3>
            <p className="mt-2 font-bold text-gray-700">{site.contact.email}</p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-[#f6f7fb] p-8 text-center shadow-lg">
            <Phone className="mx-auto text-[#67f55b]" size={36} />
            <h3 className="mt-5 text-lg font-black text-[#07152f]">Phone</h3>

            <div className="mt-2 space-y-1">
              {site.contact.phones.map((phone) => (
                <p key={phone} className="font-bold text-gray-700">
                  {phone}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#02378D] p-8 text-center text-white shadow-lg">
            <MapPinned className="mx-auto text-[#67f55b]" size={36} />
            <h3 className="mt-5 text-lg font-black">Location</h3>
            <p className="mt-2 font-bold leading-7">
              MALA3EB Sports Complex, Sheikh Khalifa Bin Zayed St, Ajman
            </p>
          </div>
        </div>

        {success === "1" && (
          <div className="mt-8 rounded-2xl border border-[#67f55b]/30 bg-[#e9ffe7] p-4 text-center text-sm font-semibold text-[#1d5b1d]">
            Your message has been sent successfully. We will contact you soon.
          </div>
        )}

        <div className="mt-12 rounded-[32px] border border-gray-200 bg-[#f6f7fb] p-6 shadow-xl md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
                Send a message
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#07152f] md:text-4xl">
                Request a trial or ask anything
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Fill out the form below and we will get back to you about
                registration, training programs, or academy locations.
              </p>

              <div className="mt-6 rounded-2xl border border-[#67f55b]/20 bg-white p-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#02378D]">
                  Direct email
                </p>
                <a
                  href="mailto:info.fcsfa@gmail.com"
                  className="mt-2 inline-block font-bold text-gray-700 transition hover:text-[#02378D]"
                >
                  info.fcsfa@gmail.com
                </a>
              </div>
            </div>

            <form
              action="/contact-submit.php"
              method="post"
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                  <span>Full name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-[#67f55b]"
                    placeholder="Your name"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-[#67f55b]"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                <span>Phone number</span>
                <input
                  type="tel"
                  name="phone"
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-[#67f55b]"
                  placeholder="05xxxxxxxx"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-[#67f55b]"
                  placeholder="Registration or training"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="rounded-2xl border border-gray-200 bg-white px-4 py-3 outline-none ring-0 transition focus:border-[#67f55b]"
                  placeholder="Tell us how we can help you"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-[#67f55b] px-8 py-3 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}