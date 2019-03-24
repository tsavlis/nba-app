import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

const input = props => {
  let template = null;
  switch (props.type) {
    case "textinput":
      template = (
        <TextInput
          underlineColorAndroid="transparent"
          {...props}
          style={[styles.input, styles.overrideStyle]}
        />
      );
      break;
    default:
      return template;
  }

  return template;
};

export default input;
const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    fontSize: 16,
    padding: 5,
    marginTop: 10
  }
});
