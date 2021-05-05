import {
  Flex,
  Stack,
  Divider,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Code,
  NumberInput,
  FormControl,
  Input,
} from "@chakra-ui/react";
import {
  useFormikContext,
  Formik,
  Form,
  Field,
  connect,
  getIn,
  FastField,
} from "formik";
import React, { useRef, useState, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import RangeSlider from '../RangeSlider'
import { useField } from "formik";

const TuitionModal = ({ formik, name }) => {
  const { query } = useRouter();
 const [field, meta, helpers] = useField();
 const { setValue } = helpers;
  
  const initialFocusRef = useRef();

  const [tuition, setTuition] = React.useState([
    parseInt(query.minTuition / 1000),
    parseInt(query.maxTuition / 1000),
  ]);

  function handleSubmit() {
    formik.handleSubmit();
    formik.submitForm();
  }

  const handleTuitionChange = (values) => {
    setTuition(values);
    console.log(values)
  }

  console.log(tuition);

  return useMemo(() => { return (
    <>
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button variant="outline" fontSize={[12, 12, 12, 12]}>
            {name}
          </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverHeader>
            The average {name} price is{" "}
            <Code>[currency] [ average-{name}-price ]</Code>
          </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            <Flex>
              <Flex>
                <Stack>
                  <FormControl>
                    <Stack isInline spacing={2}>
                      <Field
                        as={Input}
                        name="minTuition"
                        id="minTuition"
                        labelid="search-minTuition"
                        label="minTuition"
                        placeholder={query.minTuition ? query.minTuition : "$0"}
                      ></Field>
                      <Divider
                        borderColor="blackAlpha.500"
                        orientation="vertical"
                        height={10}
                      />
                      <Field
                        as={Input}
                        name="maxTuition"
                        id="maxTuition"
                        labelid="search-maxTuition"
                        label="maxTuition"
                        placeholder={
                          query.maxTuition ? query.maxTuition : "$100,000"
                        }
                      ></Field>
                    </Stack>

                    {/* <RangeSlider handleTuitionChange={handleTuitionChange} /> */}
                  </FormControl>
                </Stack>
              </Flex>
            </Flex>{" "}
          </PopoverBody>
          <PopoverFooter>
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
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );}, [formik.initialValues])
};

export default connect(TuitionModal);
