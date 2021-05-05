import useSWR from "swr";
import dynamic from "next/dynamic";
import Head from "next/head";
import router, { useRouter } from "next/router";
import deepEqual from "fast-deep-equal";
import { stringify } from "querystring";
import React, { useRef, useState, useContext, useEffect } from "react";
import Pagination from "../components/Pagination";
import getUnis from "../database/getUnis";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";
import Filters from "../components/Filters";
import Search from "../components/Search";
import styles from "../styles/Search.module.css";
import {
  Box,
  Flex,
  Stack,
  Heading,
  FormControl,
  Input,
  IconButton,
  NumberInput,
  Divider,
  Button,
  NumberInputField,
} from "@chakra-ui/react";
import Footer from "../components/Footer";


const SearchResult = ({ unis, totalUnis, maxPage }) => {
  const { query } = useRouter();
  const curPage = query.page || 1;
  const [serverQuery] = useState(query);

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/data?" + stringify(query), fetcher, {
    dedupingInterval: 0,
    initialData: deepEqual(query, serverQuery)
      ? { unis, totalUnis, maxPage }
      : undefined,
  });

  const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <Flex direction="column" maxW="100%" overflowX="hidden">
      <Head>
        <title>
          {query.uniName + " · " + " Results " + " · " + "UniFinder"}{" "}
        </title>
      </Head>

        <Search>
          <Navbar />
          {/* <Filters /> */}
        </Search>

        <Stack isInline>
          <ul>
            {(data?.unis || []).map((uni) => (
              <span key={uni._id}>
                <Card uni={uni} />
              </span>
            ))}
          </ul>

          {data?.unis.length != 0 ? (
            <Flex
              className={styles.map}
              display={{ base: "none", sm: "none", md: "none" }}
            >
              <DynamicComponentWithNoSSR />
            </Flex>
          ) : (
            <Flex pb={4} pl={4} pt={8} align="center" justify="center">
              <Heading boxSize="50" fontSize="24px">
                No results were found 🔎
              </Heading>
            </Flex>
          )}
        </Stack>

        <Pagination
          curPage={curPage}
          maxPage={data?.maxPage}
          totalUnis={data?.totalUnis}
          uniDataLength={data?.unis.length}
        />
        <Footer />
      </Flex>
  );
};

export async function getServerSideProps(context) {
  var { unis, totalUnis, maxPage } = await getUnis(context.query);
  unis = JSON.parse(JSON.stringify(unis));

  return {
    props: {
      unis,
      totalUnis,
      maxPage,
    },
  };
}

export default SearchResult;
