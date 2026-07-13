import { site } from "@/data/site";
import { Trophy, Target, Users, ShieldCheck } from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#07152f] px-4 pb-20 pt-36 text-white">
        <div className="container-custom text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Training Programs
          </p>

          <h1 className="mt-5 font-[var(--font-bebas)] text-6xl leading-none md:text-8xl">
            Age Group Development
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70">
            Structured football programs designed for each age group, helping
            players build skill, confidence, discipline, teamwork, and match
            understanding.
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.programs.map((program, index) => {
            const icons = [ShieldCheck, Target, Users, Trophy];
            const Icon = icons[index % icons.length];

            return (
              <div
                key={program.title}
                className="rounded-[32px] border border-gray-200 bg-[#f6f7fb] p-8 shadow-lg transition hover:-translate-y-2 hover:border-[#67f55b] hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-[var(--font-bebas)] text-7xl leading-none text-[#02378D]">
                      {program.title}
                    </p>
                    <p className="mt-2 text-sm font-bold uppercase tracking-widest text-gray-500">
                      {program.age}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#02378D]/10 text-[#02378D]">
                    <Icon size={28} />
                  </div>
                </div>

                <p className="mt-8 text-lg font-black text-[#07152f]">
                  {program.focus}
                </p>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  Players receive age-appropriate football training focused on
                  technical development, movement, confidence, teamwork, and
                  game understanding.
                </p>

                <a
                  href="/register"
                  className="mt-8 inline-flex rounded-xl bg-[#67f55b] px-7 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:scale-105"
                >
                  Register Now
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}