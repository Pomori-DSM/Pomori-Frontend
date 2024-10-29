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
  "": {},
  semibold40: {
    fontSize: 40,
    lineHeight: 52,
    fontWeight: 600,
  },
  semibold36: {
    fontSize: 36,
    lineHeight: 48,
    fontWeight: 600,
  },
  semibold32: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
  },
  semibold24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 600,
  },
  medium24: {
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 500,
  },
  semibold20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 600,
  },
  medium20: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 500,
  },
  semibold18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 600,
  },
  medium18: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 500,
  },
  semibold16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 600,
  },
  medium16: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 500,
  },
  semibold14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 600,
  },
  medium14: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 500,
  },
  semibold12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 600,
  },
  medium12: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 500,
  },
};
