import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class News extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> News </Text>
      </View>
    );
  }
}

export default News;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
