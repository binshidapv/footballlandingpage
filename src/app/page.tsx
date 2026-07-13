"use client";
import { useState } from "react";
import { site } from "@/data/site";
import Image from "next/image";
import CardNav from "@/components/layout/CardNav";
import { ShieldCheck, Trophy, MapPinned, Users } from "lucide-react";
import GallerySlider from "@/components/sections/GallerySlider";
import TextType from "@/components/ui/TextType";




export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);



  
  return (
    
  <main className="min-h-screen bg-[#050505] text-white">

  <section className="relative min-h-screen overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero.png"
      
      alt="FC Strikers Football Academy"
      fill
      priority
      className="object-cover"
    />

   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
  </div>

 <div className="container-custom relative z-10 flex min-h-screen items-center justify-center pb-32 pt-36 text-center">
  <div className="max-w-7xl">
    <span className="inline-flex rounded-full border border-[#67f55b]/40 bg-black/30 px-8 py-3 text-xs font-black uppercase tracking-[0.45em] text-[#67f55b] backdrop-blur-md">
      Welcome To FC STRIKERS FOOTBALL ACADEMY
    </span>
 <h1 className="mt-8 font-[var(--font-bebas)] text-[26px] leading-none tracking-tight text-white md:text-[38px] lg:text-[54px] xl:text-[64px]">
  <TextType
    text={[
      "BUILDING TOMORROW'S CHAMPIONS",
      "TRAINING FUTURE FOOTBALL STARS",
      "DEVELOPING YOUNG TALENT",
    ]}
    typingSpeed={45}
    deletingSpeed={25}
    pauseDuration={2200}
    loop
    className="text-white"
    cursorClassName="text-[#67f55b]"
  />
</h1>
<div className="relative mx-auto mt-6 h-[260px] w-[220px] md:h-[360px] md:w-[300px] lg:h-[420px] lg:w-[340px]">
  <Image
    src="/images/boy.png"
    alt="FC Strikers young football player"
    fill
    priority
    className="object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)]"
  />
  
</div>


 <div className="mx-auto mt-0 h-px max-w-4xl bg-gradient-to-r from-transparent via-[#67f55b] to-transparent" /> 
   

    <div className="mt-5 flex items-center justify-center gap-4">
      <span className="h-px w-20 bg-[#67f55b]/60" />
      <p className="text-lg italic text-[#67f55b]">{site.tagline}</p>
      <span className="h-px w-20 bg-[#67f55b]/60" />
    </div>

  
  </div>
</div>
<div className="absolute top-[58%] right-20 z-20 hidden max-w-md -translate-y-1/2 rounded-3xl border border-[#67f55b]/20 bg-black/25 p-5 text-left shadow-2xl backdrop-blur-xl lg:block">
  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#67f55b]">
    Ages 4–17
  </p>

  <p className="mt-3 text-base font-semibold leading-7 text-white">
    Professional football training for young players, focused on confidence,
    discipline, teamwork, and real match skills.
  </p>

  <div className="mt-5 flex items-center gap-5">
    <a
      href="/register"
      className="inline-flex items-center gap-4 rounded-full bg-white py-3 pl-6 pr-3 text-sm font-bold text-[#050505] transition hover:scale-105"
    >
      Register Now
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#67f55b] text-white">
        ↗
      </span>
    </a>

   <button
  type="button"
  onClick={() => setIsVideoOpen(true)}
  className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#050505] transition hover:scale-110"
  aria-label="Play academy video"
>
  ▶
</button>
  </div>
</div>
<div className="absolute left-10 top-[58%] z-20 hidden -translate-y-1/2 xl:flex">
  {[
    { value: "15+", label: "Years" },
    { value: "500+", label: "Players" },
    { value: "5+", label: "Locations" },
    { value: "20+", label: "Coaches" },
  ].map((item, index) => (
    <div
      key={item.label}
      className="-ml-5 first:ml-0 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/15 bg-white/10 text-center shadow-2xl backdrop-blur-xl"
      style={{ zIndex: 10 + index }}
    >
      <p className="font-[var(--font-bebas)] text-3xl text-[#67f55b]">
        {item.value}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">
        {item.label}
      </p>
    </div>
  ))}
</div>

 

  {/* Bottom values */}
 
</section>
{/* about us */}
<section className="bg-[#f6f7fb] px-4 py-12">
  <div className="container-custom">
    <div className="relative overflow-hidden rounded-[36px] bg-white p-6 shadow-2xl md:p-8 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left */}
        <div className="relative min-h-[500px] border-gray-200 lg:border-r lg:pr-10">
          <div className="flex items-center gap-5">
  <Image
    src="/logos/logo.png"
    alt="FC Strikers Logo"
    width={100}
    height={100}
    className="object-contain"
  />

  <div>
    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#67f55b]">
      Football Academy
    </p>

    <h3 className="mt-1 text-3xl font-black uppercase leading-none text-[#02378D]">
      FC STRIKERS
    </h3>

    <div className="mt-3 h-[2px] w-20 rounded-full bg-[#67f55b]" />
  </div>
</div>

          <div className="relative mt-8 h-[390px] w-full">
            <Image
              src="/images/aboutus.jpg"
              alt="FC Strikers player illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right */}
        <div className="lg:pl-6">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#67f55b]">
            About FC Strikers
          </p>

          <h2 className="mt-4 font-[var(--font-bebas)] text-4xl leading-[0.95] tracking-wide text-[#07152f] md:text-5xl lg:text-[58px]">
  Developing
  <span className="block text-[#02378D]">Future Football</span>
  <span className="block text-[#02378D]">Champions</span>
</h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            FC Strikers Football Academy provides structured football
            development for young players aged 4–17 through professional
            coaching, modern training methods, competitive matches, and
            character building.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Safe Environment",
                text: "Professional and secure training atmosphere.",
              },
              {
                icon: Trophy,
                title: "Certified Coaches",
                text: "Experienced coaches focused on development.",
              },
              {
                icon: MapPinned,
                title: "UAE Locations",
                text: "Training access across multiple locations.",
              },
              {
                icon: Users,
                title: "Ages 4–17",
                text: "Programs designed for different age groups.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#02378D]/15 bg-[#02378D]/10 text-[#02378D]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black uppercase text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-4 rounded-xl bg-[#67f55b] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
          >
            Learn More
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




{/* why Choose us */}
<section className="bg-[#f6f7fb] px-4 py-24">
  <div className="container-custom">
    <div className="overflow-hidden rounded-[36px] bg-[#07152f] p-8 text-white shadow-2xl md:p-12 lg:p-14">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Why Choose FC Strikers
          </p>

          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
            More Than
            <span className="block text-[#67f55b]">Football Training</span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-white/70">
            We develop skilled players while building confidence, discipline,
            teamwork, and character in a safe professional environment.
          </p>

          <a
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-[#67f55b] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
          >
            Join FC Strikers
          </a>
        </div>

        <div className="grid gap-4">
          {[
            ["01", "Professional Coaching", "Qualified coaches delivering structured football development."],
            ["02", "Age-Based Programs", "Training sessions tailored for every age and skill level."],
            ["03", "Match Experience", "Friendly games and tournaments to build confidence."],
            ["04", "Modern Training", "Technical, tactical and physical development using proven methods."],
            ["05", "Character Building", "Discipline, respect, leadership and teamwork."],
            ["06", "Safe Environment", "A positive place where every player can learn and enjoy football."],
          ].map(([no, title, text]) => (
            <div
              key={no}
              className="group grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-[#67f55b]/60 hover:bg-white/10 md:grid-cols-[70px_1fr]"
            >
              <span className="font-[var(--font-bebas)] text-5xl leading-none text-[#67f55b]">
                {no}
              </span>

              <div>
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-white/60">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
{/* /// our Achievements */}
<section className="bg-white px-4 py-24 text-[#07152f]">
  <div className="container-custom">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
        Our Achievements
      </p>

      <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
        Proven Growth
        <span className="block text-[#02378D]">On And Off The Pitch</span>
      </h2>

      <p className="mt-5 text-base leading-7 text-gray-600">
        FC Strikers continues to grow through structured training, experienced
        coaching, and player-focused development.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { value: "500+", label: "Players Trained" },
        { value: "20+", label: "Professional Coaches" },
        { value: "15+", label: "Years Experience" },
        { value: "5+", label: "Training Locations" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-[28px] border border-gray-200 bg-[#f6f7fb] p-8 text-center shadow-lg transition hover:-translate-y-2 hover:border-[#67f55b] hover:shadow-2xl"
        >
          <p className="font-[var(--font-bebas)] text-6xl leading-none text-[#02378D] md:text-7xl">
            {stat.value}
          </p>

          <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#67f55b]" />

          <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-gray-600">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Traning Programs */}
<section className="bg-white px-4 py-20">
  <div className="container-custom">
    <div className="rounded-[36px] bg-[#07152f] p-8 text-white shadow-2xl md:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Training Programs
          </p>

          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-6xl">
            Football Training
            <span className="block text-[#67f55b]">For Every Age</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-white/70">
            Age-specific coaching pathways designed to build technique,
            confidence, teamwork, and match understanding.
          </p>

          <a
            href="/programs"
            className="mt-8 inline-flex rounded-xl bg-[#67f55b] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
          >
            View Programs →
          </a>
        </div>

        <div className="grid gap-3">
          {[
            ["U7", "Foundation", "Ages 4–7"],
            ["U9", "Ball Control", "Ages 8–9"],
            ["U11", "Team Play", "Ages 10–11"],
          
          ].map(([group, title, age]) => (
            <a
              key={group}
              href="/programs"
              className="group grid grid-cols-[80px_1fr_auto] items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-[#67f55b]/60 hover:bg-white/10"
            >
              <p className="font-[var(--font-bebas)] text-4xl text-[#67f55b]">
                {group}
              </p>

              <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="text-sm text-white/55">{age}</p>
              </div>

              <span className="text-[#67f55b] transition group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


{/* image gallery section */}
<GallerySlider items={site.gallery} />

{/* //coaches */}
<section className="bg-[#f6f7fb] px-4 py-24">
  <div className="container-custom">
    <div className="overflow-hidden rounded-[36px] bg-white shadow-2xl">
      <div className="grid items-center lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative h-[520px] bg-[#07152f]">
          <Image
            src="/images/coach.jpg"
            alt="FC Strikers Coach"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-8 md:p-12 lg:p-16">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
            Meet Our Coach
          </p>

          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none text-[#07152f] md:text-7xl">
            Guided By
            <span className="block text-[#02378D]">Experienced Coaching</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
            Our coaching approach focuses on technical development, discipline,
            teamwork, confidence, and real match understanding for every player.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Technical Skills",
              "Match Confidence",
              "Discipline & Teamwork",
              "Player Development",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 bg-[#f6f7fb] px-5 py-4 text-sm font-black uppercase tracking-wider text-[#07152f]"
              >
                {item}
              </div>
            ))}
          </div>

          <a
  href="/register"
  className="mt-10 inline-flex rounded-xl bg-[#67f55b] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
>
  Train With Us
</a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* //locations */}
<section className="relative overflow-hidden bg-[#050505] px-4 py-24 text-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(10,79,180,0.35),transparent_40%)]" />

  <div className="container-custom relative z-10">
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
        Training Locations
      </p>

      <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
        Train Across
        <span className="block text-[#67f55b]">The UAE</span>
      </h2>
    </div>

   <div className="grid gap-5 lg:grid-cols-4">
      {site.locations2.map((location) => (
        <div
          key={location.place}
          className="flex min-h-[360px] flex-col rounded-[28px] border border-white/10 bg-white/10 p-5 text-center shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#67f55b]/60"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#67f55b]/30 bg-[#67f55b]/10 text-[#67f55b]">
            <MapPinned size={28} />
          </div>

          <h3 className="text-2xl font-black text-white">
            {location.title}
          </h3>

          <p className="mt-5 font-bold leading-7 text-white/90">
            {location.street}
          </p>

          <p className="mt-2 leading-7 text-white/70">
            {location.address}
          </p>

          <p className="mt-2 text-sm font-bold text-white/70">
            {location.country}
          </p>

          {location.phone && (
            <p className="mt-4 text-sm font-bold text-[#67f55b]">
              {location.phone}
            </p>
          )}

          <a
            href={location.mapUrl || "/locations"}
            className="mx-auto mt-auto inline-flex rounded-xl bg-[#67f55b] px-6 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:scale-105"
          >
            View Map
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-white px-4 py-20">
  <div className="container-custom">
    <div className="flex flex-col items-start justify-between gap-8 rounded-[32px] border border-gray-200 bg-[#f6f7fb] p-8 shadow-xl md:flex-row md:items-center md:p-10">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
          Parents Portal
        </p>

        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none text-[#07152f] md:text-6xl">
          Stay Connected With Your Player
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
          Access player reports, progress updates, schedules, notifications,
          achievements, and coach communication through the FC Strikers Parents Portal.
        </p>
      </div>

      <a
        href="/parents"
        className="shrink-0 rounded-xl bg-[#67f55b] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:scale-105"
      >
        Open Parents Portal
      </a>
    </div>
  </div>
</section>



{isVideoOpen && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">
    <button
      onClick={() => setIsVideoOpen(false)}
      className="absolute right-6 top-6 text-3xl font-bold text-white"
      aria-label="Close video"
    >
      ×
    </button>

    <video
      src="/videos/football.mp4"
      controls
      autoPlay
      className="max-h-[80vh] w-full max-w-5xl rounded-2xl"
    />
  </div>
)}
    </main>
  );
}