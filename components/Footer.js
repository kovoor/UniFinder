import React from "react";
import NextLink from "next/link";
import { Link, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex mb={8} mt={24} justify="center">
      <Link href="/" fontSize="sm" mr={4} fontWeight="medium" color="gray.500">
        Home
      </Link>
      <Link
        // href="/docs"
        fontSize="sm"
        mr={4}
        fontWeight="medium"
        color="gray.500"
      >
        Docs
      </Link>
      <Link
        // href="/blog"
        fontSize="sm"
        mr={4}
        fontWeight="medium"
        color="gray.500"
      >
        Blog
      </Link>
      <Link
        // href="/privacy"
        fontSize="sm"
        mr={4}
        fontWeight="medium"
        color="gray.500"
      >
        Privacy
      </Link>
      <Link
        // href="/terms"
        fontSize="sm"
        mr={4}
        fontWeight="medium"
        color="gray.500"
      >
        Terms
      </Link>
    </Flex>
  );
};

export default Footer;
