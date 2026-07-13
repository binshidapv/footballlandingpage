"use client";

import Lottie from "lottie-react";
import sportBall from "../../../public/lottie/sportball.json";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-[90] flex h-14 w-14 items-center justify-center rounded-full  shadow-2xl transition hover:scale-110"
      aria-label="Back to top"
    >
      <div className="h-12 w-12">
        <Lottie animationData={sportBall} loop autoplay />
      </div>
    </button>
  );
}