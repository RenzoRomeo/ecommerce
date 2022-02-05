import type { NextPage } from 'next';

import Layout from '../components/layout';
import ProductList from '../components/product-list';

const Home: NextPage = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default Home;
