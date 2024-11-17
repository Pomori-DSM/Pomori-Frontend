import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Txt, color } from "@/styles";
import { Arrow } from "@/assets";
import { useTimeFormat } from "@/hooks";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
// import Clock from "../assets/images/clock.png";

interface FocusProps {
  time?: number;
  totalTime?: number;
}

export const FocusTime = ({ time = 230, totalTime = 499 }: FocusProps) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const timeText = useTimeFormat(time);
  const totalTimeText = useTimeFormat(totalTime);
  const progressBarWidth = isNaN(Math.floor((time / totalTime) * 100))
    ? 0
    : Math.floor((time / totalTime) * 100);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("GoalTime")}
      style={styles.countTimeBox}
    >
      <View style={styles.countTimeTitle}>
        <Txt textStyle="semibold16" color="gray500">
          집중한 시간
        </Txt>
        <Arrow size={28} rotate="right" color={color.gray300} />
      </View>
      <View style={styles.countBox}>
        <View style={styles.countTimeTitle}>
          <Txt textStyle="semibold20">
            오늘 집중한 시간은{"\n"}
            {timeText.timeFormatText}에요
          </Txt>
          <Image
            source={require("../assets/images/clock.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.timeProgressBox}>
          <View style={styles.timeBar}>
            <View
              style={[styles.timeProgress, { width: `${progressBarWidth}%` }]}
            />
            {/* <View style={[styles.progressCircle, { left: -2 }]} /> */}
          </View>
          <Txt textStyle="medium14">{progressBarWidth}%</Txt>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  progressCircle: {
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: color.black,
    position: "absolute",
    top: -2,
    borderWidth: 1,
    borderColor: color.white,
  },
  image: {
    width: 60,
    height: 60,
    opacity: 0.5,
  },
  countBox: {
    gap: 24,
  },
  countTimeBox: {
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: color.gray200,
  },
  countTimeTitle: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  timeBar: {
    height: 8,
    flex: 1,
    borderRadius: 100,
    backgroundColor: color.gray200,
    position: "relative",
    overflow: "hidden",
  },
  timeProgress: {
    height: 8,
    backgroundColor: color.black,
  },
  timeProgressBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
