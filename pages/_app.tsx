import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
