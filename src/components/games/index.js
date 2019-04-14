import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { getGames, getNews } from "../../store/actions/games_actions";
import Articles from "./Articles";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  // Called after a component is mounted
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Articles article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
    );
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#dddddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2
  },
  gamebox: {
    width: "33.3%",
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  teamrecord: {
    fontFamily: "OpenSans-Light",
    fontSize: 12
  },
  gameTime: {
    fontFamily: "OpenSans-Bold",
    fontSize: 15
  }
});

const mapStateToProps = state => {
  return {
    Games: state.Games
  };
};

export default connect(mapStateToProps)(Games);
