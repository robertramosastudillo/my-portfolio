import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
