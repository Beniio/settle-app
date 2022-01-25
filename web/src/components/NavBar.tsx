import { Box, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="turquoise" p={4} ml={'auto'}>
      <NextLink href="/login">
        <Link mr={2}> Login </Link>
      </NextLink>

      <NextLink href="/register">
        <Link mr={2}> Register </Link>
      </NextLink>
    </Box>
  );
};
