import "../styles/globals.css";
import "../assets/fonts/stylesheet.css";
import type { AppProps } from "next/app";
import Default from "../layouts/Default";
import Authenticated from "../layouts/Authenticated";
import createComponent from "../utils/create-component";

function MyApp({ Component, pageProps }: AppProps) {
  const layouts = {
    Default: Default,
    Authenticated: Authenticated,
  };
  return createComponent(layouts[pageProps.layout as keyof typeof layouts], {
    children: <Component {...pageProps} />,
    isAuthenticated: pageProps.isAuthenticated,
  });
}

export default MyApp;
