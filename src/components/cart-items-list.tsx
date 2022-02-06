import { Box, Stack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import CartItem from './cart-item';

import { useEffect, useState } from 'react';

import { getProduct } from '../pages/api/product/[slug]';

import type { ProductPair, FullProductPair } from '../reducers/cart';

const CartItemList = () => {
  const cartState = useSelector((state: any) => state.cart);
  const [total, setTotal] = useState<number>(0);
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

    const total: number = products.reduce(
      (partial: number, product: FullProductPair) =>
        partial + product.product.price * product.quantity,
      0
    );
    setTotal(total);
  }, [cartState]);

  return (
    <Stack direction="column" spacing={5}>
      {products.length > 0 ? (
        products.map((product, i) => <CartItem key={i} pair={product} />)
      ) : (
        <Box>NO ITEMS</Box>
      )}
      <Box>TOTAL: ${total}</Box>
    </Stack>
  );
};

export default CartItemList;
