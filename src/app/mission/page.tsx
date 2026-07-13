import Image from "next/image";
import { site } from "@/data/site";
import { Dumbbell, Target, Users, ShieldCheck } from "lucide-react";

export default function MissionPage() {
  const icons = [Dumbbell, Target, ShieldCheck, Users];

  return (
    <main className="bg-white">
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 text-white">
        <Image src="/images/hero.png" alt="FC Strikers Mission" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#67f55b]">
            Our Mission
          </p>
          <h1 className="mt-5 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
            {site.missionPage.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            {site.missionPage.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#02378D]">
              Mission Statement
            </p>
            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none text-[#07152f] md:text-6xl">
              One Player At A Time
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {site.missionPage.statement}
            </p>
            <p className="mt-5 text-base leading-7 text-gray-600">
              {site.missionPage.development}
            </p>
          </div>

          <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] shadow-2xl">
  <Image
    src="/images/mission.jpg"
    alt="FC Strikers mission"
    fill
    className="object-cover"
  />
</div>
        </div>
      </section>

      <section className="bg-[#07152f] px-4 py-20 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
              Structure For Success
            </p>
            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-6xl">
              Our Training Focus
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {site.missionPage.trainingFocus.map((item, index) => {
              const Icon = icons[index] || ShieldCheck;

              return (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <Icon className="text-[#67f55b]" size={30} />
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}