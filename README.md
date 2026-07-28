# Vocarte — Landing page

Primera versión funcional de la landing page de **Vocarte**, escuela de arte para niños y jóvenes en Ventanilla, Perú. La página presenta los talleres, grupos por edades, beneficios e información frecuente, y dirige las consultas a WhatsApp.

## Tecnologías

- Vite
- React
- TypeScript
- CSS responsivo
- Lucide React para iconografía

## Instalación y ejecución

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir la página en el navegador.

## Versión de producción

```bash
npm run build
npm run preview
```

La compilación optimizada se genera en `dist/`.

## Configuración del negocio

Los datos editables están centralizados en:

`src/config/business.ts`

Desde ese archivo se pueden actualizar:

- Número y mensaje inicial de WhatsApp.
- Nombre, lema y ubicación.
- Enlaces de navegación.
- Nombres y descripciones de los talleres.

### Cambiar el número de WhatsApp

Busca esta propiedad:

```ts
number: '519XXXXXXXX'
```

Reemplázala por el número real con código de país, sin `+`, espacios ni guiones. Ejemplo de formato: `51` seguido por los nueve dígitos del celular. Todos los botones de la página usan esta única configuración.

## Imágenes e identidad

- `LOGO.jpeg` es el archivo original y debe conservarse intacto.
- `public/logo-vocarte.jpg` es la copia recortada y optimizada para la web.
- `public/favicon.png` es el icono del navegador.
- `public/og-vocarte.jpg` es la imagen para compartir el enlace en redes y mensajería.

Para sustituir una imagen, conserva el mismo nombre dentro de `public/` o actualiza la ruta correspondiente en los componentes y en `index.html`. Mantén proporciones similares para evitar cambios de maquetación.

## Redes sociales futuras

No se muestran enlaces vacíos. Cuando Vocarte cuente con perfiles oficiales, se pueden añadir en el pie de página, dentro de `src/App.tsx`, usando enlaces completos, etiquetas accesibles y apertura segura en una pestaña nueva.

## Información pendiente

- Número real de WhatsApp.
- Dirección exacta, solo si se desea publicar.
- Horarios, precios y disponibilidad confirmados.
- Perfiles oficiales de redes sociales.
- Fotografías propias autorizadas, si se desean incorporar en una versión futura.

El proyecto no inventa estos datos y no incluye backend, formulario, pagos ni sistema de inscripción.
