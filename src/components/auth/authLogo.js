import React, { Component } from "react";
import { View, Image } from "react-native";
import nbalogo from "../../assets/images/nba.png";

const LogoComponent = () => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={nbalogo}
      resizeMode={"contain"}
      style={{ width: 150, height: 150 }}
    />
  </View>
);
export default LogoComponent;
