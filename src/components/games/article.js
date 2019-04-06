import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class GameArticle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> GameArticle </Text>
      </View>
    );
  }
}

export default GameArticle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
