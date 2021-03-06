import { NextPage } from 'next';
import type { GetServerSidePropsContext } from 'next';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  Box,
  Img as Image,
  Stack,
  Text,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { MinusIcon, PlusSquareIcon } from '@chakra-ui/icons';
import { BsCartPlus } from 'react-icons/bs';

import Layout from '../../components/layout';
import type { ProductType } from '../../util/products';
import { getProduct } from '../../util/products';
import { actionAddToCart } from '../../actions/cart';

interface Props {
  product: ProductType;
}

interface Params extends GetServerSidePropsContext {
  slug: string;
}

const ProductPage: NextPage | React.FC<Props> = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const { product } = props;

  const handleAddToCart = () => {
    if (product?.slug) dispatch(actionAddToCart(product.slug, quantity));
  };

  const handleRemoveQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  return (
    <Layout title={product.title}>
      <Box mx={{ base: '5vw', md: '20vw' }} p={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
          <Image
            src={product.image}
            alt={product.title}
            w={{ base: '60vw', md: '15vw' }}
            m={5}
            borderRadius="20px"
          />
          <Stack direction="column" boxSize="fit-content" spacing={5}>
            <Text fontSize="3rem">{product.title}</Text>
            <Text fontSize="1rem" color="gray.500">
              {product.description}
            </Text>
            <Text fontSize={{ base: '2rem', md: '4rem' }}>
              ${product.price}
            </Text>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              align="center"
              spacing={10}
            >
              <Button
                leftIcon={<BsCartPlus />}
                boxSize="fit-content"
                p={5}
                bg="green.500"
                fontSize="2rem"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Stack direction="row" align="center">
                <IconButton
                  size="md"
                  aria-label="remove"
                  icon={<MinusIcon />}
                  onClick={handleRemoveQuantity}
                />
                <Text>{quantity}</Text>
                <IconButton
                  size="md"
                  aria-label="add"
                  icon={<PlusSquareIcon />}
                  onClick={handleAddQuantity}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};

export default ProductPage;

export const getServerSideProps = async (params: Params) => {
  const { slug } = params.query;
  const product: ProductType = getProduct(slug);

  return {
    props: {
      product,
    },
  };
};
