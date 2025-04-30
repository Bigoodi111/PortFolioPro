// src/components/Header.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/portfolio', label: 'Réalisations' },
  { href: '/skills', label: 'Compétences' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Initialiser le thème côté client
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(stored ? stored === 'dark' : prefersDark);
    setMounted(true);
  }, []);

  // Appliquer la classe et stocker le choix
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark, mounted]);

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur z-50 dark:bg-gray-900/90">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold">
          Grégoire Fontaine
        </Link>
        <ul className="hidden md:flex gap-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  router.pathname === href
                    ? 'text-primary font-semibold'
                    : 'hover:text-primary transition'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
            >
              {dark ? '🌞' : '🌙'}
            </button>
          )}
          <Link
            href="/contact"
            className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            Contact
          </Link>
          <button
            className="md:hidden p-2 text-2xl"
            aria-label="Menu"
            onClick={() => document.documentElement.classList.toggle('menu-open')}
          >
            ☰
          </button>
        </div>
      </nav>
      <div className="md:hidden bg-white dark:bg-gray-900 menu-panel">
        <ul className="flex flex-col gap-4 p-6">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="block text-lg hover:text-primary transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
);
}
