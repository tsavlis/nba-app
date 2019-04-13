import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchBar, CheckBox } from "react-native-elements";

class Games extends Component {
  state = {
    checked: true
  };
  render() {
    return (
      <View>
        <Text> {this.props.georgia} </Text>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={() => console.warn("sa")}
          value={"as"}
        />
        <CheckBox title="Click Here" checked={this.state.checked} />
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
