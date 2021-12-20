import "../styles/globals.css";
import Router from "next/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/nprogress.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
