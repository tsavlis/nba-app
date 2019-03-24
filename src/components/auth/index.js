import React, { Component } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import LogoComponent from "./authLogo";
import AuthForm from "./authForm";

class AuthComponent extends Component {
  state = { loading: false };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <LogoComponent />
            <AuthForm />
          </View>
        </ScrollView>
      );
    }
  }
}

export default AuthComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#1d428a"
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
