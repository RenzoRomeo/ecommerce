import Link from 'next/link';
import { Text, Stack, Img as Image, LinkBox } from '@chakra-ui/react';

import { ProductType } from '../util/products';

interface Props {
  product: ProductType;
  onClick: () => void;
}

const SearchbarItem = (props: Props) => {
  const { product, onClick } = props;

  return (
    <Link href={`/product/${product.slug}`} passHref>
      <LinkBox onClick={onClick}>
        <Stack
          align="center"
          boxSize="fit-content"
          direction="row"
          p={5}
          spacing={5}
          bg="whiteAlpha.300"
          borderRadius="10px"
          w="100%"
          cursor="pointer"
        >
          <Image
            src={product.image}
            alt={product.title}
            w={{ base: '10vw', md: '3vw' }}
          />
          <Text fontSize="1rem" noOfLines={2}>
            {product.title}
          </Text>
        </Stack>
      </LinkBox>
    </Link>
  );
};

export default SearchbarItem;
