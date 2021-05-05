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
import RangeSlider from "../RangeSlider";
import { useField } from "formik";

const MoreFiltersModal = ({ formik, name }) => {
  const { query } = useRouter();
  const [field, meta, helpers] = useField();
  const { setValue } = helpers;

  const initialFocusRef = useRef();

  return useMemo(() => {
    return (
      <>
        <Popover usePortal>
          <PopoverTrigger>
            <Button variant="outline" fontSize={[12, 12, 12, 12]}>
              More Filters
            </Button>
          </PopoverTrigger>
        </Popover>
      </>
    );
  }, [formik.initialValues]);
};

export default connect(MoreFiltersModal);
