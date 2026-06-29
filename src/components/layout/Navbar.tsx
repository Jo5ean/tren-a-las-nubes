'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { navItems, languages } from '@/data/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]>('ES');

  return (
    <header className="sticky top-0 z-40 border-b border-puna-200/70 bg-puna-50/85 backdrop-blur">
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Principal">
        <Link
          href="#inicio"
          className="font-display text-lg tracking-wide text-puna-900"
        >
          Tren a las Nubes
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-puna-600 transition-colors hover:text-puna-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <div
            className="flex items-center gap-1 text-xs text-puna-500"
            role="group"
            aria-label="Seleccionar idioma"
          >
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  'rounded px-1.5 py-0.5 transition-colors',
                  lang === l ? 'text-puna-900' : 'hover:text-puna-700',
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <Button href="#tarifas">Reservar experiencia</Button>
        </div>

        <button
          type="button"
          className="md:hidden text-sm text-puna-800"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-puna-200 bg-puna-50 md:hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-puna-700 transition-colors hover:bg-puna-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-3 px-3">
              <Button href="#tarifas" className="w-full">
                Reservar experiencia
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
