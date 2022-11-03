import Head from "next/head";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "../components/shared/navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css" rel="stylesheet" type="text/css"></link>
      </Head>
      <Navbar />
      <div className="container p-2">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
