import { Hero } from '@/components/home/Hero';
import { Experiencia } from '@/components/home/Experiencia';
import { Recorrido } from '@/components/home/Recorrido';
import { VideoBand } from '@/components/home/VideoBand';
import { Tarifas } from '@/components/home/Tarifas';
import { Recomendaciones } from '@/components/home/Recomendaciones';
import { InstagramFeed } from '@/components/home/InstagramFeed';

export default function Home() {
  return (
    <>
      <Hero />
      <Experiencia />
      <Recorrido />
      <VideoBand />
      <Tarifas />
      <Recomendaciones />
      <InstagramFeed />
    </>
  );
}
