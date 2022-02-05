import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './navbar';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout = (props: Props) => {
  const { children, title } = props;

  return (
    <Box w="100%">
      <Head>
        <title>{title || 'Ecommerce'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {children}
    </Box>
  );
};

export default Layout;
