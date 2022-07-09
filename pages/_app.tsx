// import '../styles/globals.css'
import type { AppProps } from "next/app";

import "styles/bootstrap.css";
import "styles/style.css";
import "styles/brand-colors.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
