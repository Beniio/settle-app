import { Box, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import {
  useLogoutMutation,
  useMeQuery
} from '../generated/graphql';
import { Button, Flex } from '@chakra-ui/core';
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  const [{ fetching: logoutFetching }, logout] =
    useLogoutMutation();
  let body = null;

  if (fetching) {
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2}> login </Link>
        </NextLink>

        <NextLink href="/register">
          <Link mr={2}> register </Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex align="center">
        <Box mr={4}>{data.me.username}</Box>
        <Button
          onClick={() => {
            logout;
          }}
          isLoading={logoutFetching}
          variant="link"
        >
          logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      zIndex={1}
      position="sticky"
      top={0}
      bg="tan"
      p={4}
    >
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link>SettleApp</Link>
        </NextLink>
        <Box ml={'auto'}>{body}</Box>
      </Flex>
    </Flex>
  );
};
