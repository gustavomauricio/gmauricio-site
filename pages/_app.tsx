// import '../styles/globals.css'
import type { AppProps } from "next/app";

// import "styles/ported/bootstrap.css";
import "styles/style.css";
import "styles/ported/brand-colors.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
