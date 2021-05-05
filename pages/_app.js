import "../styles/globals.css";
import React from "react";
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/react";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}