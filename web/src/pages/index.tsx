import { NavBar } from '../components/NavBar';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  return (
    <>
      <NavBar />
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
