import React from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  IconButton,
  Box,
  createIcon
} from "@chakra-ui/react";

import Link from 'next/link'

export const HeartIcon = createIcon({
  path: (
    <path
      d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
      fill="white"
      fillOpacity="0.25"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

const Card = ({ uni }) => {

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

  return (
    <>
      {/* <Link
        href={{
          pathname: "/[slug]",
          query: { uni: JSON.stringify(uni) },
        }}
        as={`/${uni.slug}`}
      > */}
        {/* <a target="_blank"> */}
          <Flex backgroundColor="whiteAlpha.500" flexDirection="row" />
          <Flex backgroundColor="whiteAlpha.500">
            <Stack
              spacing={4}
              backgroundColor="white"
              // pt={4}
              pl={[0, 0, 4, 4]}
              pr={[0, 0, 4, 4]}
              // pb={4}
              alignItems="space-between"
              maxW="64rem"
              shouldWrapChildren
            >
              <Divider
                borderColor="gray.500"
                width="99%"
                height="1px"
                backgroundColor="blackAlpha.300"
                opacity={0.22}
                display="block"
                orientation="vertical"
                p={0}
              />
              <Stack isInline backgroundColor="#FFFFFF">
                <Flex display={["none", "none", "none", "inline"]}>
                  <Image
                    height={["50px", "100px", "200px"]}
                    width={["100px", "150px", "300px"]}
                    borderRadius="8px"
                    src="https://images.unsplash.com/photo-1547653872-052e3539decc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  />
                </Flex>
                <Stack
                  pl={[2, 4, 6]}
                  // w="full"
                  shouldWrapChildren
                >
                  <Stack spacing={12} isInline>
                    <Stack>
                      <Heading
                        // boxSize="10"
                        textAlign="left"
                        fontSize="sm"
                        w={["15rem", "24rem", "28rem", "34rem"]}
                      >
                        {uni.name}
                      </Heading>
                      <Text>[ Course ]</Text>
                    </Stack>
                    <IconButton
                      aria-label="icon"
                      icon={<HeartIcon />}
                      boxSize="10"
                      isRound
                      variant="outline"
                    />
                  </Stack>
                  {/* <Divider borderColor="blackAlpha.500" width={10} height={1} /> */}
                  <Divider borderColor="blackAlpha.500" width={10} height={1} />
                  <Stack isInline  justifyContent="flex-start">
                    <Stack width="100%">
                      <Text fontSize="sm" fontWeight="600" w="18">
                        Tuition Costs:{" "}
                        {uni.tuition
                          ? "$" + numberWithCommas(uni.tuition)
                          : "Unknown"}
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        Living Costs:{" "}
                        {uni.tuition && uni.boardCharge
                          ? "$" +
                            numberWithCommas(uni.roomCharge + uni.boardCharge)
                          : "Unknown"}
                      </Text>
                    </Stack>
                    <Stack
                      width="100%"
                      alignItems="flex-end"
                      pt={20}
                      pr={2}
                      justifyContent="center"
                      isInline
                      shouldWrapChildren
                      overflow="visible"
                      maxWidth="100%"
                      flexDirection="column"
                    >
                      <Text textAlign="center" fontWeight="bold" fontSize="md">
                        {uni.tuition || uni.boardCharge
                          ? "$ " +
                            numberWithCommas(
                              uni.tuition + uni.roomCharge + uni.boardCharge
                            ) +
                            " / year"
                          : ""}
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Divider
                borderColor="gray.500"
                width="99%"
                height="1px"
                maxWidth="100%"
                backgroundColor="blackAlpha.300"
                opacity={0.22}
                display="block"
                orientation="vertical"
                p={0}
              />
            </Stack>
          </Flex>
        {/* </a>
      </Link> */}
    </>
  );
};

export default Card;
