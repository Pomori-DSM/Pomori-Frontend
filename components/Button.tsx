import React from "react";
import { Txt, color } from "@/styles";
import styled from "styled-components/native";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

interface ButtonStyle {
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  borderWidth?: number;
}

interface ButtonProps {
  text?: string;
  type?: keyof typeof buttonStyle;
  onPress?: () => void;
  keyboardOpen?: boolean;
}

export const Button = ({
  text,
  type = "primary",
  onPress,
  keyboardOpen,
}: ButtonProps) => {
  const { textColor, ...otherStyles } = buttonStyle[type];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[otherStyles, styles.box, { borderRadius: keyboardOpen ? 0 : 8 }]}
    >
      <Txt textStyle="medium16" style={{ color: textColor }}>
        {text}
      </Txt>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
});

const buttonStyle: { [key: string]: ButtonStyle } = {
  primary: {
    backgroundColor: color.gray900,
    textColor: color.white,
  },
  white: {
    backgroundColor: color.white,
    textColor: color.black,
    borderColor: color.gray900,
    borderWidth: 1,
  },
};
