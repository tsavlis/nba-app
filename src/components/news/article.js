import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class ArticleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> article </Text>
      </View>
    );
  }
}

export default ArticleComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
