import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { createUrqlClient } from '../utils/createUrqlClient';

export const CreatePost: React.FC<{}> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          title: '',
          text: ''
        }}
        onSubmit={async (values, {}) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="Title" label="Title" />
            <Box mt={4}>
              <InputField name="text" placeholder="text..." label="Body" />
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
