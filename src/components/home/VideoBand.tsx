import { media, highlights } from '@/data/content';

export function VideoBand() {
  return (
    <section className="relative overflow-hidden bg-puna-900">
      {/* Video de fondo en bucle, silenciado. Poster e imagen de respaldo si el video no carga. */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={media.gallery2}
        aria-hidden="true"
      >
        <source src="/videos/Trendelasnubes.mp4" type="video/mp4" />
      </video>

      {/* Velo monocromático aligerado + gradiente inferior para legibilidad. */}
      <div className="absolute inset-0 bg-puna-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-puna-950/70 via-transparent to-puna-950/20" />

      <div className="container-content relative flex min-h-[70vh] flex-col justify-center py-20 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-widest text-puna-100/80">
          En movimiento
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-puna-50 sm:text-4xl lg:text-5xl">
          El tren más alto, en cada cuadro
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-puna-100/85">
          Cielo, montaña y acero en una de las travesías ferroviarias más imponentes del
          planeta. Una experiencia que se siente en cada metro de ascenso.
        </p>

        <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.label} className="border-l border-puna-100/30 pl-4">
              <dt className="font-display text-2xl text-puna-50 sm:text-3xl">{h.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-puna-100/75">{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
