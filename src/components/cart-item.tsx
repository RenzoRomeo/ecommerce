import { useDispatch } from 'react-redux';
import { Box, Text, Stack, Img as Image, IconButton } from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';
import { actionRemoveFromCart } from '../actions';

import { ProductType } from '../products';

interface Props {
  product: ProductType;
}

const CartItem = (props: Props) => {
  const dispatch = useDispatch();
  const { product } = props;

  const handleRemove = () => {
    if (product?.slug) dispatch(actionRemoveFromCart(product.slug));
  };

  return (
    <Box bg="blackAlpha.400" borderRadius="20px" p={5}>
      <Stack direction="row" align="center" spacing={10}>
        <Image
          src={product.image}
          alt={product.title}
          boxSize="75px"
          borderRadius="10px"
        />
        <Text fontSize="2rem">{product.title}</Text>
        <IconButton
          bg="red.800"
          aria-label="remove"
          icon={<MinusIcon />}
          onClick={handleRemove}
        />
      </Stack>
    </Box>
  );
};

export default CartItem;
