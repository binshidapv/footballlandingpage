"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";


type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const TOP_BAR_HEIGHT = 88;
const EXPANDED_HEIGHT = 340;

export default function CardNav({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "rgba(5,5,5,0.75)",
  menuColor = "#ffffff",
  buttonBgColor = "#67f55b",
  buttonTextColor = "#ffffff",
 
}: CardNavProps) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return EXPANDED_HEIGHT;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;

      if (contentEl) {
        const oldVisibility = contentEl.style.visibility;
        const oldPointerEvents = contentEl.style.pointerEvents;
        const oldPosition = contentEl.style.position;
        const oldHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = oldVisibility;
        contentEl.style.pointerEvents = oldPointerEvents;
        contentEl.style.position = oldPosition;
        contentEl.style.height = oldHeight;

        return TOP_BAR_HEIGHT + contentHeight + 16;
      }
    }

    return EXPANDED_HEIGHT;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, {
      height: TOP_BAR_HEIGHT,
      overflow: "hidden",
    });

    gsap.set(cardsRef.current, {
      y: 40,
      opacity: 0,
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.35,
      ease,
    });

    tl.to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease,
        stagger: 0.07,
      },
      "-=0.1"
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      tlRef.current.kill();

      const newTl = createTimeline();

      if (newTl) {
        if (isExpanded) newTl.progress(1);
        tlRef.current = newTl;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <div
      className={`absolute left-1/2 top-5 z-[99] w-[92%] max-w-[860px] -translate-x-1/2 ${className}`}
    >
      <nav
        ref={navRef}
        className="relative block rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl will-change-[height]"
        style={{ backgroundColor: baseColor }}
      >
        <div className="absolute inset-x-0 top-0 z-[2] flex h-[88px] items-center justify-between px-4">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            className="flex h-11 w-11 flex-col items-center justify-center gap-2 rounded-full text-white transition hover:bg-white/10"
            style={{ color: menuColor }}
          >
            <span
              className={`h-[2px] w-7 bg-current transition ${
                isHamburgerOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-7 bg-current transition ${
                isHamburgerOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </button>

     <Link
  href="/"
  className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
  aria-label="Go to homepage"
>
  <Image
    src={logo}
    alt={logoAlt}
    width={180}
    height={78}
    priority
    className="h-[78px] w-[180px] object-contain"
  />
</Link>

          <a
            href="/register"
            className="hidden h-12 items-center rounded-xl px-5 text-sm font-bold transition hover:scale-105 md:inline-flex"
            style={{
              backgroundColor: buttonBgColor,
              color: buttonTextColor,
            }}
          >
            Register Now
          </a>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[88px] z-[1] flex flex-col gap-3 p-3 md:flex-row ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          }`}
          aria-hidden={!isExpanded}
        >
          {items.slice(0, 3).map((item, index) => (
            <div
              key={item.label}
              ref={setCardRef(index)}
             className="flex min-h-[220px] flex-1 flex-col rounded-xl border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/15"
            >
              <h3 className="mb-6 text-2xl font-semibold">{item.label}</h3>

              <div className="mt-auto flex flex-col gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.ariaLabel}
                    className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
                  >
                    <GoArrowUpRight />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}