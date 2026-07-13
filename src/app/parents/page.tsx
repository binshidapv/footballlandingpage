import Image from "next/image";
import { site } from "@/data/site";
import { Bell, ChartNoAxesCombined, MessageCircle, Trophy } from "lucide-react";

export default function ParentsPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white px-4 pb-28 pt-40 text-[#07152f]">
  <div className="container-custom grid items-center gap-12 lg:grid-cols-2">
    <div>
      <p className="text-xs font-black uppercase tracking-[0.35em] text-[#02378D]">
        Parents Portal
      </p>

      <h1 className="mt-5 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
        {site.parentsPortal.title}
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-gray-600">
        {site.parentsPortal.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={site.parentsPortal.googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-[#67f55b] px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:scale-105"
        >
          Google Play
        </a>

        <a
          href={site.parentsPortal.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-[#02378D]/20 px-7 py-4 text-sm font-black uppercase tracking-wider text-[#02378D] transition hover:border-[#67f55b]"
        >
          App Store
        </a>
      </div>
    </div>

    <div className="relative h-[520px] overflow-hidden rounded-[36px] bg-[#f6f7fb] p-6 shadow-2xl">
      <Image
        src="/images/parent.png"
        alt="Parents Portal App"
        fill
        priority
        className="object-contain p-4"
      />
    </div>
  </div>
</section>
      <section className="px-4 py-20">
        <div className="container-custom grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {site.parentsPortal.features.map((feature, index) => {
            const icons = [ChartNoAxesCombined, Bell, MessageCircle, Trophy];
            const Icon = icons[index % icons.length];

            return (
              <div
                key={feature}
                className="rounded-3xl border border-gray-200 bg-[#f6f7fb] p-7 shadow-lg"
              >
                <Icon className="text-[#02378D]" size={30} />
                <h3 className="mt-5 text-xl font-black text-[#07152f]">
                  {feature}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}