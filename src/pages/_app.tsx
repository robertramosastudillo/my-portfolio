import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/Seo/Seo";
import GlobalStyle from "../styles/GlobalStyle";

declare global {
  interface Window {
    dataLayer: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageView = (url: any, title: any) => {
    window &&
      window.dataLayer &&
      window.dataLayer.push({
        event: "virtualPageview",
        virtualPageURL: url,
        virtualPageTitle: title,
      });
  };
  useEffect(() => {
    pageView(router.pathname, document.title);
    const handleRouteChange = (url: any) => {
      pageView(url, document.title);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <Layout>
      <Seo />
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
