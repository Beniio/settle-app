import { Box, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';

export const CreatePost: React.FC<{}> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{
          title: '',
          text: ''
        }}
        onSubmit={async (values, { setErrors }) => {
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
