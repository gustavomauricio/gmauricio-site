import type { AppProps } from "next/app";

import "styles/style.css";
import "styles/brand-colors.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
