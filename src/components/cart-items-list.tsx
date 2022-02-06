import { Box, Stack } from '@chakra-ui/react';
import { useStore } from 'react-redux';

import CartItem from './cart-item';

import { useEffect, useState } from 'react';

import { getProduct } from '../pages/api/product/[slug]';

import type { ProductPair, FullProductPair } from '../reducers';

const CartItemList = () => {
  const store = useStore();
  const storeState = store.getState();
  const [products, setProducts] = useState<Array<FullProductPair>>([]);

  useEffect(() => {
    const productPairs: Array<ProductPair> =
      storeState !== undefined ? storeState.productPairs : [];
    const products: Array<FullProductPair> = productPairs.map(
      (pair: ProductPair) => ({
        product: getProduct(pair.slug),
        quantity: pair.quantity,
      })
    );
    setProducts(products);
  }, [storeState]);

  return (
    <Stack direction="column" spacing={5}>
      {products.length > 0 ? (
        products.map((product, i) => <CartItem key={i} pair={product} />)
      ) : (
        <Box>NO ITEMS</Box>
      )}
    </Stack>
  );
};

export default CartItemList;
