import { Arrow } from "@/assets";
import { Txt, color } from "@/styles";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Toggle } from "@/components";

interface ListProps {
  onPress?: () => void;
  text?: string;
  type?: "movePage" | "toggle";
}

export const SetList = ({ text, onPress, type = "movePage" }: ListProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.settingListBox}>
      <Txt textStyle="medium18">{text}</Txt>
      {type == "movePage" ? (
        <Arrow size={28} rotate="right" color={color.gray400} />
      ) : (
        <Toggle />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingListBox: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 24,
    paddingRight: 16,
    flexDirection: "row",
  },
});
