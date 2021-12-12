import { Flex, Heading, HStack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>lamlam</title>
        <meta property="og:title" content="lamlam" key="title" />
        <meta property="og:image" content="https://lamlam.dev/og.png" key="image" />
        <meta property="og:image:width" content="400" key="imagew" />
        <meta property="og:image:height" content="300" key="imageh" />
        <meta property="og:url" content="https://lamlam.dev" key="url" />
        <meta property="og:type" content="website" key="type" />
        <meta name="twitter:card" content="summary" key="card" />
      </Head>
      <Flex
        flexDirection="column"
        justifyContent="center"
        maxWidth="sm"
        mx="auto"
        alignItems="center"
        minH="100vh"
      >
        <Heading fontSize="8xl" textAlign="center">
          lamlam
        </Heading>
        <HStack spacing="24px" py="12">
          <Link href="https://twitter.com/lamlam4r">
            <a>
              <Image width="64px" height="64px" src="/twitter-icon.png" />
            </a>
          </Link>
          <Link href="https://github.com/lamlam">
            <a>
              <Image width="64px" height="64px" src="/github-icon.png" />
            </a>
          </Link>
        </HStack>
      </Flex>
    </>
  );
}
