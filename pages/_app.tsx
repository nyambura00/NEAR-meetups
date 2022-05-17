import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fontsource/inter';

// import { setup } from 'twind';
// import { AppProvider } from '../components/AppContext';
// import twindConfig from '../twind.config';

import { initializeContract }  from "../utils/near";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function MyApp ({ Component, pageProps }:AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  //Loading the NEAR API and setting up the wallet and contract
  //At the start of the app
  useEffect(() => {
    initializeContract();
    setIsLoading(false);
  }, []);

  const AnyComponent = Component as any;

  return isLoading ? 
    (<div className="center-div">
        <ClipLoader color={"#000"} loading={true} size={50} />
    </div>) : (
    <AnyComponent {...pageProps} />
    );
}

export default MyApp;

