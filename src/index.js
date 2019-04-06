import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { RootNavigator } from "./routes";
import firebase from "firebase";
var config = {
  apiKey: "AIzaSyBwpCF81gCXC21F0nj4jhjRnzP734YZFX8",
  authDomain: "rn-nba.firebaseapp.com",
  databaseURL: "https://rn-nba.firebaseio.com",
  projectId: "rn-nba",
  storageBucket: "rn-nba.appspot.com",
  messagingSenderId: "399561368138"
};
firebase.initializeApp(config);

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
