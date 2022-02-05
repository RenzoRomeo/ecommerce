import { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import Layout from '../../components/layout';

import type { ProductType } from '../../products';
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
      <Box>{product.title}</Box>
    </Layout>
  );
};

export default ProductPage;

export const getServerSideProps = async (params: Params) => {
  const { slug } = params.query;

  const product: ProductType = await fetch(
    `http://localhost:3000/api/product/${slug}`
  ).then((res) => res.json());

  return {
    props: {
      product,
    },
  };
};
