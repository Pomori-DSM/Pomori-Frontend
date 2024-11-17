import { useTimeFormat } from "@/hooks";
import { Txt, color } from "@/styles";
import React from "react";
import { View, StyleSheet } from "react-native";

interface GoalFocusProps {
  time?: number;
  totalTime?: number;
}

export const GoalFocusTime = ({ time = 0, totalTime = 0 }: GoalFocusProps) => {
  const timeText = useTimeFormat(time);
  const totalTimeText = useTimeFormat(totalTime);
  const progressBarWidth = isNaN(Math.floor((time / totalTime) * 100))
    ? 0
    : Math.floor((time / totalTime) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Txt textStyle="medium14" color="gray400">
          {timeText.timeFormatText} / {totalTimeText.timeFormatText}
        </Txt>
        <View style={styles.completedBox}>
          <Txt textStyle="semibold18">CS 공부</Txt>
          <View
            style={[
              styles.progressTag,
              progressBarWidth == 0
                ? styles.beforeStartTag
                : progressBarWidth == 100
                ? styles.completedTag
                : styles.notCompletedTag,
            ]}
          >
            {/* <Txt
              textStyle="medium12"
              color={progressBarWidth == 100 ? "white" : "black"}
            >
              {progressBarWidth == 0
                ? "시작 전"
                : progressBarWidth == 100
                ? "완료"
                : "진행중"}
            </Txt> */}
          </View>
        </View>
      </View>
      <View style={styles.timeProgressBox}>
        <View style={styles.timeBar}>
          <View
            style={[styles.timeProgress, { width: `${progressBarWidth}%` }]}
          />
        </View>
        <Txt textStyle="medium14">{progressBarWidth}%</Txt>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 16,
  },
  titleContainer: {
    gap: 8,
  },
  timeBar: {
    height: 8,
    flex: 1,
    borderRadius: 100,
    backgroundColor: color.gray200,
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
  completedBox: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 100,
  },
  progressTag: {
    // paddingVertical: 4,
    // paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 8,
    height: 8,
  },

  completedTag: {
    backgroundColor: color.gray600,
    borderColor: color.gray800,
  },
  notCompletedTag: {
    backgroundColor: color.gray50,
    borderColor: color.gray200,
  },
  beforeStartTag: {
    borderColor: color.gray200,
  },
});
