import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
export default SearchScreen = () => {
  const [term, setTerm] = useState("");
  const { results, searchAPI, errorMessage } = useResults();
//   console.log(searchAPI);
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
