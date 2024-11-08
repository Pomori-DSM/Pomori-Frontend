import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TopBar } from "@/components";
import { Bell, Play, Redo, Volume_Max } from "@/assets";
import { Txt, color } from "@/styles";
import { Pause } from "@/assets/Pause";

export default function Main() {
  const totalTime = 140;

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(totalTime);

  const hour = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");

  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  const timer = () => {
    setTime((prevTime) => prevTime - 1);
  };
  useEffect(() => {
    let intervalTimer = setInterval(timer, 1000);
    if (isPlay) {
      intervalTimer = setInterval(timer, 1000);
    } else if (time < 0 || !isPlay) {
      clearInterval(intervalTimer);
    }
    return () => {
      clearInterval(intervalTimer);
    };
  });

  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={<Txt textStyle="heavy20">POMORI</Txt>}
        rightIcon={<Bell color={color.black} />}
      />
      <View style={styles.timerBox}>
        <Txt textStyle="extralight88">{`${hour}:${min}:${sec}`}</Txt>
        <TouchableOpacity style={styles.continueButton}>
          <Play fill={color.gray600} color={color.gray600} size={16} />
          <Txt color="gray600" textStyle="semibold16">
            이어서 하기
          </Txt>
        </TouchableOpacity>
      </View>
      <View style={styles.timeControlBox}>
        <TouchableOpacity style={styles.subControlButton}>
          <Volume_Max color={color.gray500} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsPlay(!isPlay)}
          style={isPlay ? styles.pauseButton : styles.playButton}
        >
          {isPlay ? (
            <>
              <Pause color={color.white} />
            </>
          ) : (
            <>
              <Play color={color.black} />
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.subControlButton}>
          <Redo color={color.gray500} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: color.white,
    justifyContent: "space-between",
  },
  timerBox: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  continueButton: {
    borderRadius: 100,
    backgroundColor: color.gray50,
    borderWidth: 1,
    borderColor: color.gray200,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  timeControlBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
  subControlButton: {
    padding: 16,
    backgroundColor: color.gray50,
    borderWidth: 2,
    borderColor: color.gray200,
    borderRadius: 100,
  },
  playButton: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
    borderWidth: 2,
    borderColor: color.gray200,
    flex: 1,
    borderRadius: 100,
  },
  pauseButton: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.black,
    borderWidth: 2,
    borderColor: color.black,
    flex: 1,
    borderRadius: 100,
  },
});
