import Link from 'next/link';
import { Box, Stack, Text, IconButton } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';

import Searchbar from './searchbar';

const Navbar = () => (
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
        <IconButton aria-label="cart" icon={<PlusSquareIcon />} />
      </Link>
    </Stack>
  </Box>
);

export default Navbar;
