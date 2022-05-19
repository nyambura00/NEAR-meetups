import '../styles/global.css'
import type { AppProps } from 'next/app'
import { initializeContract } from "../utils/near";
import { useEffect, useState } from 'react';
import { AppWrapper } from '../components/AppContext';
declare const window: any;


function MyApp({ Component, pageProps }: AppProps) {
  const [nearLoaded, setnearLoaded] = useState(false)

  useEffect(() => {
    window.nearInitPromise = initializeContract().then(() => {
      setnearLoaded(true)
    }).catch((err) => { console.log(err) });
  }, [])

  return nearLoaded && <AppWrapper><Component {...pageProps} /></AppWrapper>
}

export default MyApp

