import { Check } from "@/assets";
import { useTimeFormat } from "@/hooks";
import { Txt, color } from "@/styles";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

interface GoalFocusProps {
  time?: number;
  totalTime?: number;
  title?: string;
}

export const GoalFocusTime = ({
  time = 0,
  totalTime = 0,
  title,
}: GoalFocusProps) => {
  console.log(totalTime);
  const [checked, setChecked] = useState<boolean>(false);
  const timeText = useTimeFormat(time);
  const totalTimeText = useTimeFormat(totalTime);
  const progressBarWidth = isNaN(Math.floor((time / totalTime) * 100))
    ? 0
    : Math.floor((time / totalTime) * 100);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setChecked((prev) => !prev)}
        style={[
          styles.checkTodoBox,
          { backgroundColor: checked ? color.black : color.white },
        ]}
      >
        {checked && <Check size={16} color={color.white} />}
      </TouchableOpacity>
      <View style={styles.box}>
        <View style={styles.titleContainer}>
          <Txt textStyle="medium14" color="gray400">
            {timeText.timeFormatText} / {totalTimeText.timeFormatText}
          </Txt>
          <View style={styles.completedBox}>
            <Txt textStyle="semibold18">{title}</Txt>
            <View
              style={[
                styles.progressTag,
                progressBarWidth == 0 && !checked
                  ? styles.beforeStartTag
                  : progressBarWidth == 100 || checked
                  ? styles.completedTag
                  : styles.notCompletedTag,
              ]}
            >
              <Txt
                textStyle="medium12"
                color={progressBarWidth == 100 || checked ? "white" : "black"}
              >
                {progressBarWidth == 0 && !checked
                  ? "시작 전"
                  : progressBarWidth == 100 || checked
                  ? "완료"
                  : "진행중"}
              </Txt>
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
    </View>
  );
};

const styles = StyleSheet.create({
  checkTodoBox: {
    borderRadius: 4,
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: color.gray200,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    gap: 16,
    backgroundColor: color.white,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: color.gray100,
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    flex: 1,
    gap: 8,
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
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 100,
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
