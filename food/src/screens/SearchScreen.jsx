import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
export default SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { results, searchAPI, errorMessage } = useResults();
  //   console.log(searchAPI);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We have found {results.length} results</Text>
      <ResultsList
        title={"Cost Effective"}
        results={filterResultsByPrice("$")}
      />
      <ResultsList title={"Bit Pricier"} results={filterResultsByPrice("$$")} />
      <ResultsList
        title={"Big Spender"}
        results={filterResultsByPrice("$$$")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
