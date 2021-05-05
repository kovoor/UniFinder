import React from "react";
import { Field, Form, Formik, useField, useFormikContext } from "formik";
import {
  Flex,
  Box,
  Stack,
  FormControl,
  Input,
  IconButton,
  NumberInput,
  Divider,
  Button,
  NumberInputField,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

const NavSearch = () => {
  return (
    <>
      <Flex
        pt="1"
        pb="1"
        height="3rem"
        backgroundColor="white"
        border="solid 1px #DDDDDD"
        borderRadius="50px"
        m="0 auto"

        // flexDirection="column"
        // alignItems="center"
        // w="full"
      >
        <Stack
          isInline
          // spacing={2}
          // shouldWrapChildren
          // justifyContent="center"
          // alignItems="center"
          // pl={[10, 4, 6, 6]}
          // pr={[10, 4, 6, 6]}
          // pb={1}
          // pt={1}
        >
          <FormControl>
            <Stack isInline flexDirection="row">
              <Field
                as={Input}
                fontWeight="600"
                name="uniName"
                id="uniName"
                labelid="search-uni"
                label="uniName"
                border="0px"
                placeholder="University Name"
                alignText="center"
                focusBorderColor="none"
              ></Field>
              <IconButton
                type="submit"
                borderRadius="50%"
                size="md"
                variant="solid"
                icon={<IoSearch size="23px" />}
                mr={2}
              ></IconButton>
            </Stack>
          </FormControl>
        </Stack>
      </Flex>
    </>
  );}

export default NavSearch;
