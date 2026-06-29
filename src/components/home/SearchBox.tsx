'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-puna-200 bg-puna-50 px-3.5 py-2.5 text-sm text-puna-900 transition-colors placeholder:text-puna-400 hover:border-puna-300';

const labelClass = 'block text-xs font-medium uppercase tracking-widest text-puna-500';

export function SearchBox() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-2xl border border-puna-200 bg-puna-50/95 p-5 shadow-lift backdrop-blur sm:p-6"
      aria-label="Consultar disponibilidad"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="fecha" className={labelClass}>
            Fecha
          </label>
          <input id="fecha" type="date" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="servicio" className={labelClass}>
            Experiencia
          </label>
          <select id="servicio" className={fieldClass} defaultValue="bus-tren-bus">
            <option value="bus-tren-bus">Bus · Tren · Bus</option>
            <option value="solo-tren">Solo Tren</option>
          </select>
        </div>

        <div>
          <label htmlFor="pasajeros" className={labelClass}>
            Pasajeros
          </label>
          <input
            id="pasajeros"
            type="number"
            min={1}
            defaultValue={2}
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="categoria" className={labelClass}>
            Categoría
          </label>
          <select id="categoria" className={fieldClass} defaultValue="residente">
            <option value="residente">Residente argentino</option>
            <option value="extranjero">Extranjero</option>
            <option value="menor">Menor</option>
            <option value="jubilado">Jubilado</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-puna-500" role="status">
          {submitted
            ? 'Disponibilidad referencial para demo. No es una reserva real.'
            : 'Consulta orientativa — los valores y cupos son referenciales.'}
        </p>
        <Button type="submit" className="sm:px-8">
          Consultar disponibilidad
        </Button>
      </div>
    </form>
  );
}
