import Head from "next/head";

import Layout from "../components/layout/layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextEvents</title>
        <meta name="description" content="Next.js events!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
