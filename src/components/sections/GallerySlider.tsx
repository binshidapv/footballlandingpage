"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  title: string;
  category: string;
};

export default function GallerySlider({ items }: { items: GalleryItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  return (
    <section className="bg-[#050505] px-4 py-24 text-white">
      <div className="container-custom">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#67f55b]">
              Gallery
            </p>

            <h2 className="mt-4 font-[var(--font-bebas)] text-5xl leading-none md:text-7xl">
              Academy Moments
            </h2>
          </div>

          <a
            href="/gallery"
            className="hidden rounded-xl border border-[#67f55b]/40 px-6 py-3 text-sm font-black uppercase tracking-wider text-[#67f55b] transition hover:bg-[#67f55b] hover:text-black md:inline-flex"
          >
            View Gallery
          </a>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((item) => (
              <div
                key={item.src}
                className="min-w-[82%] md:min-w-[55%] lg:min-w-[42%]"
              >
                <div className="group relative h-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#67f55b]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:border-[#67f55b] hover:text-[#67f55b]"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:border-[#67f55b] hover:text-[#67f55b]"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}