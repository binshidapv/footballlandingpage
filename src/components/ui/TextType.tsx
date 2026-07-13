"use client";

import { useEffect, useState } from "react";

type TextTypeProps = {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
};

export default function TextType({
  text,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseDuration = 1500,
  loop = true,
  className = "",
  cursorClassName = "",
}: TextTypeProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const currentText = text[textIndex];
  const displayedText = currentText.slice(0, charIndex);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => {
        if (loop || textIndex < text.length - 1) {
          setDeleting(true);
        }
      }, pauseDuration);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    }  else if (deleting && charIndex === 0) {
  timeout = setTimeout(() => {
    setDeleting(false);
    setTextIndex((prev) => (prev + 1) % text.length);
  }, 80);
}

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    deleting,
    currentText,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    textIndex,
    text.length,
  ]);

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}
      <span className={`ml-1 animate-pulse ${cursorClassName}`}>|</span>
    </span>
  );
}