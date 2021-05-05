import {
  Flex,
  Stack,
  Heading,
  Text,
  Divider,
  Image,
  IconButton,
  Box,
  Button,
  createIcon,
} from "@chakra-ui/react";
import TuitionModal from "./Modal/TuitionModal";
import LivingCostsModal from "./Modal/LivingCostsModal";
import MoreFiltersModal from "./Modal/MoreFiltersModal";
import {
  Field,
  Form,
  Formik,
  useField,
  useFormikContext,
  connect,
} from "formik";
import router, { useRouter } from "next/router";

export const CurrencyIcon = createIcon({
  displayName: "CurrencyIcon",
  path: (
    <path
      d="M12.1319 0V6.66687C10.8213 6.83187 9.52954 7.12285 8.27472 7.53576C6.21623 8.22097 4.38125 9.4499 2.96396 11.0925L2.87463 11.1981C1.58027 12.7833 0.838938 14.7479 0.763321 16.7931C0.625729 19.038 1.31303 21.2558 2.69598 23.0295L2.80155 23.1676C4.08338 24.6848 5.73296 25.8479 7.5926 26.5457C9.44314 27.2313 11.3435 27.7743 13.2769 28.1698C14.7061 28.4784 15.6237 28.6895 16.4439 28.9169H16.5332C17.6051 29.1767 18.4902 29.4122 19.2779 29.6396C20.2138 29.9175 21.1052 30.3277 21.9252 30.8576C22.3896 31.152 22.7855 31.5424 23.0864 32.0026C23.3795 32.5658 23.5221 33.1952 23.5005 33.8297C23.5005 33.8784 23.5005 33.9272 23.5005 33.9759C23.5253 34.7563 23.2943 35.5233 22.8428 36.1603C22.1599 37.0604 21.2283 37.7408 20.163 38.1173C18.5215 38.7446 16.771 39.0373 15.0147 38.9781H14.8117C12.9073 39.0383 11.0155 38.6488 9.28977 37.8412C8.44546 37.3987 7.71887 36.7612 7.17034 35.9816L5.2864 33.3344L0 37.1104L1.87582 39.7901C3.04133 41.426 4.58098 42.7596 6.36642 43.6798L6.45574 43.7204C8.25323 44.5575 10.1716 45.1056 12.14 45.3445V51.9708H18.6364V45.2146C19.9493 45.0103 21.2368 44.6673 22.4774 44.1914C24.7003 43.3709 26.6399 41.9275 28.0642 40.0337C29.1988 38.3988 29.8618 36.4832 29.9806 34.4967C30.0995 32.5102 29.6697 30.5293 28.7382 28.7707L28.6895 28.6895C27.8755 27.3416 26.7645 26.1974 25.4413 25.3439C24.1207 24.5164 22.6913 23.8768 21.1943 23.4437C20.3336 23.192 19.3591 22.9321 18.1979 22.6316C17.2722 22.3799 16.2652 22.1444 14.7142 21.8196C13.0896 21.4859 11.4933 21.0271 9.93941 20.4472C9.15115 20.1523 8.44813 19.6669 7.89306 19.0343C7.4589 18.5175 7.23306 17.8573 7.25967 17.1828C7.25967 17.0773 7.25967 16.9717 7.25967 16.8661C7.31182 16.3015 7.52932 15.7649 7.88494 15.3233C8.53632 14.5729 9.37786 14.0118 10.3211 13.6992C11.8644 13.1849 13.4861 12.9457 15.1121 12.9927H15.2177C16.4489 12.9906 17.6749 13.1517 18.8638 13.4718C19.6762 13.6969 20.4429 14.0624 21.1294 14.5518C21.559 14.8507 21.9282 15.2282 22.2175 15.6643L24.0121 18.3765L29.4284 14.7873L27.6338 12.0751C26.8978 10.9619 25.9584 9.99766 24.8648 9.23293C23.5716 8.31701 22.129 7.63283 20.6015 7.21094C19.952 7.03215 19.2933 6.88848 18.6283 6.78056V0H12.1319Z"
      fill="#219317"
    />
  ),
  viewBox: "0 0 30 52",
});

const Filters = (props) => {
  const { query } = useRouter();
  return (
    <Flex pb={4} pl={[2, 6, 6, 6]} pt={8}>
      <Stack spacing={6}>
        <Text fontSize="sm">300+ instituitions</Text>
        {/* <Heading boxSize="18" fontSize={["20spx", "32px"]}> */}
        <Heading>
          Results for {query.uniName}
        </Heading>
        {/* <Heading boxSize="sm">
          {" "}
          Min Tuition ${query.minTuition} Max Tuition ${query.maxTuition}
        </Heading> */}
        {/* <Stack w={["80", "full", "full", "full"]} isInline={[false, false, true, true]} direction={["column", "column", "row", "row"]}> */}
        <Stack
          // w={["70", "full", "full", "full"]}
          isInline={[true, true, true, true]}
          maxW="full"
          w="90%"
        >
          <TuitionModal name="Tuition costs" />
          <LivingCostsModal name="Living costs">Living costs</LivingCostsModal>
          <MoreFiltersModal name="More filters">More filters</MoreFiltersModal>
          <IconButton
            aria-label="icon"
            icon={<CurrencyIcon />}
            variant="outline"
          />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default connect(Filters);
