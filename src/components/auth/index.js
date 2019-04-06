import React, { Component } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import LogoComponent from "./authLogo";
import AuthForm from "./authForm";
import { getTokens, setTokens } from "../../utils/misc";

import { connect } from "react-redux";
import { autoSignIn } from "../../store/actions/user_actions.js";
import { bindActionCreators } from "redux";

class AuthComponent extends Component {
  state = {
    loading: true
  };

  goNext = () => {
    this.props.navigation.navigate("App");
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        console.log("as");
        this.setState({ loading: false });
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false });
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            });
          }
        });
      }
    });
  }

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
            <AuthForm goNext={this.goNext} />
          </View>
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    User: state.User
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);

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
