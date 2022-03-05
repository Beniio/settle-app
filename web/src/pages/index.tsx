import { NavBar } from '../components/NavBar';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { ssrExchange } from '@urql/core';

const Index = () => (
  <>
    <NavBar />
  </>
);

export default withUrqlClient(createUrqlClient)(Index);
