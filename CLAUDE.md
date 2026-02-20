# Feeltrados — Project Guidelines for AI Assistants

## Project Overview

Feeltrados es una marca de café de especialidad que busca reconectar con el disfrute cotidiano, funcionando como un refugio sensorial que une el pasado con el presente. El objetivo es construir comunidad a través de la conexión humana y el diseño consciente.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Svelte / SvelteKit |
| Styling | Panda CSS |
| Deployment | Vercel |

- **Panda CSS**: Priorizar Design Tokens sobre estilos inline. Definir todos los valores de marca como tokens reutilizables.
- **SvelteKit**: Seguir la convención de rutas basada en carpetas (`src/routes/`).

---

## Brand Identity & Design System

Toda decisión visual debe seguir una estética **retro-contemporánea**.

### 1. Paleta de Colores — "Caminito Radiante"

| Rol | Nombre | Hex |
|-----|--------|-----|
| Fondo Principal | Crema Punta Indio | `#BABFAC` |
| Acento Primario (CTAs) | Pasión Humahuaca | `#BA132A` |
| Acento Secundario | Verde Bariloche | `#045951` |
| Texto | Café Jujuy | *(Marrón profundo)* |

> **Regla**: Nunca usar blancos puros industriales. El fondo siempre debe ser Crema Punta Indio o derivado cálido.

### 2. Tipografías

| Uso | Fuente | Estilo |
|-----|--------|--------|
| Títulos (H1, H2) | The Foregen | Regular, All Caps |
| Cuerpo de texto | Nobel Uno | — |
| Logo / Branding | Calcio | Uso exclusivo — no usar en títulos ni cuerpos |

- **The Foregen**: actúa como puente entre lo tradicional y contemporáneo.
- **Nobel Uno**: debe transmitir un tono cálido y profesional.
- **Calcio**: reservado únicamente para elementos de branding del logo.

### 3. Elementos Gráficos

- **Mascota**: utilizar como puente emocional y detalle lúdico. Tamaño mínimo: `5.5cm × 6.5cm` para garantizar legibilidad.
- **Formas**: preferir formas orgánicas y trazos que remitan a lo hecho a mano (fileteado porteño moderno).

---

## Tone of Voice

El lenguaje debe sonar como **una charla entre conocidos en una cafetería**.

| Atributo | Descripción |
|----------|-------------|
| Directo | Claro y conciso, sin exageraciones ni arrogancia |
| Humano | Cálido, amable y cercano |
| Relajado | Descontracturado, sin poses ni artificios |
| Inspirador | Narrativo y empático, sin ser excesivamente promocional |

---

## Development Rules

### Accesibilidad
- Cumplir **WCAG AA** como mínimo en todos los componentes.
- Verificar siempre el contraste entre el fondo Crema (`#BABFAC`) y los colores de acento.

### Animaciones e Interacciones
- Las micro-interacciones deben ser **fluidas pero no "eléctricas"**.
- Reflejar la filosofía **"filtra distinto"**: pausa, calma y disfrute.
- Evitar transiciones agresivas o rebotes exagerados.

### Estilos con Panda CSS
- Definir la paleta, tipografías y tokens en `panda.config.ts` antes de usarlos en componentes.
- No usar valores hardcodeados en los componentes; referenciar siempre los tokens del sistema de diseño.

### Componentes Svelte
- Escribir componentes con responsabilidad única.
- Preferir composición sobre herencia.
- Usar `$props()` y las runas de Svelte 5 cuando aplique.

---

## Project Philosophy

> "Feeltrados filtra distinto."

Cada decisión de diseño y desarrollo debe honrar este concepto: crear experiencias que inviten a detenerse, a conectar y a disfrutar. El código y la UI son parte de esa experiencia.
