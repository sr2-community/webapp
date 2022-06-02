import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

const SR2App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider defaultTheme='system'>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default appWithTranslation(SR2App);
