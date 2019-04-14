import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import moment from "moment";

class ArticleComponent extends Component {
  formatText = content => {
    const text = content.replace(/<p>/g, "").replace(/<\/p>/g, "");
    return text;
  };
  render() {
    const params = this.props.navigation.state.params;
    return (
      <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
        <Image
          style={{ height: 250 }}
          source={{ uri: params.image }}
          resizeMode="cover"
        />
        <View style={styles.articleContainer}>
          <View>
            <Text style={styles.articleTicle}>{params.title}</Text>
            <Text style={styles.articleData}>
              {params.team} - Posted at {moment(params.date).format("d MMMM")}
            </Text>
          </View>
          <View style={styles.articleContent}>
            <Text style={styles.articleText}>
              {this.formatText(params.content)}
            </Text>
          </View>
        </View>
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
