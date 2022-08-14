import { Box, Flex, Link, Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import NextLink from 'next/link';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { useForgotPasswordMutation } from '../generated/graphql';

export const ForgotPassword: React.FC<{}> = ({}) => {
  const [complete, setComplete] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();

  return (
    <>
      <Wrapper variant="small">
        <Formik
          initialValues={{
            email: ''
          }}
          onSubmit={async (values) => {
            await forgotPassword(values);
            setComplete(true);
          }}
        >
          {({ isSubmitting }) =>
            complete ? (
              <Box>If user with email exists, we can sent you email</Box>
            ) : (
              <Form>
                <InputField name="email" placeholder="Email" label="Email" />
                <Box mt={4}>
                  <InputField name="password" placeholder="password" label="Password" type="password" />
                </Box>
                <Flex mt={2}>
                  <NextLink href="/forgot-password">
                    <Link ml="auto">forgot password?</Link>
                  </NextLink>
                </Flex>
                <Button mt={4} isLoading={isSubmitting} type="submit" variantColor="teal">
                  Login
                </Button>
              </Form>
            )
          }
        </Formik>
      </Wrapper>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
