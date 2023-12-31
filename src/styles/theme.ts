import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: {
      darkest: '#512450',
      dark: '#F4AA3A',
      pure: '#0A817F',
      light: '#13D1CE',
      '200': '#0A817F',
    },
    secondary: {
      darkest: '#29003B',
    },
    neutral: {
      darkest: '#222222',
      dark: '#2C2D34',
      pure: '#666666',
      light: '#E9E9E9',
      background: '#F8F8F8',
      disabled: '#999999',
    },
    positive: {
      dark: '#03581E',
      pure: '#00641F',
      light: '#51DC7C',
      background: '#C6F6D5',
    },
    negative: {
      dark: '#660202',
      pure: '#B00F0F',
      light: '#FF7878',
      background: '#FED7D7',
    },
    informative: {
      dark: '#033558',
      pure: '#05609E',
      light: '#79C4F8',
      background: '#D8EAFC',
    },
    warning: {
      dark: '#957000',
      pure: '#DD6B20',
      light: '#FFD75F',
      background: '#FEEBC8',
    },
  },
});
