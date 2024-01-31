import { StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
export default SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { results, searchAPI, errorMessage } = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title={"Cost Effective"}
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          title={"Bit Pricier"}
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          title={"Big Spender"}
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
