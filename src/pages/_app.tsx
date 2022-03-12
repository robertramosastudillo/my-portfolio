import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Seo } from "../components/Seo/Seo";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Seo />
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
