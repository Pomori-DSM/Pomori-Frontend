import { GoalFocusTime, PhraseBox } from "@/components";
import { Txt, color } from "@/styles";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useRandomPhrase } from "@/hooks";

export default function Main() {
  const phraseArr = useRandomPhrase();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={Dimensions.get("window").width - 40 + 8}
        contentContainerStyle={styles.phraseContainer}
      >
        {phraseArr.map(({ text, author }, index) => (
          <PhraseBox key={index} phrase={text} author={author} />
        ))}
      </ScrollView>
      <View style={styles.focusTimeBox}>
        <View style={styles.focusTimeTitle}>
          <Txt textStyle="medium24">집중한 시간</Txt>
          <Txt textStyle="medium16">9월 12일 목요일</Txt>
        </View>
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 108,
    gap: 48,
    backgroundColor: color.white,
  },
  phraseContainer: {
    gap: 8,
  },
  focusTimeBox: {
    width: "100%",
    gap: 16,
    backgroundColor: color.white,
    borderRadius: 16,
  },
  focusTimeTitle: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
