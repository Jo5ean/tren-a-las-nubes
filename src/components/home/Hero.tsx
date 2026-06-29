import Image from 'next/image';
import { SearchBox } from './SearchBox';
import { Button } from '@/components/ui/Button';
import { highlights } from '@/data/content';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/fondo-home.png"
          alt="Tren a las Nubes cruzando el Viaducto La Polvorilla bajo un cielo estrellado de la Puna salteña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Velo oscurecido para asegurar legibilidad del texto y botones. */}
        <div className="absolute inset-0 bg-puna-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-puna-950/80 via-puna-950/30 to-transparent" />
      </div>

      <div className="container-content relative flex min-h-[88vh] flex-col justify-end pb-12 pt-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-puna-100/80">
            Salta · Argentina
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-puna-50 sm:text-5xl lg:text-6xl">
            Una experiencia de altura por la Puna salteña
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-puna-100/85 sm:text-lg">
            Un recorrido único hasta el Viaducto La Polvorilla, a 4.220 metros sobre el
            nivel del mar, entre cielo, montaña y silencio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#tarifas"
              className="border border-white bg-puna-950/60 text-white backdrop-blur-sm hover:bg-puna-950/80"
            >
              Reservar experiencia
            </Button>
            <Button
              href="#recorrido"
              variant="outline"
              className="border border-white bg-transparent text-white backdrop-blur-sm hover:bg-white/10"
            >
              Ver recorrido
            </Button>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.label}>
                <dt className="font-display text-2xl text-puna-50 sm:text-3xl">{h.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-puna-100/75">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12">
          <SearchBox />
        </div>
      </div>
    </section>
  );
}
