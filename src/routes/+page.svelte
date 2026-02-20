<script lang="ts">
  import { css } from '../../styled-system/css'
  import Hero from '$lib/sections/Hero.svelte'

  const pageClass = css({
    backgroundColor: 'background',
    color: 'text',
    minHeight: '100vh',
  })
</script>

<svelte:head>
  <title>Feeltrados — Filtrá distinto</title>
  <meta name="description" content="Café de especialidad que invita a detenerse, conectar y disfrutar." />
</svelte:head>

<main class={pageClass}>
  <Hero />
</main>
