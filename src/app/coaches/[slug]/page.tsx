import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Check, ShieldCheck, Trophy } from "lucide-react";
import { notFound } from "next/navigation";
import { site } from "@/data/site";

type CoachPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.coaches.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({ params }: CoachPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coach = site.coaches.find((item) => item.slug === slug);

  if (!coach) return {};

  return {
    title: `${coach.name} | FC Strikers Football Academy`,
    description: coach.bio,
  };
}

export default async function CoachBioPage({ params }: CoachPageProps) {
  const { slug } = await params;
  const coach = site.coaches.find((item) => item.slug === slug);

  if (!coach) notFound();

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 pb-24 pt-36 text-[#07152f]">
      <div className="container-custom">
        <Link
          href="/#coaches"
          className="mb-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#02378D] transition hover:text-[#07152f]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to coaches
        </Link>

        <section className="rounded-[36px] border border-[#02378D]/10 bg-white p-4 shadow-2xl sm:p-6 lg:p-8">
          <div className="grid items-start gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
            <aside className="lg:sticky lg:top-28">
              <div className="relative h-[340px] overflow-hidden rounded-[28px] bg-[#07152f] sm:h-[400px] lg:h-[420px]">
              <Image
                src={coach.image}
                alt={`${coach.name}, ${coach.role} at FC Strikers`}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                priority
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152f]/90 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-center gap-3 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#67f55b] text-[#07152f]">
                  <Trophy size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#67f55b]">
                    FC Strikers
                  </p>
                  <p className="text-sm font-bold">Professional Coaching Team</p>
                </div>
              </div>
              </div>

              <div className="mt-4 rounded-[22px] bg-[#07152f] p-5 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#67f55b]">
                  Coaching Role
                </p>
                <p className="mt-2 text-sm font-bold leading-6">{coach.role}</p>
              </div>
            </aside>

            <div className="px-2 pb-4 pt-2 sm:px-4 lg:px-0 lg:py-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#02378D]">
                Meet The Coach
              </p>
              <h1 className="mt-3 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
                {coach.name}
              </h1>
              <div className="mt-5 h-1 w-16 rounded-full bg-[#67f55b]" />

              <p className="mt-7 text-base leading-8 text-gray-600">{coach.bio}</p>

              {"philosophy" in coach && coach.philosophy && (
                <blockquote className="mt-6 border-l-4 border-[#67f55b] pl-5 text-base font-semibold leading-7 text-[#07152f]">
                  {coach.philosophy}
                </blockquote>
              )}

              <div className="mt-8 rounded-[24px] border border-[#02378D]/10 bg-[#f3f7ff] p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#02378D] text-[#67f55b]">
                    <Award size={19} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-500">
                      Coaching Experience
                    </p>
                    <p className="mt-1 font-bold text-[#07152f]">{coach.experience}</p>
                  </div>
                </div>
              </div>

              {"playingBackground" in coach && coach.playingBackground && (
                <div className="mt-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#07152f]">
                    Playing Background
                  </h2>
                  <p className="mt-3 rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-7 text-gray-600">
                    {coach.playingBackground}
                  </p>
                </div>
              )}

              {"qualifications" in coach && coach.qualifications && (
                <div className="mt-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#07152f]">
                    Qualifications
                  </h2>
                  <div className="mt-4 grid gap-3">
                    {coach.qualifications.map((qualification) => (
                      <div
                        key={qualification}
                        className="flex items-start gap-3 rounded-xl border border-[#02378D]/10 bg-[#f3f7ff] px-4 py-3 text-sm font-bold leading-6"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[#02378D]"
                          aria-hidden="true"
                        />
                        {qualification}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {"coachingExperience" in coach && coach.coachingExperience && (
                <div className="mt-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#07152f]">
                    Coaching Experience
                  </h2>
                  <div className="mt-4 space-y-4 border-l-2 border-[#67f55b] pl-5">
                    {coach.coachingExperience.map((position) => (
                      <article key={`${position.club}-${position.period}`}>
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-black text-[#07152f]">{position.club}</h3>
                          <span className="text-xs font-black text-[#02378D]">
                            {position.period}
                          </span>
                        </div>
                        <ul className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
                          {position.roles.map((role) => (
                            <li key={role}>• {role}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#07152f]">
                  <ShieldCheck size={19} className="text-[#02378D]" aria-hidden="true" />
                  Coaching Focus
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {coach.specialties.map((specialty) => (
                    <div
                      key={specialty}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold"
                    >
                      <Check size={16} className="text-[#02378D]" aria-hidden="true" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              {"achievements" in coach && coach.achievements && (
                <div className="mt-8 rounded-[24px] bg-[#07152f] p-6 text-white">
                  <h2 className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em]">
                    <Trophy size={18} className="text-[#67f55b]" aria-hidden="true" />
                    Achievements
                  </h2>
                  <ul className="mt-5 grid gap-3">
                    {coach.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-[#67f55b]"
                          aria-hidden="true"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                href="/register"
                className="mt-9 inline-flex rounded-xl bg-[#67f55b] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#07152f] transition hover:scale-105"
              >
                Train With Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
