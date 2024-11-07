import { Blank } from "@/assets";
import { Txt, color } from "@/styles";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

interface TopbarProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  text?: string;
}

export const TopBar = ({
  leftIcon,
  text,
  rightIcon = <Blank />,
}: TopbarProps) => {
  return (
    <View style={styles.container}>
      {leftIcon}
      <Txt textStyle="medium18">{text}</Txt>
      {rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 24,
    paddingVertical: 16,
    height: 56,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "space-between",
    backgroundColor: color.white,
    flexDirection:"row"
  },
});
