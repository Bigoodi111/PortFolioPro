// src/components/Hero.tsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const phrases = [
    "Étudiant BTS SIO – Option SISR",
    "Passionné par les réseaux & la sécurité",
    "Toujours curieux & autonome",
  ];
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[idx % phrases.length];
    const timeout = setTimeout(() => {
      setText((prev) =>
        deleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 800);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
      }
    }, deleting ? 50 : 120);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx, phrases]);

  return (
    <section className="hero h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-primary to-secondary text-white">
      <img
        src="/images/profile.jpg"
        alt="Photo de Grégoire Fontaine"
        className="w-64 h-64 rounded-full mb-6 object-cover"
      />
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Grégoire Fontaine</h1>
      <h2 className="text-xl md:text-2xl font-light h-8 mb-8">
        {text}
        <span className="inline-block animate-blink">|</span>
      </h2>
    </section>
  )
}
