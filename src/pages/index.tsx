import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/navbar";
import ProductList from "../components/product-list";

const Home: NextPage = () => {
  return (
    <Box w="100%" bg="red">
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <ProductList />
    </Box>
  );
};

export default Home;
