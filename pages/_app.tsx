import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fontsource/inter';

// import { setup } from 'twind';
import { AppProvider } from '../components/AppContext';
// import twindConfig from '../twind.config';


export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <AppProvider>
      <AnyComponent {...pageProps} />
    </AppProvider>
  );
}
