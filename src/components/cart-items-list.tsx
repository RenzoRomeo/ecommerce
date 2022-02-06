import { Box, Stack } from '@chakra-ui/react';
import { useStore } from 'react-redux';

import CartItem from './cart-item';

import type { ProductType } from '../products';
import { useEffect, useState } from 'react';

import { getProduct } from '../pages/api/product/[slug]';

const CartItemList = () => {
  const store = useStore();
  const storeState = store.getState();
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    const productsSlugs =
      storeState !== undefined ? storeState.productsSlugs : [];
    const products: Array<ProductType> = productsSlugs.map((slug: string) =>
      getProduct(slug)
    );
    setProducts(products);
  }, [storeState]);

  return (
    <Stack direction="column" spacing={5}>
      {products.length > 0 ? (
        products.map((product, i) => <CartItem key={i} product={product} />)
      ) : (
        <Box>NO ITEMS</Box>
      )}
    </Stack>
  );
};

export default CartItemList;
