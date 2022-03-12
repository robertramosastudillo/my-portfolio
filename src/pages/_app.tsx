import type { AppProps } from "next/app";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/Seo/Seo";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-MMJG7J9" });
  }, []);

  return (
    <Layout>
      <Seo />
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
