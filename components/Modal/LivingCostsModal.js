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

const LivingCostsModal = ({ formik, name }) => {
  const { query } = useRouter();

  function handleSubmit() {
    formik.handleSubmit();
    formik.submitForm();
  }

  return useMemo(() => {
    return (
      <>
        <Popover usePortal>
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
                          name="minLivingCosts"
                          id="minLivingCosts"
                          labelid="search-minLivingCosts"
                          label="minLivingCosts"
                          placeholder={
                            query.minLivingCosts ? query.minLivingCosts : "$0"
                          }
                        ></Field>
                        <Divider
                          borderColor="blackAlpha.500"
                          orientation="vertical"
                          height={10}
                        />
                        <Field
                          as={Input}
                          name="maxLivingCosts"
                          id="maxLivingCosts"
                          labelid="search-maxLivingCosts"
                          label="maxLivingCosts"
                          placeholder={
                            query.maxLivingCosts
                              ? query.maxLivingCosts
                              : "$100,000"
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
    );
  }, [formik.initialValues]);
};

export default connect(LivingCostsModal);
