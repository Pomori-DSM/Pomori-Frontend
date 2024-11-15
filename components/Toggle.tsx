import { color } from "@/styles";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface ToggleProps {
  stateInitValue?: boolean;
}

export const Toggle = ({ stateInitValue = false }: ToggleProps) => {
  const [toggleState, setToggleState] = useState<boolean>(stateInitValue);
  return (
    <TouchableOpacity
      onPress={() => setToggleState((prev) => !prev)}
      style={[
        styles.toggleBox,
        { backgroundColor: toggleState ? color.black : color.gray200 },
      ]}
    >
      <View style={[styles.circle, toggleState ? { left: 4 } : { right: 4 }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleBox: {
    width: 56,
    borderRadius: 100,
    height: 28,
    position: "relative",
  },
  circle: {
    backgroundColor: color.white,
    borderRadius: 100,
    width: 20,
    height: 20,
    position: "absolute",
    top: 4,
  },
});
