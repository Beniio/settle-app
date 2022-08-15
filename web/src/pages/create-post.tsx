import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useCreatePostMutation } from '../generated/graphql';

export const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          title: '',
          text: ''
        }}
        onSubmit={async (values, {}) => {
          console.log(values);
          createPost({ input: values });
          router.push('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="Title" label="Title" />
            <Box mt={4}>
              <InputField textarea name="text" placeholder="text..." label="Body" />
            </Box>
            <Button mt={4} isLoading={isSubmitting} type="submit" variantColor="teal">
              create post
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default withUrqlClient(createUrqlClient)(CreatePost);
