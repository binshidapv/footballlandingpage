import Image from "next/image";
import { site } from "@/data/site";
import { ShieldCheck, Trophy, Users, HeartHandshake } from "lucide-react";



export default function AboutPage() {
  return (
    <main className="bg-white">
       
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 text-white">
        <Image
          src="/images/hero.png"
          alt="FC Strikers Football Academy"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.4em] text-[#67f55b]">
            About FC Strikers
          </p>

          <h1 className="mt-5 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
            {site.aboutPage.heroTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75">
            {site.aboutPage.story}
          </p>
        </div>
      </section>
      
        

    <section className="px-4 py-24">
        
        
  <div className="container-custom grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
    
    {/* Content */}
    <div>
      <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
        Our Story
      </p>

      <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none text-[#07152f] md:text-6xl">
        Grassroots To Greatness
      </h2>

      <p className="mt-6 text-base leading-8 text-gray-600">
        {site.aboutPage.development}
      </p>

      <p className="mt-5 text-base leading-8 text-gray-600">
        {site.aboutPage.grassroots}
      </p>
    </div>


    {/* Image */}
    <div className="relative h-[520px] overflow-hidden rounded-[36px] shadow-2xl">
      <Image
        src="/images/about.jpg"
        alt="FC Strikers player"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6 rounded-2xl bg-white/90 px-6 py-4 backdrop-blur-md">
        <p className="text-sm font-black uppercase tracking-widest text-[#02378D]">
          FC Strikers
        </p>

        <p className="mt-1 text-xl font-black text-[#07152f]">
          Future Champions
        </p>
      </div>
    </div>

  </div>
</section>

      <section className="bg-[#07152f] px-4 py-20 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
              Development Philosophy
            </p>

            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-6xl">
              More Than Football Skills
            </h2>

            <p className="mt-6 text-base leading-7 text-white/70">
              {site.aboutPage.philosophy}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {site.aboutPage.values.map((item, index) => {
              const icons = [Users, Trophy, ShieldCheck, HeartHandshake];
              const Icon = icons[index] || ShieldCheck;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <Icon className="text-[#67f55b]" size={30} />
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container-custom rounded-[36px] bg-[#67f55b] p-10 text-center md:p-14">
          <h2 className="font-[var(--font-bebas)] text-5xl leading-none text-black md:text-6xl">
            Start Your Football Journey
          </h2>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-black px-10 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </section>
    </main>
  );
}

