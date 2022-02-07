import { Stack, SimpleGrid, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

import { getAllProducts, ProductType } from '../util/products';
import { getProductsResult } from '../util/products';
import Product from './product';

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductType>>(getAllProducts());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') setProducts(getProductsResult(e.target.value));
    else setProducts(getAllProducts());
  };

  return (
    <Stack
      direction="column"
      size="fit-content"
      mx="20vw"
      my="20vh"
      align="center"
      spacing="5vh"
    >
      <Input
        color="white"
        w="20vw"
        borderWidth={2}
        borderColor="whiteAlpha.600"
        placeholder="Search for an item"
        onChange={handleChange}
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} p={5}>
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ProductList;
