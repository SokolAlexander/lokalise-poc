import "@/styles/globals.css";
import i18nextConfig from "../../next-i18next.config";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, { i18n: i18nextConfig });
