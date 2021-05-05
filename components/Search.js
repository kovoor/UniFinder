import React, { useEffect, useMemo } from "react";
import router, { useRouter } from "next/router";
import { Field, Form, Formik, useField, useFormikContext } from "formik";

//HOC for NavSearch and Modal
const Search = ({ children }) => {
  const { query } = useRouter();
  const initialValues = {
    uniName: query.uniName || "",
    minTuition: query.minTuition || "",
    maxTuition: query.maxTuition || "",
    minLivingCosts: query.minLivingCosts || "",
    maxLivingCosts: query.maxLivingCosts || "",
    page: query.page || "all",
  };

  return (
    <>
      <Formik
        enableReinitialize={false}
        initialValues={initialValues}
        onSubmit={(values) => {
          values = {
            ...values,
            minTuition: values.minTuition.replace(/[^a-z\d\s]+/gi, ""),
            maxTuition: values.maxTuition.replace(/[^a-z\d\s]+/gi, ""),
            minLivingCosts: values.minLivingCosts.replace(/[^a-z\d\s]+/gi, ""),
            maxLivingCosts: values.maxLivingCosts.replace(/[^a-z\d\s]+/gi, ""),
          };

          router.push(
            {
              pathname: "/search",
              query: { ...values, page: 1 },
            },
            undefined,
            // { shallow: true }
          );

          // setSubmitting(false);
        }}
      >
        {(props) => (
          <>
            <Form>
              {children}
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default Search;
