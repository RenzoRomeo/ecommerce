import { Box, Text } from '@chakra-ui/react';
import { ProductType } from '../products';

interface Props {
  product: ProductType;
}

const SearchbarItem = (props: Props) => {
  const { product } = props;

  return (
    <Box boxSize="fit-content">
      <Text noOfLines={1}>{product.title}</Text>
    </Box>
  );
};

export default SearchbarItem;
