# Tren a las Nubes — Guía de Desarrollo Frontend (Rediseño Demo)

> Documento de instrucciones para el rediseño del sitio **Tren a las Nubes**
> (https://trenalasnubes.com.ar/inicio-es/) aproximándolo a la experiencia de una
> aerolínea moderna tipo **Flybondi** (https://flybondi.com/ar).
> **Stack:** Next.js (App Router) + TailwindCSS. **Alcance inicial:** maquetar la
> Home sin funcionalidades reales. Es una **demo demostrativa**.

---

## 1. Objetivo

Recrear la página de inicio del Tren a las Nubes con una estética y UX inspiradas en
una aerolínea low cost moderna:

- Hero con buscador de "reserva" prominente (origen/destino → fecha → pasajeros → CTA).
- Secciones de destinos/experiencias en tarjetas (cards) visuales.
- Bloques de promociones, beneficios y prueba social.
- Navegación clara, sticky, con CTA de compra siempre visible.
- Footer rico con links de interés, contacto y redes.

**Importante:** en esta primera etapa todo es **visual/maquetado**. Sin lógica de
búsqueda, sin pagos, sin backend. Los botones pueden ser placeholders.

---

## 2. Stack y dependencias

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14+ (App Router, React Server Components) |
| Lenguaje | TypeScript |
| Estilos | TailwindCSS 3+ |
| Iconos | lucide-react |
| Fuentes | next/font (Google Fonts) |
| Imágenes | next/image |
| Animaciones (opcional) | framer-motion |
| Componentes (opcional) | shadcn/ui |

### Inicialización sugerida

```bash
npx create-next-app@latest tren-a-las-nubes --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd tren-a-las-nubes
npm install lucide-react
# opcionales
npm install framer-motion
```

---

## 3. Estructura de carpetas

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz (fuentes, metadata, Navbar, Footer)
│   ├── page.tsx            # Home (compone las secciones)
│   └── globals.css         # Tailwind + variables CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── SearchBox.tsx
│   │   ├── Destinos.tsx
│   │   ├── Experiencias.tsx
│   │   ├── Promociones.tsx
│   │   ├── Beneficios.tsx
│   │   └── CtaFinal.tsx
│   └── ui/                 # Botones, Card, Badge, etc. reutilizables
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Container.tsx
├── data/
│   └── content.ts          # Datos mock (destinos, promos, beneficios)
└── lib/
    └── utils.ts            # helpers (cn, etc.)
public/
└── images/                 # imágenes/placeholders
```

---

## 4. Identidad visual (Design System)

Mantener el espíritu del Tren a las Nubes (paisaje de la Puna, altura, cielo) pero
con la limpieza y energía de una aerolínea.

### Paleta de colores (sugerida, ajustable)

```js
// tailwind.config.ts -> theme.extend.colors
colors: {
  cielo:   { DEFAULT: '#1B9CFC', dark: '#0B6FB8' }, // azul cielo de altura
  puna:    { DEFAULT: '#E07A3F', dark: '#B85C28' }, // tierra/ocre de la Puna
  nube:    '#F5F7FA',                                // gris muy claro de fondo
  carbon:  '#1A2230',                                // texto principal
  acento:  '#FFC542',                                // amarillo CTA / highlight
}
```

> Flybondi usa amarillo intenso como acento. Para Tren a las Nubes proponemos un
> azul cielo como color primario + ocre de la Puna como secundario, y amarillo
> como acento de CTA. Validar con el usuario antes de cerrar la paleta.

### Tipografía

- **Títulos:** una sans geométrica con carácter (ej. `Poppins` o `Montserrat`).
- **Cuerpo:** sans neutra y legible (ej. `Inter`).
- Cargar con `next/font/google` en `layout.tsx`.

### Tokens de UI

- **Radios:** `rounded-2xl` para cards y buscador; `rounded-full` para botones CTA.
- **Sombras:** `shadow-lg`/`shadow-xl` suaves en cards y en el SearchBox flotante.
- **Espaciado:** secciones con `py-16 md:py-24`; contenedor `max-w-7xl mx-auto px-4`.
- **Botón primario:** fondo acento, texto carbón, hover con leve `scale`/oscurecido.

---

## 5. Secciones de la Home (orden y contenido)

### 5.1 Navbar (`components/layout/Navbar.tsx`)
- Sticky, fondo translúcido con blur al hacer scroll.
- Logo a la izquierda.
- Links: `Experiencia` · `Recorrido` · `Servicios` · `Preguntas frecuentes` · `Contacto`.
- Selector de idioma (ES / PT / EN) — solo visual.
- CTA derecha: botón **"Comprar pasajes"** (acento, `rounded-full`).
- Versión mobile: menú hamburguesa con drawer.

### 5.2 Hero + SearchBox (`Hero.tsx`, `SearchBox.tsx`)
- Imagen full-width de fondo (Viaducto La Polvorilla / paisaje de la Puna) con overlay oscuro.
- Título grande: *"Viví la experiencia del tren más asombroso del mundo"*.
- Subtítulo: altura 4.220 msnm, tercer tren más alto del mundo.
- **SearchBox** flotante (estilo buscador de vuelos), tarjeta blanca elevada:
  - Campos visuales: `Origen` (Salta) · `Experiencia/Recorrido` · `Fecha` · `Pasajeros`.
  - Botón **"Buscar"** (solo visual en esta etapa).
- Adaptar a una sola columna en mobile.

### 5.3 Destinos / Recorridos (`Destinos.tsx`)
- Grilla de cards (3-4 col desktop, scroll horizontal en mobile).
- Cada card: imagen, nombre del tramo/atractivo, breve descripción, "desde $XX", CTA.
- Mock en `data/content.ts` (ej.: La Polvorilla, San Antonio de los Cobres, Salinas Grandes).

### 5.4 Experiencias (`Experiencias.tsx`)
- Bloques alternados imagen/texto describiendo la vivencia a bordo, servicios, gastronomía.

### 5.5 Promociones (`Promociones.tsx`)
- Banda destacada con promos/financiación (inspirado en "Precios increíbles" de Flybondi).
- Cards de promo con badge de descuento.

### 5.6 Beneficios (`Beneficios.tsx`)
- Fila de 3-4 íconos + texto: seguridad en alta montaña, atención bilingüe,
  reserva flexible, paisajes únicos.

### 5.7 CTA final (`CtaFinal.tsx`)
- Banner full-width con imagen + título + botón **"Comprar pasajes"**.

### 5.8 Footer (`components/layout/Footer.tsx`)
- Columnas: Contacto (Ameghino 660, Estación Central, Salta — 0800 888 NUBE),
  Links de interés (NatGeo, Turismo Salta, etc.), Legales, Redes sociales.
- Línea de copyright: *Tren a las Nubes ® — Servicio Ferroviario Turístico S.E.*

---

## 6. Datos mock

Centralizar todo el contenido de ejemplo en `src/data/content.ts` exportando arrays
tipados (destinos, promociones, beneficios, navItems). Esto permite iterar el diseño
sin tocar los componentes y facilita conectar datos reales más adelante.

```ts
export type Destino = {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  precioDesde?: number;
};
```

### Itinerario del recorrido (`data/itinerary.ts`)

Dato real para alimentar el timeline de la Fase 2 (referencial):

```ts
export const itinerary = [
  { time: '06:15', place: 'Estación de Trenes Salta', description: 'Check-in en Plazoleta Antofagasta.' },
  { time: '07:35', place: 'Campo Quijano', description: 'Parada fotográfica.' },
  { time: '08:05', place: 'Viaducto El Toro', description: 'Parada fotográfica.' },
  { time: '08:55', place: 'Formación Geológica Yacoraite', description: 'Parada fotográfica.' },
  { time: '09:25', place: 'El Alfarcito', description: 'Desayuno campestre y recorrido.' },
  { time: '11:40', place: 'San Antonio de los Cobres', description: 'Llegada para transbordo al tren.' },
  { time: '12:00', place: 'Salida en tren', description: 'Viaje hacia el Viaducto La Polvorilla.' },
  { time: '13:00', place: 'Viaducto La Polvorilla', description: 'Llegada y descenso de visita.' },
  { time: '14:45', place: 'San Antonio de los Cobres', description: 'Regreso y tiempo libre.' },
  { time: '17:20', place: 'Santa Rosa de Tastil', description: 'Parada técnica y merienda.' }
];
```

### Datos de reserva (`data/reserva.ts`)

Para el SearchBox y la reserva simulada (Fase 3):

```ts
export const serviceTypes = [
  { id: 'bus-tren-bus', label: 'Bus-Tren-Bus' },
  { id: 'solo-tren', label: 'Solo Tren' }
];

export const passengerCategories = [
  { id: 'extranjero', label: 'Extranjero' },
  { id: 'extranjero-menor', label: 'Extranjero menor' },
  { id: 'residente-arg', label: 'Residente argentino' },
  { id: 'residente-arg-menor', label: 'Residente argentino menor' },
  { id: 'jubilado', label: 'Jubilado' }
];
```

> Aclaraciones a mostrar en tarifas: *"Menores de 3 a 12 años inclusive. Menores de 2 años no abonan ticket."* y *"Valores sujetos a actualización. Demo referencial."*

---

## 7. URLs canónicas del sitio

Páginas oficiales del Tren a las Nubes (referencia de contenido y navegación):

```txt
https://trenalasnubes.com.ar/inicio-es/          # Home
https://trenalasnubes.com.ar/recorrido-es/       # Recorrido / itinerario
https://trenalasnubes.com.ar/tarifas-es/         # Tarifas
https://trenalasnubes.com.ar/recomendaciones-es/ # Recomendaciones de altura
https://trenalasnubes.com.ar/contacto-es/        # Contacto
https://trenalasnubes.com.ar/comprar             # Compra (flujo oficial)
```

---

## 8. Material multimedia (uso referencial)

> **Importante:** estos assets son **material referencial** para la maqueta local.
> Usar las URLs públicas como referencia, **no** redistribuir imágenes descargadas,
> **no** descargar reels de Instagram y **no** presentar los assets como propios.
> Incluir la nota legal de la sección 15.

### Imágenes públicas detectadas

```txt
https://trenalasnubes.com.ar/wp-content/uploads/2021/04/DSC8065-fijas.png   # Hero principal
https://trenalasnubes.com.ar/wp-content/uploads/2021/04/21.png              # Galería / cards
https://trenalasnubes.com.ar/wp-content/uploads/2021/04/15.png              # Galería / fondos
https://trenalasnubes.com.ar/wp-content/uploads/2019/11/CMV_4574_Snapseed.jpg # Bloque experiencia
https://trenalasnubes.com.ar/wp-content/uploads/2021/02/tarifa_local-1.jpeg # Ref. tarifas/beneficios
https://trenalasnubes.com.ar/wp-content/uploads/2019/12/tripadvisor_logo_.png
https://trenalasnubes.com.ar/wp-content/uploads/2021/01/saltavisit-argentina.png
```

### Video referencial

```txt
https://www.youtube.com/watch?v=RxZRbR99xkg
https://i.ytimg.com/vi/RxZRbR99xkg/hqdefault.jpg   # thumbnail
```

### Redes sociales (links/embeds oficiales únicamente)

```txt
https://www.instagram.com/trenalasnubesoficial/
https://www.youtube.com/channel/UCa9wf_PqKuMUQiT1wiPAhwg
https://www.facebook.com/trenalasnubesOficial/
https://twitter.com/trenalasnubesok
```

Para Instagram: usar un bloque simulado **"Comunidad / Instagram"** con cards mock y
botón al perfil oficial. No descargar contenido.

### Recomendaciones de uso de imágenes con `next/image`

- Guardar assets locales en `public/images/`.
- Para los assets remotos, registrar el dominio en `next.config.js` (`images.remotePatterns`).
- Usar siempre `alt` descriptivo y `priority` en la imagen del hero.

---

## 9. Responsive y accesibilidad

- **Mobile-first.** Probar breakpoints `sm`, `md`, `lg`, `xl`.
- Contraste AA en textos sobre imágenes (usar overlay).
- Navegación por teclado y `aria-label` en botones de íconos.
- Imágenes con `alt`. Headings jerárquicos (`h1` único en el hero).

---

## 10. Convenciones de código

- Componentes en PascalCase, un componente por archivo.
- Server Components por defecto; `"use client"` solo donde haya interacción (menú,
  selector de idioma, etc.).
- Helper `cn()` para combinar clases condicionales.
- No introducir lógica de negocio en esta etapa: botones = placeholders.

---

## 11. Roadmap por fases

- [ ] **Fase 0 — Setup:** crear proyecto Next.js + Tailwind, configurar paleta, fuentes y layout base (Navbar + Footer vacíos).
- [ ] **Fase 1 — Home (esta entrega):** Hero + SearchBox visual, Destinos, Experiencias, Promociones, Beneficios, CTA final, Footer. Todo maquetado, sin funcionalidad.
- [ ] **Fase 2 — Componentes:** página de detalle de recorrido, página de experiencia, FAQ.
- [ ] **Fase 3 — Interacción:** estados del SearchBox, filtros, animaciones (framer-motion).
- [ ] **Fase 4 — Integración:** datos reales / API, i18n (ES/PT/EN), formulario de contacto.

---

## 12. Comandos útiles

```bash
npm run dev      # desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir build
npm run lint     # linter
```

---

## 13. Criterios de aceptación — Fase 1

- La Home se ve completa y atractiva en desktop y mobile.
- Estética coherente tipo aerolínea (buscador hero, cards, promos, CTA destacada).
- Contenido del Tren a las Nubes (no de Flybondi) en textos, contacto y footer.
- Sin errores de build ni de consola. Lighthouse de estructura/accesibilidad razonable.
- Código organizado según la estructura de carpetas propuesta.
- El prototipo incluye la nota de uso referencial de assets (sección 14).

---

## 14. Nota legal (incluir en el demo)

> Este prototipo es una propuesta de diseño **no oficial**, desarrollada con fines
> demostrativos en entorno local. Las imágenes, videos y recursos referenciados
> pertenecen a sus respectivos titulares y se utilizan únicamente como material
> referencial para evaluación interna. La publicación, redistribución o uso final
> del material requerirá autorización expresa de los titulares correspondientes.
> No se copian textos, estilos ni assets de Flybondi de manera literal.
