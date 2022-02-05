import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { ProductType } from "../api/products";

import Product from "./product";

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Box size="fit-content" bg="green" mx="20vw">
      <SimpleGrid columns={3} spacing={5} p={5}>
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
