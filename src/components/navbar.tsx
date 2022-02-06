import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useStore } from 'react-redux';
import { Box, Stack, Text, IconButton } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';

import Searchbar from './searchbar';
import { ProductPair } from '../reducers/cart';

const Navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const store = useStore();

  const setQuantity = useCallback(() => {
    const pairs: Array<ProductPair> = store.getState().cart?.productPairs;
    if (pairs) {
      const sum = pairs.reduce(
        (partial: number, curr: ProductPair) => partial + curr.quantity,
        0
      );
      setTotalQuantity(sum);
    }
  }, [store]);

  useEffect(setQuantity, [setQuantity]);

  store.subscribe(setQuantity);

  return (
    <Box boxSize="fit-content">
      <Stack
        w="full"
        h="fit-content"
        backdropFilter="auto"
        backdropBlur="5px"
        bg="blackAlpha.800"
        position="fixed"
        top={0}
        zIndex={1}
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justifyContent="space-evenly"
        py={5}
      >
        <Link href="/" passHref>
          <Box cursor="pointer" p={2}>
            <Text fontSize={25}>ECOMMERCE</Text>
          </Box>
        </Link>

        <Searchbar />

        <Link href="/cart" passHref>
          <Box bg="whiteAlpha.300" boxSize={10} align="center">
            {totalQuantity || (
              <IconButton aria-label="cart" icon={<PlusSquareIcon />} />
            )}
          </Box>
        </Link>
      </Stack>
    </Box>
  );
};

export default Navbar;
