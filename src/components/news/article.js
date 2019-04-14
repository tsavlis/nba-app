import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider, ListItem } from "react-native-elements";

class ArticleComponent extends Component {
  formatText = content => {
    const text = content.replace("-", "");
    return text;
  };
  render() {
    const params = this.props.navigation.state.params;
    return (
      <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
        <Image
          style={{ height: 250 }}
          source={{ uri: params.image }}
          resizeMode="contain"
        />
        <View style={styles.articleContainer}>
          <Text style={styles.articleTicle}>{params.name}</Text>
        </View>
        <ListItem
          title={
            params.high_24h.toFixed(2) +
            "$" +
            "            " +
            "Highest price last 24 hours"
          }
        />
        <Divider />
        <ListItem
          title={
            params.current_price.toFixed(2) +
            "$" +
            "             " +
            "Current price "
          }
        />
        <Divider />
        <ListItem
          title={
            params.low_24h.toFixed(2) +
            "$" +
            "             " +
            "Lowest price last 24 hours"
          }
        />
      </ScrollView>
    );
  }
}

export default ArticleComponent;
const styles = StyleSheet.create({
  articleContainer: {
    padding: 10
  },
  articleTicle: {
    fontSize: "OpenSans-Bold",
    color: "#323232",
    fontSize: 23
  },
  articleData: {
    fontSize: "OpenSans-Light",
    color: "#828282",
    fontSize: 12
  },
  articleContent: {
    marginTop: 30
  },
  articleText: {
    fontSize: "OpenSans-Light",
    lineHeight: 20,
    fontSize: 14
  }
});
