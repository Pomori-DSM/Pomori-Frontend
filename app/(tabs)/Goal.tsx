import { Arrow } from "@/assets";
import { GoalFocusTime, PhraseBox } from "@/components";
import { useRandomPhrase } from "@/hooks";
import { color } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, ScrollView, View, StyleSheet } from "react-native";

export default function Goal() {
  const phraseArr = useRandomPhrase();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.scrollViewBox}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={Dimensions.get("window").width - 40 + 8}
          contentContainerStyle={styles.phraseContainer}
          scrollEventThrottle={1}
        >
          {phraseArr.map(({ text, author }, index) => (
            <PhraseBox key={index} phrase={text} author={author} />
          ))}
        </ScrollView>
        <LinearGradient
          colors={["white", "transparent"]}
          style={styles.scrollRight}
        >
          <Arrow size={28} rotate="up" color={color.gray300} />
        </LinearGradient>
      </View>
      <View style={styles.scrollViewBox}>
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
        <GoalFocusTime />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 108,
    gap: 48,
    backgroundColor: color.white,
  },
  phraseContainer: {
    gap: 8,
    paddingHorizontal: 20,
  },
  scrollViewBox: {
    position: "relative",
  },
  scrollRight: {
    position: "absolute",
    width: 180,
    height: 180,
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    padding: 20,
    right: 0,
  },
});
