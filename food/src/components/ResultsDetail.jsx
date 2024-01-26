import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
export default ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text> {result.name} </Text>
      <Text> {result.rating} Stars, {result.review_count} </Text>

    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  }
});
