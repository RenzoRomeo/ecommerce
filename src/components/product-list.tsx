import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Stack,
  SimpleGrid,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import {
  getAllProducts,
  getCategories,
  getProductsByCategory,
  ProductType,
} from '../util/products';
import { getProductsResult } from '../util/products';
import Product from './product';

const ProductList = () => {
  const [products, setProducts] = useState<Array<ProductType>>(
    getAllProducts()
  );
  const [category, setCategory] = useState<string>('All Products');

  const categories: Array<string> = getCategories();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '')
      setProducts(getProductsResult(e.target.value, category));
    else setProducts(getProductsByCategory(category));
  };

  useEffect(() => {
    setProducts(getProductsByCategory(category));
  }, [category]);

  return (
    <Stack
      direction="column"
      size="fit-content"
      mx="20vw"
      my="20vh"
      align="center"
      spacing="5vh"
    >
      <Stack direction={{ base: 'column', md: 'row' }} spacing={5}>
        <Input
          color="white"
          w={{ base: '100%', md: '20vw' }}
          borderWidth={2}
          borderColor="whiteAlpha.600"
          placeholder="Search for an item"
          onChange={handleChange}
        />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {category}
          </MenuButton>
          <MenuList>
            {categories.map((category) => (
              <MenuItem key={category} onClick={() => setCategory(category)}>
                {category}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 5 }} spacing={5} p={5}>
        {products.map((product) => (
          <Product key={product.title} product={product} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default ProductList;
