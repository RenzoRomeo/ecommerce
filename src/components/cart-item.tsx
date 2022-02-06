import { Box } from '@chakra-ui/react';
import { ProductType } from '../products';

interface Props {
  product: ProductType;
}

const CartItem = (props: Props) => {
  const { product } = props;

  return <Box>{product.title}</Box>;
};

export default CartItem;
