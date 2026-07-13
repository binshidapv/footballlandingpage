"use client";

import { useState } from "react";
import Image from "next/image";


 const galleryImages = Array.from({ length: 199 }, (_, index) => {
  const number = 199 - index;

  if (number === 40) return `/gallery/${number}.webp`;
  if (number === 54) return `/gallery/${number}.png`;

  return `/gallery/${number}.jpg`;
});

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleImages = galleryImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + 12, galleryImages.length)
    );
  };

  return (
    <main className="bg-white text-[#07152f]">
      <section className="px-4 pb-20 pt-36">
        <div className="container-custom">
          {/* Page heading */}
          <div className="mx-auto mb-14 max-w-3xl rounded-[32px] border border-gray-200 bg-[#f6f7fb] p-8 text-center shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#02378D]">
              Latest Gallery
            </p>

            <h1 className="mt-4 font-[var(--font-bebas)] text-6xl leading-none md:text-8xl">
              Academy Moments
            </h1>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Training sessions, matches, tournaments, achievements, and academy
              events.
            </p>
          </div>

          {/* Masonry gallery */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {visibleImages.map((src, index) => (
              <article
                key={src}
                className="group mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-lg"
              >
                <div
                  className={`relative w-full ${
                    index % 5 === 0
                      ? "h-[460px]"
                      : index % 3 === 0
                        ? "h-[380px]"
                        : "h-[300px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`FC Strikers gallery image ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#f6c62f]">
                      FC Strikers
                    </p>

                    <h2 className="mt-1 text-lg font-black text-white">
                      Gallery Moment {index + 1}
                    </h2>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < galleryImages.length && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="rounded-xl bg-[#f6c62f] px-9 py-4 text-sm font-black uppercase tracking-wider text-black shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                Load More
              </button>
            </div>
          )}

          {/* Completed message */}
          {visibleCount >= galleryImages.length && (
            <p className="mt-12 text-center text-sm font-bold uppercase tracking-widest text-gray-500">
              All gallery images loaded
            </p>
          )}
        </div>
      </section>
    </main>
  );
}