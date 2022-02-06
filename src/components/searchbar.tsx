import { Stack, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { getProductsResult, ProductType } from '../products';
import SearchbarItem from './searchbar-item';

const Searchbar = () => {
  const [results, setResults] = useState<Array<ProductType>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResults(getProductsResult(e.target.value));
  };

  return (
    <Stack direction="column">
      <Input
        color="white"
        w="20vw"
        borderWidth={2}
        borderColor="whiteAlpha.600"
        placeholder="Search an item"
        onChange={handleChange}
      />

      <Stack
        direction="column"
        display={results.length ? 'block' : 'none'}
        position="fixed"
        top="4vw"
        maxW="20vw"
        zIndex={2}
        borderRadius="10px"
        p={5}
        bg="black"
      >
        {results.map((product) => (
          <SearchbarItem key={product.title} product={product} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Searchbar;
