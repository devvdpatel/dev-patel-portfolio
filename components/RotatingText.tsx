"use client";

import { useEffect, useState } from "react";

/** Cycles through a list of words with a soft cross-fade. */
export default function RotatingText({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (items.length <= 1) return;

    const visibleFor = 2200;
    const fadeFor = 300;

    const interval = setInterval(() => {
      setShow(false); // fade out
      setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setShow(true); // fade in next word
      }, fadeFor);
    }, visibleFor);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <span
      className={`text-gradient inline-block transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      aria-live="polite"
    >
      {items[index]}
    </span>
  );
}
