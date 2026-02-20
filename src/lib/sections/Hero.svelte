<script lang="ts">
  import { css, cx } from '../../../styled-system/css'
  import Button from '../../components/Button.svelte'

  // ─── Animación fade-in: 500ms para reflejar "filtra lento" ──────────────────
  let visible = $state(false)

  import { onMount } from 'svelte'
  onMount(() => {
    visible = true
  })

  // ─── Estilos con Panda CSS tokens ──────────────────────────────────────────
  const sectionClass = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    position: 'relative',
    overflow: 'hidden',
    paddingInline: '1.5rem',
    textAlign: 'center',

    // Transición de entrada global de la sección
    opacity: 0,
    transition: 'opacity 500ms ease',
  })

  const sectionVisibleClass = css({
    opacity: 1,
  })

  const headlineClass = css({
    fontFamily: 'heading',
    fontSize: '3.5rem',
    lineHeight: '1.1',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: 'pasionHumahuaca',
    margin: '0',
    desktop: {
      fontSize: '5.5rem',
    },
  })

  const subheadlineClass = css({
    fontFamily: 'body',
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: 'text',
    marginBlockStart: '1.25rem',
    marginBlockEnd: '2.5rem',
    maxWidth: '28rem',
    desktop: {
      fontSize: '1.375rem',
    },
  })

  // ─── Mascota bicolor: detalle sutil flotante ───────────────────────────────
  const mascotClass = css({
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    width: '5.5rem',
    height: '6.5rem',
    opacity: 0.12,
    pointerEvents: 'none',
    userSelect: 'none',

    // Animación flotante sutil — calma, no eléctrica
    animation: 'mascotFloat 4s ease-in-out infinite',
  })
</script>

<section class={cx(sectionClass, visible && sectionVisibleClass)} aria-label="Hero">
  <h1 class={headlineClass}>Pasá. Poné pausa</h1>
  <p class={subheadlineClass}>+ lo demás + puede esperar</p>

  <Button label="Sentir el sabor de hoy" />

  <!-- Mascota: detalle lúdico flotante con área de protección respetada -->
  <div class={mascotClass} aria-hidden="true">
    <svg viewBox="0 0 88 104" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
      <title>Mascota Feeltrados</title>
      <!-- Silueta bicolor simplificada — placeholder para el asset final -->
      <ellipse cx="44" cy="38" rx="30" ry="32" fill="#BA132A" />
      <ellipse cx="44" cy="38" rx="30" ry="32" fill="#045951" clip-path="inset(0 50% 0 0)" />
      <!-- Ojos -->
      <circle cx="34" cy="34" r="4" fill="#BABFAC" />
      <circle cx="54" cy="34" r="4" fill="#BABFAC" />
      <!-- Sonrisa -->
      <path d="M36 48 Q44 56 52 48" stroke="#BABFAC" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <!-- Pies y sombra (define el área de protección) -->
      <rect x="30" y="70" width="10" height="14" rx="4" fill="#2C1A0E" />
      <rect x="48" y="70" width="10" height="14" rx="4" fill="#2C1A0E" />
      <ellipse cx="44" cy="96" rx="28" ry="4" fill="#2C1A0E" opacity="0.25" />
    </svg>
  </div>
</section>

<style>
  @keyframes mascotFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
</style>
