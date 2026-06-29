import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  experienceStory,
  instagramPosts,
  instagramProfile,
  type ExperienceMoment,
  type InstagramPost,
} from '@/data/content';

function ReelCard({ post }: { post: InstagramPost }) {
  return (
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
        sizes="(min-width: 1024px) 22vw, 45vw"
        className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 group-focus-visible:grayscale-0"
      />
      <div className="absolute inset-0 bg-puna-900/25 transition-opacity duration-700 group-hover:opacity-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-puna-950/75 via-transparent to-transparent" />
      <span className="absolute left-3 top-3 rounded-full bg-puna-50/90 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-widest text-puna-700">
        {post.type === 'reel' ? 'Reel' : 'Post'}
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-display text-sm leading-snug text-puna-50">{post.title}</p>
        <span className="mt-1 inline-block text-xs text-puna-100/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Abrir en Instagram
        </span>
      </div>
    </a>
  );
}

function MomentBlock({ moment, index }: { moment: ExperienceMoment; index: number }) {
  const reels = moment.reelIds
    .map((id) => instagramPosts.find((p) => p.id === id))
    .filter((p): p is InstagramPost => Boolean(p));
  // Alternamos el lado del relato y los reels en cada momento (desktop).
  const reelsFirst = index % 2 === 1;

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={reelsFirst ? 'lg:order-2' : ''}>
        <span className="text-xs font-medium uppercase tracking-widest text-puna-500">
          {moment.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl leading-tight text-puna-900 sm:text-3xl">
          {moment.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-puna-600 sm:text-base">
          {moment.description}
        </p>
      </div>

      <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${reelsFirst ? 'lg:order-1' : ''}`}>
        {reels.map((post) => (
          <ReelCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export function Experiencia() {
  return (
    <section id="experiencia" className="container-content py-20 sm:py-28">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="La experiencia"
          title="Un viaje hacia el silencio de la Puna"
          description="Más que un tren, es un recorrido por uno de los paisajes más imponentes de Argentina. Seguí el viaje momento a momento, contado a través de los reels de nuestra comunidad."
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

      <div className="mt-16 space-y-16 sm:space-y-20">
        {experienceStory.map((moment, index) => (
          <MomentBlock key={moment.title} moment={moment} index={index} />
        ))}
      </div>

      <p className="mt-10 text-xs text-puna-400">
        Contenido referencial. Las publicaciones enlazan al perfil oficial; no se reproduce
        ni se descarga material de Instagram.
      </p>
    </section>
  );
}
