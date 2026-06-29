import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { contact, navItems, media } from '@/data/content';

export function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-puna-950 text-puna-100">
      {/* Apertura: el CTA "Llevate la Puna con vos" integrado como cabecera del footer. */}
      <div className="relative">
        <Image
          src={media.gallery1}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-puna-950/70 via-puna-950/75 to-puna-950" />

        <div className="container-content relative flex flex-col items-start gap-6 py-12 sm:py-16">
          <h2 className="max-w-xl font-display text-3xl leading-tight text-puna-50 sm:text-4xl lg:text-5xl">
            Llevate la Puna con vos. Reservá tu lugar en el tren.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-puna-100/85">
            Sumate a una de las travesías ferroviarias más altas del mundo y descubrí
            paisajes que se quedan para siempre.
          </p>
          <Button
            href="#tarifas"
            className="border border-puna-100 bg-puna-950 text-puna-50 hover:bg-puna-900"
          >
            Reservar experiencia
          </Button>
        </div>
      </div>

      {/* Columnas del footer sobre la misma superficie oscura. */}
      <div className="container-content grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg text-puna-50">Tren a las Nubes</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-puna-300">
            Una experiencia de altura por la Puna salteña hasta el Viaducto La Polvorilla.
          </p>
        </div>

        <nav aria-label="Secciones">
          <p className="text-xs font-medium uppercase tracking-widest text-puna-400">
            Explorar
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-puna-300 transition-colors hover:text-puna-50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-puna-400">
            Contacto
          </p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-puna-300">
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <p>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-puna-50">
                {contact.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-puna-400">
            Comunidad
          </p>
          <ul className="mt-4 space-y-2">
            {contact.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-puna-300 transition-colors hover:text-puna-50"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-puna-800">
        <div className="container-content flex flex-col gap-2 py-6 text-xs text-puna-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Tren a las Nubes — Servicio Ferroviario Turístico S.E.</p>
          <p>
            Demo no oficial. Imágenes y recursos utilizados solo como material referencial.
          </p>
        </div>
      </div>
    </footer>
  );
}
