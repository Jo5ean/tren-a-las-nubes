import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { media } from '@/data/content';

export function CtaFinal() {
  return (
    <section className="container-content py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={media.gallery1}
          alt="Paisaje de la Puna salteña al atardecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-puna-950/65" />
        <div className="relative flex flex-col items-start gap-6 px-8 py-16 sm:px-14 sm:py-24">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-puna-50 sm:text-4xl">
            Llevate la Puna con vos. Reservá tu lugar en el tren.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-puna-100/85">
            Sumate a una de las travesías ferroviarias más altas del mundo y descubrí
            paisajes que se quedan para siempre.
          </p>
          <Button
            href="#tarifas"
            className="bg-puna-50 text-puna-900 hover:bg-puna-100"
          >
            Reservar experiencia
          </Button>
        </div>
      </div>
    </section>
  );
}
