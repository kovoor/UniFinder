import React from "react";
import { Field, Form, Formik, useField, useFormikContext, connect } from "formik";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Button
} from "@chakra-ui/react";

function SliderInput({ children, field, form, ...props }) {

  return (
    <>
        <Flex>
          <Stack>
          </Stack>
          <Flex>
            <Stack>
              <Stack isInline spacing={2}>
                <NumberInput/>
                <Divider
                  borderColor="blackAlpha.500"
                  orientation="vertical"
                  height={10}
                  ml={1}
                />
                <NumberInput ml={1} />
              </Stack>
              <Slider flex="1">
                <SliderTrack>
                  <SliderFilledTrack />
                  <SliderThumb
                    fontSize="sm"
                    width="32px"
                    height="20px"
                  />
                  <SliderFilledTrack />
                  <SliderThumb
                    fontSize="sm"
                    width="32px"
                    height="20px"
                  />
                </SliderTrack>
              </Slider>
            </Stack>
          </Flex>
        </Flex>
    </>
  );
}

export default SliderInput;

