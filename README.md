# PaseAR — Landing

Landing page de **PaseAR**, la app de turismo de Pilar, Buenos Aires. Toma la identidad
visual de la app original (azul, sol y la «P» de la bandera) y usa sus fotos reales de
Pilar para presentar la propuesta.

Hecha con React 19, TypeScript y Vite.

## Cómo correrla

```bash
npm install
npm run dev
```

La app queda disponible en la URL que muestra Vite (por defecto
`http://localhost:5173`).

Para ver el build de producción:

```bash
npm run build
npm run preview
```

## Qué incluye

- **Hero** con el mockup del teléfono y una captura real de la pantalla de inicio de
  la app, más el CTA de descarga.
- **Números** de PaseAR y **destinos** reales de Pilar con fotografías del proyecto.
- **Funciones** (mapa, guía con IA, clima, idiomas) y **pasos** de uso.
- **Comunidad** con Instagram, grilla de fotos y accesos también en el footer.
- **Sección de descarga directa del APK**, con el link configurable desde
  `Descarga.tsx`.
- Diseño responsive (móvil, tablet y escritorio), menú móvil con bloqueo de scroll.
- Animaciones de entrada con `IntersectionObserver` y respeto por
  `prefers-reduced-motion`.
- Metadatos de SEO, Open Graph, favicon y datos estructurados de la app.

## Estructura

```
public/
  pasear-logo.png            Logo de la app (esquinas transparentes)
  app-captura.webp           Captura real de la app para el mockup
  favicon.png                Favicon
  apple-touch-icon.png
  lugares/                   Fotos optimizadas de los destinos
src/
  components/                Logo, iconos y mockup del teléfono
  data/site.ts               Destinos, números y pasos
  data/social.ts             Cuenta de Instagram (preparado para sumar más redes)
  sections/                  Navbar, Hero, Stats, Destinos, Features, Pasos, Redes, Descarga, Footer
  utils/reveal.ts            Helper para animaciones escalonadas
  App.tsx                    Composición de la página
  App.css                    Estilos del landing
  index.css                  Reset, tokens y base tipográfica
scripts/
  preparar_assets.py         Regenera logo/favicon/fotos desde el proyecto original
  preparar_captura.py        Recorta la captura y completa la foto de la Capilla
  capturas.mjs               Capturas de control con Edge headless (opcional)
```

## Personalización

- **Destinos, números y pasos:** `src/data/site.ts`.
- **Redes sociales:** `src/data/social.ts` (hoy `@PASEARAPP` en Instagram).
- **Link del APK:** `src/sections/Descarga.tsx` (constante `APK_URL`).
- **Textos de secciones:** cada archivo de `src/sections/`.
- **Email de contacto:** `Footer.tsx` (`pasear.02@gmail.com`).
- **Colores y tipografías:** variables en `src/index.css`.
- **Dominio/SEO:** `index.html` (`canonical`, `og:url`, `og:image`).

### Antes de publicar

1. **Redes sociales:** en `src/data/social.ts` está la cuenta de Instagram. Si sumás
   Facebook o TikTok, agregá el objeto correspondiente y su ícono.
2. **Link del APK:** pegá la URL directa en `const APK_URL` de
   `src/sections/Descarga.tsx`. Mientras esté vacía, el botón se muestra como
   «Muy pronto». El archivo `.apk` puede estar en tu hosting, un bucket o un enlace
   directo de descarga.
3. **Dominio:** actualizá `canonical` y las URLs absolutas de Open Graph.
4. **Contenido:** revisá los textos de los destinos y las afirmaciones de la app
   (cantidad de lugares, disponibilidad de la guía, etc.) antes de difundirla.

## Assets

El logo (`pasear-logo.png`), el favicon y las fotos de `public/lugares/` salen de la
app PaseAR / Pilar Turismo con la que se trabajó antes. Las fotos fueron
redimensionadas y comprimidas para web con `scripts/preparar_assets.py`.

La pantalla del mockup (`public/app-captura.webp`) es una captura real de la app. El
script `scripts/preparar_captura.py` le recorta la barra de navegación de Android y
completa la foto de la Capilla del Milagro, que en la captura original había quedado
con el placeholder gris.

Para regenerar el logo y las fotos (requiere Pillow y que el proyecto `pilar-turismo`
esté como carpeta hermana):

```bash
python scripts/preparar_assets.py
```

Para reemplazar la captura por una nueva (misma resolución de 702 px de ancho):

```bash
python scripts/preparar_captura.py ruta/a/nueva-captura.png
```

## Verificación

```bash
npm run lint
npm run build
```

Las capturas de control de escritorio, tablet y móvil están en `shots/` (no se
incluyen en el build).
