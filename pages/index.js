import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { Box, Button, Flex, Text, Icon, Link, Stack, createIcon } from "@chakra-ui/react";
import Footer from "../components/Footer";
import NavSearch from "../components/NavSearch";
import Search from "../components/Search";
import { LogoIcon } from "../components/Navbar"

const Home = () => {
  return (
    <>
      <Box bg="gray.100" py={16}>
        <Flex as="main" direction="column" maxW="700px" margin="0 auto">
          <Head>
            <title>
              International student costs for universities in the world -
              UniFinder
            </title>
          </Head>
          <LogoIcon name="logo" boxSize="10" mb={2} />
          <Text mb={4} fontSize="lg" py={4}>
            <Text as="span" fontWeight="bold" display="inline">
              Uni Finder
            </Text>
            {" is being built by "}
            <Link
              href="https://github.com/kovoor"
              isExternal
              textDecoration="underline"
            >
              Jake Kovoor
            </Link>
            {`. It's the easiest way to find international student costs for universities in the US. It's still a work-in-progress, but you can try it out and let me know your comments.`}
          </Text>

          <Flex justifyContent="center" alignItems="center">
            <Search>
              <NavSearch/>
            </Search>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
