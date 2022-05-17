import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fontsource/inter';


import { initializeContract }  from "../utils/near";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AppWrapper } from '../components/AppContext';


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
    <AppWrapper><AnyComponent {...pageProps} /></AppWrapper>
    );
}

export default MyApp;

