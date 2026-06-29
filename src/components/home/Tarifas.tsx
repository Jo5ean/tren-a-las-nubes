'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { fares } from '@/data/content';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'busTrenBus', label: 'Bus · Tren · Bus' },
  { id: 'soloTren', label: 'Solo Tren' },
] as const;

type TabId = (typeof tabs)[number]['id'];

export function Tarifas() {
  const [active, setActive] = useState<TabId>('busTrenBus');

  return (
    <section id="tarifas" className="container-content py-20 sm:py-28">
      <SectionHeading
        eyebrow="Tarifas"
        title="Valores claros, fáciles de comparar"
        description="Elegí la modalidad y compará por categoría de pasajero. Valores referenciales sujetos a actualización."
      />

      <div className="mt-10">
        <div
          role="tablist"
          aria-label="Modalidad de servicio"
          className="inline-flex rounded-full border border-puna-200 bg-puna-50 p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm transition-colors',
                active === tab.id
                  ? 'bg-puna-900 text-puna-50'
                  : 'text-puna-600 hover:text-puna-900',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-puna-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Tarifas por categoría de pasajero</caption>
            <thead>
              <tr className="border-b border-puna-200 bg-puna-100/50">
                <th scope="col" className="px-5 py-3.5 font-medium text-puna-700">
                  Categoría
                </th>
                <th scope="col" className="px-5 py-3.5 text-right font-medium text-puna-700">
                  Precio
                </th>
              </tr>
            </thead>
            <tbody>
              {fares.map((fare) => (
                <tr key={fare.category} className="border-b border-puna-100 last:border-0">
                  <th scope="row" className="px-5 py-4 font-normal text-puna-800">
                    {fare.category}
                  </th>
                  <td className="px-5 py-4 text-right font-display text-base text-puna-900">
                    {fare[active]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-puna-500">
            Menores de 3 a 12 años inclusive. Menores de 2 años no abonan ticket. Valores
            sujetos a actualización — demo referencial.
          </p>
          <Button href="#inicio">Reservar experiencia</Button>
        </div>
      </div>
    </section>
  );
}
