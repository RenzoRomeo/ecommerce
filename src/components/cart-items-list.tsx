import { Box, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from './cart-item';

import { useEffect, useState } from 'react';

import { getProduct } from '../pages/api/product/[slug]';

import type { ProductPair, FullProductPair } from '../reducers/cart';

const CartItemList = () => {
  const cartState = useSelector((state: any) => state.cart);
  const [products, setProducts] = useState<Array<FullProductPair>>([]);

  useEffect(() => {
    const productPairs: Array<ProductPair> =
      cartState !== undefined ? cartState.productPairs : [];
    const products: Array<FullProductPair> = productPairs.map(
      (pair: ProductPair) => ({
        product: getProduct(pair.slug),
        quantity: pair.quantity,
      })
    );
    setProducts(products);
  }, [cartState]);

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
