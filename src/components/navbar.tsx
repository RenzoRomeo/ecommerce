import Link from 'next/link';
import { Box, Stack, Text } from '@chakra-ui/react';
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
    </Stack>
  </Box>
);

export default Navbar;
