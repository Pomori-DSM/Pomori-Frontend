import React from "react";
import { render } from "react-dom";
import { View, StyleSheet } from "react-native";
import { Txt } from "@/styles";

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Txt style={styles.logo}>POMORI</Txt>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 28,
    fontWeight: 900,
  },
});
