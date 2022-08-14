import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import theme from '../theme';

export const MyApp = ({ Component, pageProps }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
