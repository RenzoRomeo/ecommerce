import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import Layout from '../components/layout';
import CartItemList from '../components/cart-items-list';

const Cart: NextPage = () => {
  return (
    <Layout>
      <Box mx="20vw">
        <CartItemList />
      </Box>
    </Layout>
  );
};

export default Cart;
