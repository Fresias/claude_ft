<script lang="ts">
  import { css } from '../../styled-system/css'

  interface Props {
    label: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    onclick?: () => void
  }

  let { label, type = 'button', disabled = false, onclick }: Props = $props()

  const buttonClass = css({
    // Tipografía — Nobel Uno para el cuerpo/UI
    fontFamily: 'body',
    fontSize: '1rem',
    fontWeight: '600',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',

    // Color — variante Pasión Humahuaca
    backgroundColor: 'pasionHumahuaca',
    color: 'cremaPuntaIndio',

    // Forma y espaciado
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '2rem',
    paddingBlock: '0.875rem',
    borderRadius: '2px',
    border: 'none',
    cursor: 'pointer',

    // Transición fluida — filosofía "filtra distinto"
    transition: 'background-color 250ms ease, transform 150ms ease',

    _hover: {
      backgroundColor: 'verdeBariloche',
    },

    _active: {
      transform: 'scale(0.97)',
    },

    _focusVisible: {
      outline: '2px solid token(colors.verdeBariloche)',
      outlineOffset: '3px',
    },

    _disabled: {
      opacity: '0.45',
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  })
</script>

<button
  class={buttonClass}
  {type}
  {disabled}
  {onclick}
  aria-disabled={disabled}
>
  {label}
</button>
