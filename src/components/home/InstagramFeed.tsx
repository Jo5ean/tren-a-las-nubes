import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { instagramPosts, instagramProfile } from '@/data/content';

export function InstagramFeed() {
  const posts = instagramPosts.slice(0, 8);

  return (
    <section id="comunidad" className="container-content py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Comunidad"
          title="Viví la experiencia en redes"
          description="Postales y momentos compartidos por Tren a las Nubes. Pasá el cursor para revelar cada recuerdo."
        />
        <a
          href={instagramProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm text-puna-600 underline-offset-4 transition-colors hover:text-puna-900 hover:underline"
        >
          @trenalasnubesoficial
        </a>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.id}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${post.title} — abrir en Instagram (${post.type})`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-puna-200"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                /* Monocromático en reposo; recupera color al enfocar o pasar el cursor. */
                className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:grayscale-0"
              />
              {/* Tinte cálido que se desvanece para reforzar el efecto de revelado. */}
              <div className="absolute inset-0 bg-puna-900/25 transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-puna-950/75 via-transparent to-transparent" />

              <span className="absolute left-3 top-3 rounded-full bg-puna-50/90 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-widest text-puna-700">
                {post.type === 'reel' ? 'Reel' : 'Post'}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-base leading-snug text-puna-50">{post.title}</p>
                <span className="mt-1 inline-block text-xs text-puna-100/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Abrir en Instagram
                </span>
              </div>
            </a>
          </li>
        ))}

        <li>
          <a
            href={instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex aspect-[4/5] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-puna-300 bg-puna-100/50 p-4 text-center transition-colors hover:border-puna-500 hover:bg-puna-100"
          >
            <span className="font-display text-lg text-puna-900">Ver más</span>
            <span className="text-xs uppercase tracking-widest text-puna-500">
              en Instagram
            </span>
          </a>
        </li>
      </ul>

      <p className="mt-6 text-xs text-puna-400">
        Contenido referencial. Las publicaciones enlazan al perfil oficial; no se reproduce
        ni se descarga material de Instagram.
      </p>
    </section>
  );
}
