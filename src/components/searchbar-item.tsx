import Link from 'next/link';
import { Text, Stack, Img as Image, LinkBox } from '@chakra-ui/react';
import { ProductType } from '../products';

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
          <Image src={product.image} alt={product.title} w="3vw" />
          <Text fontSize="1.2rem">{product.title}</Text>
        </Stack>
      </LinkBox>
    </Link>
  );
};

export default SearchbarItem;
