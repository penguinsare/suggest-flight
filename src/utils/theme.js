import { theme } from '@chakra-ui/core';

// Let's say you want to add custom colors
const myTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  colors: {
    ...theme.colors,
    primary: {
      500: '#0d6ffb',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  fieldBorderWidth: {
    thin: '1px',
    bold: '5px',
  },
  /* fontSizes: {
      xxs: '12px',
      xs: '16px',
      sm: '18px',
      md: '20px',
      lg: '24px',
      xl: '30px',
      '2xl': '36px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '72px',
      '6xl': '86px',
    }, */
};

export default myTheme;
