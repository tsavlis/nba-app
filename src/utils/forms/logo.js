import React, { Component } from "react";
import { Image } from "react-native";
import logo from "../../assets/images/nba.png";

const LogoTitle = () => (
  <Image source={logo} style={{ width: 70, height: 35 }} resizeMode="contain" />
);

export default LogoTitle;
