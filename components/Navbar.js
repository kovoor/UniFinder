import React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  Link,
  Avatar,
  Icon,
  Text,
  Stack,
  createIcon,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import NavSearch from "./NavSearch";

export const LogoIcon = createIcon({
  displayName: "LogoIcon",
  path: (
    <path
      d="M29.777 8.416c-.216-2.8-2.337-5.064-5.08-5.519a6.185 6.185 0 00-1.01-.088 6.138 6.138 0 00-3.255.942 6.099 6.099 0 00-1.68 1.55c-.013.016-.029.032-.04.05C18.68 5.393.724 30.892.724 30.892H15.26c8.014.002 14.513-6.445 14.538-14.407v-3.263l4.926-2.399-4.947-2.408zm-5.383.917a.9.9 0 01-.901-.897c0-.495.403-.896.901-.896s.903.4.903.896a.9.9 0 01-.903.897z"
      fill="#53AFFF"
    />
  ),
  viewBox: "0 0 46 32",
});

const Navbar = () => {
  return (
    <Flex
      backgroundColor="white"
      mb={4}
      borderTop="5px solid #53AFFF"
      pt={[4, 10]}
      pb={[4, 10]}
      px={[2, 4, 8, 8]}
      h={20}
      // w="full"
      boxShadow="rgba(0, 0, 0, 0.08) 0px 1px 12px !important;"
      align="center"
    >
      {/* <Flex
        pt={[4, 10]}
        pb={[4, 10]}
        px={8}
        h={20}
        // h="60px"
        boxShadow="rgba(0, 0, 0, 0.08) 0px 1px 12px !important;"
      > */}
      <Stack
        align="center"
        direction="row"
        ml={[2, 4, 0, 0]}
        mr={[4, 8, 20, 20]}
      >
        {/* <NextLink href="/" passHref> */}
          <Link href="/" >
            <Stack isInline spacing={2}>
              <LogoIcon boxSize="10" />
            </Stack>
          </Link>
      </Stack>

      {/* <Spacer /> */}
      <NavSearch />

      {/* <Spacer /> */}

      <Stack
        shouldWrapChildren
        justifyContent="center"
        alignItems="center"
        ml="auto"
        direction="row"
        display={["none", "none", "flex", "flex"]}
        spacing={8}
      >
        {/* <NextLink passHref> */}
          <Link fontWeight="medium">Pricing</Link>
        {/* </NextLink> */}
        {/* <NextLink passHref> */}
          <Button
            backgroundColor="gray.900"
            color="white"
            h="32px"
            fontWeight="medium"
            _hover={{ bg: "gray.700" }}
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)",
            }}
          >
            Login
          </Button>
        {/* </NextLink> */}
      </Stack>
    </Flex>
  );
};

export default Navbar;
