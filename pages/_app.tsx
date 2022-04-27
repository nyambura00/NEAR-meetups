import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fontsource/inter';

import { setup } from 'twind';
import { AppProvider } from '../components/AppContext';
import twindConfig from '../twind.config';

if (typeof window !== `undefined`) {
  setup(twindConfig);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
