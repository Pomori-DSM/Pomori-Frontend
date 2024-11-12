import React from "react";
import { Text, TextStyle } from "react-native";
import { color } from "./color";

interface TextPropsType {
  children?: React.ReactNode;
  textStyle?: keyof typeof fonts;
  color?: keyof typeof color;
  style?: TextStyle;
  numberOfLines?: number;
  ellipsizeMode?: "clip" | "head" | "middle" | "tail";
  onPress?: () => void;
}

export const Txt = ({
  ellipsizeMode,
  children,
  textStyle = "",
  color: textColor = "black",
  numberOfLines,
  style,
  onPress,
}: TextPropsType) => {
  const textColorStyle = textColor ? { color: color[textColor] } : {};
  return (
    <Text
      onPress={onPress}
      ellipsizeMode={ellipsizeMode}
      numberOfLines={numberOfLines}
      style={{
        ...fonts[textStyle],
        ...textColorStyle,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

const fonts: { [key: string]: TextStyle } = {
  "": { fontFamily: "Regular" },
  extralight88: {
    fontSize: 80,
    lineHeight: 100,
    fontFamily: "ExtraLight",
    height: 100,
  },
  semibold40: {
    fontSize: 40,
    lineHeight: 52,
    fontFamily: "SemiBold",
  },
  semibold36: {
    fontSize: 36,
    lineHeight: 48,
    fontFamily: "SemiBold",
  },
  semibold32: {
    fontSize: 32,
    lineHeight: 44,
    fontFamily: "SemiBold",
  },

  semibold24: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: "SemiBold",
  },
  medium24: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: "Medium",
  },
  heavy20: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Heavy",
  },
  semibold20: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "SemiBold",
  },
  medium20: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "Medium",
  },
  semibold18: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "SemiBold",
  },
  medium18: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: "Medium",
  },
  semibold16: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "SemiBold",
  },
  medium16: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "Medium",
  },
  semibold14: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "SemiBold",
  },
  medium14: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Medium",
  },
  semibold12: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "SemiBold",
  },
  medium12: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Medium",
  },
};
