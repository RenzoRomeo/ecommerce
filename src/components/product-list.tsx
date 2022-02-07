import { Box, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import type { ProductType } from '../util/products';

import Product from './product';

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    fetch('api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box size="fit-content" mx="20vw" my="20vh">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} p={5}>
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
