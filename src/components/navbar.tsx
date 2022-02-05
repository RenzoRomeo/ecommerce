import Link from 'next/link';
import { Box, Stack, Text } from '@chakra-ui/react';
import Searchbar from './searchbar';

const Navbar = () => (
  <Box w="100%" h="fit-content" bg="blue">
    <Stack direction="row" h="full" align="center" px="20vw" py={5}>
      <Link href="/" passHref>
        <Box cursor="pointer" p={2}>
          <Text fontSize={25}>ECOMMERCE</Text>
        </Box>
      </Link>

      <Searchbar />
    </Stack>
  </Box>
);

export default Navbar;
