<script lang="ts">
  import { css } from '../../../styled-system/css'
  import { onMount } from 'svelte'

  // ─── Scroll-reveal via IntersectionObserver ─────────────────────────────────
  let revealEls: HTMLElement[] = []

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })

  // ─── Valores de marca ────────────────────────────────────────────────────────
  const values = [
    { letter: 'A', label: 'Auténticos',  desc: 'Sin artificios ni poses.' },
    { letter: 'N', label: 'Nostálgicos', desc: 'Emociones de lo cotidiano.' },
    { letter: 'C', label: 'Cercanos',    desc: 'De igual a igual, siempre.' },
    { letter: 'E', label: 'Emocionales', desc: 'Conexión genuina, no transaccional.' },
    { letter: 'S', label: 'Estéticos',   desc: 'Cada detalle tiene intención.' },
  ]

  // ─── Estilos ─────────────────────────────────────────────────────────────────
  const sectionClass = css({
    backgroundColor: 'background',
    paddingBlock: '5rem',
    paddingInline: '1.5rem',
    overflow: 'hidden',
    desktop: { paddingBlock: '7rem', paddingInline: '4rem' },
  })

  const innerClass = css({
    maxWidth: '72rem',
    marginInline: 'auto',
  })

  const headingClass = css({
    fontFamily: 'heading',
    fontSize: '2.25rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'pasionHumahuaca',
    marginBottom: '2rem',
    desktop: { fontSize: '3.25rem' },
  })

  // Layout asimétrico principal
  const gridClass = css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '3rem',
    marginBottom: '5rem',
    desktop: {
      gridTemplateColumns: '5fr 4fr',
      gap: '4rem',
      alignItems: 'center',
    },
  })

  const narrativeClass = css({
    fontFamily: 'body',
    fontSize: '1.125rem',
    lineHeight: '1.9',
    color: 'text',
    desktop: { fontSize: '1.25rem' },
  })

  // Blob decorativo con Verde Bariloche
  const blobClass = css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const blobInnerClass = css({
    width: '100%',
    maxWidth: '18rem',
    aspectRatio: '1',
    marginInline: 'auto',
    backgroundColor: 'verdeBariloche',
    borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    desktop: { maxWidth: '22rem' },
  })

  const blobQuoteClass = css({
    fontFamily: 'heading',
    fontSize: '1rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'cremaPuntaIndio',
    textAlign: 'center',
    paddingInline: '2rem',
    lineHeight: '1.5',
    desktop: { fontSize: '1.125rem' },
  })

  // Decoración fileteado sutil
  const fileteadoClass = css({
    position: 'absolute',
    inset: '-8px',
    borderRadius: '65% 35% 50% 50% / 58% 42% 58% 42%',
    border: '2px solid token(colors.verdeBariloche)',
    opacity: 0.3,
    pointerEvents: 'none',
  })

  // ─── Sección de valores ───────────────────────────────────────────────────────
  const valuesSectionClass = css({
    borderTop: '1px solid token(colors.verdeBariloche)',
    paddingTop: '4rem',
  })

  const valuesHeadingClass = css({
    fontFamily: 'heading',
    fontSize: '1.5rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'cafeJujuy',
    marginBottom: '2.5rem',
    desktop: { fontSize: '2rem' },
  })

  const valuesGridClass = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    desktop: {
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1.25rem',
    },
  })

  const valueCardClass = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1.25rem',
    borderRadius: '12px',
    backgroundColor: 'cremaPuntaIndio',
    border: '1px solid token(colors.verdeBariloche)',
    transition: 'box-shadow 250ms ease, transform 200ms ease',
    _hover: {
      boxShadow: '0 4px 20px rgba(4, 89, 81, 0.15)',
      transform: 'translateY(-2px)',
    },
  })

  const valueLetterClass = css({
    fontFamily: 'heading',
    fontSize: '2.5rem',
    color: 'pasionHumahuaca',
    lineHeight: '1',
    letterSpacing: '0.04em',
  })

  const valueLabelClass = css({
    fontFamily: 'body',
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'cafeJujuy',
    letterSpacing: '0.03em',
    textTransform: 'uppercase',
  })

  const valueDescClass = css({
    fontFamily: 'body',
    fontSize: '0.8rem',
    color: 'cafeJujuy',
    lineHeight: '1.5',
    opacity: '0.75',
  })
</script>

<!-- Scroll-reveal: clase CSS controlada por IntersectionObserver -->
<section class={sectionClass} aria-label="Nuestra historia">
  <div class={innerClass}>

    <!-- Título de sección -->
    <div class="reveal" bind:this={revealEls[0]}>
      <h2 class={headingClass}>Nuestra historia</h2>
    </div>

    <!-- Grid asimétrico: narrativa + blob -->
    <div class={gridClass}>

      <div class="reveal" bind:this={revealEls[1]}>
        <p class={narrativeClass}>
          Feeltrados nace del deseo de revivir emociones auténticas, de detener el tiempo
          por un momento y volver a sentir.
        </p>
        <p class={narrativeClass} style="margin-top: 1.25rem;">
          Cada taza es una pausa elegida. Un refugio sensorial que une el pasado con el
          presente, donde el café no es solo una bebida: es una invitación a conectar con
          lo simple y verdadero.
        </p>
      </div>

      <!-- Blob decorativo con fileteado porteño -->
      <div class="reveal" bind:this={revealEls[2]}>
        <div class={blobClass}>
          <div class={blobInnerClass}>
            <div class={fileteadoClass} aria-hidden="true"></div>
            <blockquote class={blobQuoteClass}>
              "Filtrá<br />distinto"
            </blockquote>
          </div>
        </div>
      </div>

    </div>

    <!-- Bloque de valores -->
    <div class={valuesSectionClass}>
      <div class="reveal" bind:this={revealEls[3]}>
        <h3 class={valuesHeadingClass}>Lo que nos define</h3>
      </div>

      <div class={valuesGridClass}>
        {#each values as value, i}
          <div class="reveal" bind:this={revealEls[4 + i]}>
            <article class={valueCardClass}>
              <span class={valueLetterClass} aria-hidden="true">{value.letter}</span>
              <span class={valueLabelClass}>{value.label}</span>
              <span class={valueDescClass}>{value.desc}</span>
            </article>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>

<style>
  /* ─── Scroll-reveal ─────────────────────────────────────────────────────────
     Fade-in + leve subida. Transición calma, no eléctrica.
  ─────────────────────────────────────────────────────────────────────────── */
  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 600ms ease,
      transform 600ms ease;
  }

  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Escalonar cada elemento hijo ligeramente */
  .reveal:nth-child(2) { transition-delay: 80ms; }
  .reveal:nth-child(3) { transition-delay: 160ms; }
  .reveal:nth-child(4) { transition-delay: 240ms; }
  .reveal:nth-child(5) { transition-delay: 100ms; }
  .reveal:nth-child(6) { transition-delay: 150ms; }
  .reveal:nth-child(7) { transition-delay: 200ms; }
  .reveal:nth-child(8) { transition-delay: 250ms; }
  .reveal:nth-child(9) { transition-delay: 300ms; }
</style>
