import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { media } from '@/data/content';

export function Experiencia() {
  return (
    <section id="experiencia" className="container-content py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src={media.experience}
            alt="Pasajeros contemplando el paisaje de altura durante el recorrido"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="La experiencia"
            title="Un viaje hacia el silencio de la Puna"
            description="Más que un tren, es un recorrido por uno de los paisajes más imponentes de Argentina. Desde el valle de Lerma hasta la altiplanicie, cada parada revela una postal distinta de la cordillera."
          />

          <div className="mt-8 space-y-6 border-l border-puna-200 pl-6">
            <div>
              <h3 className="font-display text-lg text-puna-900">Alta montaña</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-puna-600">
                Un ascenso gradual hasta los 4.220 msnm, acompañado por personal capacitado
                para una experiencia segura.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-puna-900">Paisaje y cultura</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-puna-600">
                Pueblos andinos, formaciones geológicas y el imponente Viaducto La Polvorilla,
                ícono de la ingeniería ferroviaria.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-puna-900">A tu ritmo</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-puna-600">
                Paradas con tiempo para fotografiar, caminar y disfrutar de la gastronomía
                regional en el camino.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href="#recorrido" variant="outline">
              Conocé el recorrido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
