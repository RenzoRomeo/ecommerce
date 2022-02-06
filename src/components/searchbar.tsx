import { Stack, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { getProductsResult, ProductType } from '../products';
import SearchbarItem from './searchbar-item';

const Searchbar = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Array<ProductType>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setResults(getProductsResult(query));
  };

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setResults(getProductsResult(query));
  };

  return (
    <Stack direction="column">
      <Stack direction="row" w="20vw">
        <Input
          color="white"
          borderWidth={2}
          borderColor="whiteAlpha.600"
          placeholder="Search an item"
          onChange={handleChange}
          onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
        />
        <IconButton
          aria-label="search"
          icon={<SearchIcon />}
          display="inline-block"
          onClick={handleClick}
        />
      </Stack>

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
