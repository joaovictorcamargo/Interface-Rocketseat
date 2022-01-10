import { theme, DefaultTheme } from '@chakra-ui/core'

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: {
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257e5',
    },
    gray: {
      ...theme.colors.gray,
      100: 'rgba(0, 0, 0, 0.24)',
      300: 'rgba(0, 80, 47, 1)',
      600: 'rgba(255, 242, 0, 1)',
      700: 'rgba(160, 174, 192, 1)',
      800: 'rgba(255, 255, 255, 1)'
    },
  },
}

export default customTheme;