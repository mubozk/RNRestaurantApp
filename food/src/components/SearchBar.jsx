import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#edbebe",
    marginHorizontal: 15,
    borderRadius: 5,
    height: 50,
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 35,
    marginHorizontal: 15,
  },
});
