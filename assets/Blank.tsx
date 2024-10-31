import React from "react";
import { View } from "react-native";

interface PropsType {
  size?: number;
}

export const Blank = ({ size = 24 }: PropsType) => {
  return <View style={{ height: size, width: size }} />;
};
