# Spa AntoniRos · Landing page

Landing comercial mobile-first para presentar la marca, facilitar la elección de tratamientos y convertir por WhatsApp.

## Ejecutar

No requiere compilación. Desde `spa-landing/` ejecuta un servidor local, por ejemplo `python3 -m http.server 8080`, y abre `http://localhost:8080`.

## Estructura

- `index.html`: contenido y arquitectura completa.
- `css/`: variables, base, layout, componentes, animaciones y responsive.
- `js/`: datos de tratamientos, WhatsApp, navegación, scroll, carrusel y animaciones.
- `assets/`: branding y carpetas preparadas para fotografías finales.

## Editar

- Colores: `css/variables.css`.
- WhatsApp: `WHATSAPP_NUMBER` en `js/app.js`.
- Tratamientos: objeto `services` en `js/app.js`.
- Ubicación: sección `#ubicacion` en `index.html`.
- Imágenes: reemplaza los placeholders y consulta `ASSETS_NEEDED.md`.

## GitHub Pages

En GitHub abre **Settings → Pages**, selecciona la rama `main` y la carpeta raíz. La URL prevista es `https://maucxto.github.io/SPA-LANDING/spa-landing/`.

## Fuente del catálogo

Los 14 servicios publicados corresponden exclusivamente a las filas resaltadas en el PDF `Tratamientos con Costo spa.pdf`: 4 tratamientos faciales, 4 masajes, 3 opciones de aparatología y 3 tratamientos corporales.
