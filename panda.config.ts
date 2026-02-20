import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Habilita el preflight para resetear estilos base del navegador
  preflight: true,

  // Rutas donde Panda CSS busca el uso de tokens y utilidades
  include: ['./src/**/*.{svelte,ts}'],
  exclude: [],

  // ─── Design Tokens ──────────────────────────────────────────────────────────
  theme: {
    extend: {
      // --- Breakpoints ---
      // Mobile-first: 375px base, salto a Desktop en 1440px
      breakpoints: {
        mobile: '375px',
        desktop: '1440px',
      },

      // --- Tokens de Color —"Caminito Radiante" ---
      tokens: {
        colors: {
          // Acento primario — CTAs y elementos de énfasis
          pasionHumahuaca: { value: '#BA132A' },

          // Fondo base — nunca usar blancos puros industriales
          cremaPuntaIndio: { value: '#BABFAC' },

          // Acento secundario — soporte y contraste
          verdeBariloche: { value: '#045951' },

          // Color de texto principal — marrón profundo de café
          cafeJujuy: { value: '#2C1A0E' },
        },

        // --- Tokens de Tipografía ---
        fonts: {
          // Para títulos H1 / H2 — All Caps, sin minúsculas
          heading: { value: "'The Foregen', serif" },

          // Para cuerpo de texto, párrafos y UI general
          body: { value: "'Nobel Uno', sans-serif" },
        },
      },

      // --- Semantic Tokens ---
      // Mapean los tokens crudos a roles semánticos de la aplicación
      semanticTokens: {
        colors: {
          // Fondo base de la aplicación
          background: {
            value: '{colors.cremaPuntaIndio}',
          },

          // Color de texto principal
          text: {
            value: '{colors.cafeJujuy}',
          },

          // Alias semánticos para los acentos
          accent: {
            primary: { value: '{colors.pasionHumahuaca}' },
            secondary: { value: '{colors.verdeBariloche}' },
          },
        },
      },
    },
  },

  outdir: 'styled-system',
})
