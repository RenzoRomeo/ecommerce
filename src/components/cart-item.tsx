import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {
  Box,
  Text,
  Stack,
  Img as Image,
  IconButton,
  LinkBox,
} from '@chakra-ui/react';
import { MinusIcon } from '@chakra-ui/icons';
import { actionRemoveFromCart } from '../actions/cart';

import type { FullProductPair } from '../reducers/cart';

interface Props {
  pair: FullProductPair;
}

const CartItem = (props: Props) => {
  const dispatch = useDispatch();
  const { pair } = props;
  const { product } = pair;

  const handleRemove = () => {
    if (product?.slug) dispatch(actionRemoveFromCart(product.slug, 1));
  };

  return (
    <Box bg="blackAlpha.400" borderRadius="20px" p={5}>
      <Stack direction="row" align="center" spacing={10}>
        <Link href={`/product/${product.slug}`} passHref>
          <LinkBox boxSize="fit-content" cursor="pointer">
            <Stack direction="row" align="center" spacing={10}>
              <Image
                src={product.image}
                alt={product.title}
                boxSize="75px"
                borderRadius="10px"
              />
              <Text fontSize="2rem">{product.title}</Text>
            </Stack>
          </LinkBox>
        </Link>
        <IconButton
          bg="red.800"
          aria-label="remove"
          icon={<MinusIcon />}
          onClick={handleRemove}
        />
        <Text>{pair.quantity}</Text>
      </Stack>
    </Box>
  );
};

export default CartItem;
