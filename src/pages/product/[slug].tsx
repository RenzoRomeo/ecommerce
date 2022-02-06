import { NextPage } from 'next';
import { Box, Img as Image, Stack, Text, Button } from '@chakra-ui/react';
import { PlusSquareIcon } from '@chakra-ui/icons';

import Layout from '../../components/layout';

import type { ProductType } from '../../products';
import { getProduct } from '../api/product/[slug]';
import type { GetServerSidePropsContext } from 'next';

interface Props {
  product: ProductType;
}

interface Params extends GetServerSidePropsContext {
  slug: string;
}

const ProductPage: NextPage | React.FC<Props> = (props: Props) => {
  const { product } = props;

  return (
    <Layout title={product.title}>
      <Box mx="20vw" p={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10}>
          <Image
            src={product.image}
            alt={product.title}
            w="15vw"
            m={5}
            borderRadius="20px"
          />
          <Stack direction="column" boxSize="fit-content" spacing={5}>
            <Text fontSize="3rem">{product.title}</Text>
            <Text fontSize="1rem" color="gray.500">
              {product.description}
            </Text>
            <Text fontSize="4rem">${product.price}</Text>
            <Button
              leftIcon={<PlusSquareIcon />}
              boxSize="fit-content"
              p={5}
              bg="green.500"
              fontSize="2rem"
            >
              Add to Cart
            </Button>
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
