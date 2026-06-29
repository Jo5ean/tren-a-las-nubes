import { SectionHeading } from '@/components/ui/SectionHeading';
import { recommendations } from '@/data/content';

export function Recomendaciones() {
  return (
    <section id="recomendaciones" className="border-t border-puna-200 bg-puna-100/40">
      <div className="container-content py-20 sm:py-28">
        <SectionHeading
          eyebrow="Antes de viajar"
          title="Recomendaciones para una excursión de altura"
          description="La experiencia se desarrolla en alta montaña. Estas indicaciones ayudan a disfrutarla con seguridad."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-puna-200 bg-puna-200 sm:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((rec, i) => (
            <li key={rec.title} className="bg-puna-50 p-6">
              <span className="font-display text-sm text-puna-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg text-puna-900">{rec.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-puna-600">{rec.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
