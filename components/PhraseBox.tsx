import { Double_Quotes } from "@/assets";
import { Txt, color } from "@/styles";
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

interface PhraseBoxProps {
  phrase?: string;
  author?: string;
}

export const PhraseBox = ({ phrase, author }: PhraseBoxProps) => {
  return (
    <View style={styles.phraseBox}>
      <View style={styles.phraseText}>
        <Double_Quotes color={color.black} />
        <Txt textStyle="medium16">{phrase} </Txt>
      </View>
      <Txt textStyle="semibold12" color="gray400">
        {author}
      </Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  phraseBox: {
    width: Dimensions.get("window").width - 40,
    height: 180,
    backgroundColor: color.gray50,
    borderWidth: 1,
    borderColor: color.gray100,
    padding: 16,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  phraseText: {
    gap: 10,
  },
});
