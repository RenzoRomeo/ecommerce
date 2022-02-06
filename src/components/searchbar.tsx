import { Stack, Input, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const Searchbar = () => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <Stack direction="row">
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
  );
};

export default Searchbar;
