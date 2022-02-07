import { Stack, Input } from '@chakra-ui/react';
import React, { useState, useRef, useEffect, useCallback } from 'react';

import { getProductsResult, ProductType } from '../util/products';
import SearchbarItem from './searchbar-item';

const Searchbar = () => {
  const [results, setResults] = useState<Array<ProductType>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResults(getProductsResult(e.target.value));
  };

  const closeSearch = useCallback(
    (e) => {
      if (searchRef.current && isOpen && !searchRef.current.contains(e.target))
        setIsOpen(false);
    },
    [isOpen]
  );
  
  useEffect(() => {
    document.addEventListener('mousedown', closeSearch);
    return () => {
      document.removeEventListener('mousedown', closeSearch);
    };
  }, [closeSearch]);

  const openSearch = useCallback(
    (e) => {
      if (searchRef.current && !isOpen && searchRef.current.contains(e.target))
        setIsOpen(true);
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', openSearch);
    return () => {
      document.removeEventListener('mousedown', openSearch);
    };
  }, [openSearch]);

  useEffect(() => {
    setIsOpen(results.length > 0);
  }, [results]);

  return (
    <Stack direction="column" ref={searchRef}>
      <Input
        color="white"
        w="20vw"
        borderWidth={2}
        borderColor="whiteAlpha.600"
        placeholder="Search for an item"
        onChange={handleChange}
      />

      <Stack
        direction="column"
        display={isOpen && results.length ? 'block' : 'none'}
        position="fixed"
        top="4vw"
        maxW="20vw"
        zIndex={2}
        borderRadius="10px"
        p={5}
        bg="black"
      >
        {results.map((product) => (
          <SearchbarItem
            key={product.title}
            product={product}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Searchbar;
