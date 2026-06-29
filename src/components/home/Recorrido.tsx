import { SectionHeading } from '@/components/ui/SectionHeading';
import { itinerary, type Stop } from '@/data/content';

/* Locomotora monocromática abstracta (fill desde currentColor del wrapper). */
function TrainGlyph() {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" aria-hidden="true">
      <path
        d="M5 26V14h15V8h11v6h17a5 5 0 0 1 5 5v7H5Z"
        className="fill-puna-800"
      />
      <rect x="45" y="5" width="6" height="9" rx="1" className="fill-puna-800" />
      <rect x="22" y="11" width="6" height="6" rx="1" className="fill-puna-100" />
      <rect x="1" y="26" width="57" height="4" rx="2" className="fill-puna-900" />
      <circle cx="14" cy="33" r="5" className="fill-puna-900" />
      <circle cx="30" cy="33" r="5" className="fill-puna-900" />
      <circle cx="46" cy="33" r="5" className="fill-puna-900" />
    </svg>
  );
}

/* Bocanadas de humo que ascienden desde la chimenea. */
function Steam({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <span className="absolute h-2 w-2 rounded-full bg-puna-300/70 animate-steam" />
      <span
        className="absolute h-2.5 w-2.5 rounded-full bg-puna-300/60 animate-steam"
        style={{ animationDelay: '0.6s' }}
      />
      <span
        className="absolute h-1.5 w-1.5 rounded-full bg-puna-300/70 animate-steam"
        style={{ animationDelay: '1.2s' }}
      />
    </div>
  );
}

function StationLabel({ stop }: { stop: Stop }) {
  return (
    <div>
      <span className="font-display text-base text-puna-800">{stop.time}</span>
      <p className="mt-0.5 text-sm font-medium text-puna-900">{stop.place}</p>
      <p className="mt-0.5 text-xs leading-snug text-puna-500">{stop.description}</p>
    </div>
  );
}

const dotClass =
  'z-10 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-puna-500 bg-puna-50 ring-4 ring-puna-100';

export function Recorrido() {
  return (
    <section id="recorrido" className="border-y border-puna-200 bg-puna-100/40">
      <div className="container-content py-20 sm:py-28">
        <SectionHeading
          eyebrow="El recorrido"
          title="Subí a bordo, rumbo a La Polvorilla"
          description="Un itinerario de día completo que combina tramos en bus y en tren. Seguí al tren parada por parada. Horarios de referencia."
        />

        {/* Riel horizontal con estaciones en zig-zag (desktop). */}
        <div className="relative mt-20 hidden lg:block overflow-visible">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 h-7 -translate-y-1/2">
            <div className="absolute inset-x-0 top-1 h-[3px] rounded bg-puna-300" />
            <div className="absolute inset-x-0 bottom-1 h-[3px] rounded bg-puna-300" />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(90deg, transparent 0 16px, #c0b3a1 16px 20px)',
              }}
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 z-20 -translate-y-1/2 animate-train-run"
            style={{ left: '-8%' }}
          >
            <div className="relative animate-chug">
              <Steam className="absolute -top-3 right-2 h-0 w-0" />
              <TrainGlyph />
            </div>
          </div>

          <ol className="relative flex">
            {itinerary.map((stop, i) => {
              const top = i % 2 === 0;
              return (
                <li key={stop.place} className="flex flex-1 flex-col items-center">
                  <div className="flex h-28 w-36 items-end justify-center pb-5 text-center">
                    {top && <StationLabel stop={stop} />}
                  </div>
                  <span aria-hidden="true" className={dotClass} />
                  <div className="flex h-28 w-36 items-start justify-center pt-5 text-center">
                    {!top && <StationLabel stop={stop} />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Riel vertical con tren descendente (mobile / tablet). */}
        <div className="relative mt-12 lg:hidden">
          <div aria-hidden="true" className="absolute bottom-0 left-4 top-0 w-7 -translate-x-1/2">
            <div className="absolute inset-y-0 left-1 w-[3px] rounded bg-puna-300" />
            <div className="absolute inset-y-0 right-1 w-[3px] rounded bg-puna-300" />
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, transparent 0 16px, #c0b3a1 16px 20px)',
              }}
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 z-20 -translate-x-1/2 animate-train-run-y"
          >
            <div className="animate-chug rotate-90">
              <TrainGlyph />
            </div>
          </div>

          <ol className="relative space-y-8">
            {itinerary.map((stop) => (
              <li key={stop.place} className="grid grid-cols-[2rem_1fr] gap-4">
                <div className="flex justify-center pt-1.5">
                  <span aria-hidden="true" className={dotClass} />
                </div>
                <div>
                  <span className="font-display text-base text-puna-800">{stop.time}</span>
                  <h3 className="font-display text-base text-puna-900">{stop.place}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-puna-600">{stop.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
