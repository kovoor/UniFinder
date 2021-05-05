import React, { createContext, useState, useContext } from "react";

const searchContext = createContext();

export const ProvideSearch = ({ children }) => {
  const search = useProvideSearch();
  return (
    <searchContext.Provider value={search}>{children}</searchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(searchContext);
};

function useProvideSearch() {
  const [search, setSearch] = useState("");
  const [minT, setMinT] = useState();
  const [maxT, setMaxT] = useState();

  const onChangeOfMinTuition = (value) => {
    setMinT(Math.abs(value));
    // console.log('From Context Min', minT);
  };

  const onChangeOfMaxTuition = (value) => {
    setMaxT(Math.abs(value));
    // console.log("From Context Max", maxT);
  };

  const onSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.value;
    const valueWithoutSlash = searchValue.replace("/", "");

    setSearch(valueWithoutSlash);
    return valueWithoutSlash;
  };

  return {
    minT,
    maxT,
    onChangeOfMinTuition,
    onChangeOfMaxTuition,
    onSearch,
    search
  };
}