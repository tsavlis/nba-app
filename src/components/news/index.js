import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { getNews } from "../../store/actions/news_action";
import Moment from "moment";

class News extends Component {
  componentDidMount() {
    this.props.dispatch(getNews());
  }

  renderArticle = news =>
    news.articles ? (
      news.articles.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() =>
            this.props.navigation.navigate("Article", {
              ...item
            })
          }
        >
          <View style={styles.cardContainer}>
            <View>
              <Image
                style={{ height: 150, justifyContent: "space-around" }}
                source={{ uri: `${item.image}` }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.contentCard}>
              <Text style={styles.textCard}>{item.title}</Text>
              <View style={styles.bottomCard}>
                <Text style={styles.bottomCardTeam}>{item.team} -</Text>
                <Text style={styles.Text}>
                  Posted at {Moment(item.date).format("d MMMM")}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))
    ) : (
      <ActivityIndicator size="large" />
    );
  render() {
    return (
      <ScrollView style={{ backgroundColor: "#F0F0F0" }}>
        {this.renderArticle(this.props.News)}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    News: state.News
  };
}

export default connect(mapStateToProps)(News);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#dddddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2
  },
  contentCard: {
    borderWidth: 1,
    borderColor: "#dddddd"
  },
  textCard: {
    color: "#232323",
    fontSize: 16,
    padding: 10
  },
  bottomCardTeam: {
    color: "#828282",
    fontSize: 12
  },
  bottomCard: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e6e6e6",
    padding: 10
  },
  Text: {
    color: "#828282",
    fontSize: 12
  }
});
