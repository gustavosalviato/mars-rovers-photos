import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray400: '#323238',
      gray100: '#e1e1e6',
      gray500: '#7C7C8A',

      green500: '#00875f',
      green300: '#00b37e',

      baseCard: '#7B96B2',
      baseHover: '#3A536B',

      yellow: '#DBAC2C',
      yellow100: '#E2C932',
      yellowLight: '#F1E9C9',
      yellowDark: '#C47F17',

      redDark: '#AA2834',
    },
  },
})
