import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Games extends Component {
  render() {
    return (
      <View>
        <Text> Games </Text>
      </View>
    );
  }
}

export default Games;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
