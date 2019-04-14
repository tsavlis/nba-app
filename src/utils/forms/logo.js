import React, { Component } from "react";
import { Image } from "react-native";
import logo from "../../assets/images/crpto.png";

const LogoTitle = () => (
  <Image
    source={logo}
    style={{ width: 100, height: 25 }}
    resizeMode="contain"
  />
);

export default LogoTitle;
