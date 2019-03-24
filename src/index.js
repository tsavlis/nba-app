import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { RootNavigator } from "./routes";

class App extends Component {
  render() {
    const Nav = RootNavigator();
    return <Nav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

export default App;
