import dbConnect from "../utils/dbConnect";
import Head from "next/head";
import Uni from "../data/models/Uni";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Filters from "../components/Filters";
import React from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  IconButton,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const Profile = ({ uniData }) => {
  return (
    <>
      <Head>
        <title>{uniData.name ? uniData.name : ""} · UniFinder</title>
        <link rel="icon" href="/uniFinder-logo.svg" />
      </Head>
      <Search>
        <Navbar />
      </Search>

      <Flex mb={4} w="full">
            <Heading boxSize="50">{uniData.name}</Heading>
      </Flex>
    </>
  );
};

export async function getStaticProps(context) {
  dbConnect();
  const uni = await Uni.findOne({ slug: context.params.slug });
  const uniData = JSON.parse(JSON.stringify(uni));
  return {
    props: { uniData },
  };
}

export async function getStaticPaths() {
  dbConnect();

  const unis = await Uni.find();

  const paths = unis.map((a) => {
    return { params: { slug: a.slug } };
  });

  return { paths, fallback: false };
}

export default Profile;
