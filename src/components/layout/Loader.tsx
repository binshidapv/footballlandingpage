"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import sportBall from "../../../public/lottie/sportball.json";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
    <div className="flex flex-col items-center">
      <Image
        src="/logos/logo.png"
        alt="FC Strikers Logo"
        width={150}
        height={150}
        priority
        className="object-contain"
      />

      <div className="mt-6 flex items-center gap-4">
       

        <div className="h-12 w-12">
          <Lottie animationData={sportBall} loop autoplay />
        </div>
      </div>
    </div>
  </div>
);
}