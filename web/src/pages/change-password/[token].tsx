import React, { useState } from 'react';
import { NextPage } from 'next';
import { Wrapper } from '../../components/Wrapper';
import { Form, Formik } from 'formik';
import { InputField } from '../../components/InputField';
import { Button } from '@chakra-ui/button';
import { useChangePasswordMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils/toErrorMap';
import { useRouter } from 'next/router';
import { Box, Flex, Link } from '@chakra-ui/core';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import NextLink from 'next/link';
export const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');
  return (
    <>
      <Wrapper variant="small">
        <Formik
          initialValues={{
            newPassword: ''
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await changePassword({ newPassword: values.newPassword, token });
            if (response.data?.changePassword?.errors) {
              const errorMap = toErrorMap(response.data.changePassword.errors);
              if ('token' in errorMap) {
                setTokenError(errorMap.token);
              }
              setErrors(errorMap);
            } else if (response.data?.changePassword.user) {
              router.push('/');
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="newPassword" placeholder="new password" label="new password" type="password" />
              {tokenError ? (
                <Flex>
                  <Box mr={2} style={{ color: 'red' }}>
                    {tokenError}
                  </Box>
                  <NextLink href="/forgot-password">
                    <Link>Resend token</Link>
                  </NextLink>
                </Flex>
              ) : null}
              <Button mt={4} isLoading={isSubmitting} type="submit" variantColor="teal">
                Change Password
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </>
  );
};

ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string
  };
};

export default withUrqlClient(createUrqlClient, { ssr: false })(ChangePassword);
