import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import AuthComponent from "./components/auth";
import News from "./components/news";
import Article from "./components/news/article";
import GameArticle from "./components/games/article";
import LogoTitle from "./utils/forms/logo";
import Games from "./components/games";

const headerConf = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#001338"
    },
    headerTintColor: "white",
    headerTitle: LogoTitle
  }
};
const NewsStack = createStackNavigator(
  {
    News: News,
    Article: Article
  },
  headerConf
);

const GameStack = createStackNavigator(
  {
    Games: Games,
    Article: GameArticle
  },
  headerConf
);
const AppStack = createBottomTabNavigator(
  {
    News: NewsStack,
    Games: GameStack
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#00194b",
      activeTintColor: "#fff",
      showLabel: false,
      inactiveBackgroundColor: "#001338",
      style: {
        backgroundColor: "#001338"
      }
    }
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: AuthComponent
  },
  { headerMode: "none" }
);

export const RootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack
      },
      { initialRouteName: "Auth" }
    )
  );
};
