import { View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TopBar } from "@/components";
import { Arrow_Long, Bell, Play, Redo, Volume_Max } from "@/assets";
import { Txt, color } from "@/styles";
import { Pause } from "@/assets/Pause";
import SetTimeModal from "../SetTimeModal";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export default function Timer() {
  const navigation = useNavigation<NavigationProp<any>>();
  const initTime = 0;

  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [time, setTime] = useState<number>(initTime);
  const [continueTime, setContinueTime] = useState<number>(0);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const hour = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");

  const min = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");

  const sec = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  const resetTimer = () => {
    setTime(initTime);
  };

  const continueTimer = () => {
    setTime(continueTime);
  };

  useEffect(() => {
    let intervalTimer: NodeJS.Timeout | null = null;
    if (isPlay && time > 0) {
      intervalTimer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalTimer!);
            setIsPlay(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalTimer) {
        clearInterval(intervalTimer);
      }
    };
  }, [isPlay, time]);

  return (
    <View style={styles.container}>
      {visibleModal ? (
        <>
          <TopBar
            leftIcon={
              <Arrow_Long
                onPress={() => setVisibleModal(false)}
                color={color.black}
              />
            }
          />
          <SetTimeModal
            setTime={setTime}
            setVisibleModal={setVisibleModal}
            setContinueTime={setContinueTime}
          />
        </>
      ) : (
        <>
          <TopBar
            leftIcon={<Txt textStyle="heavy20">POMORI</Txt>}
            rightIcon={
              <TouchableOpacity onPress={() => navigation.navigate("Notice")}>
                <Bell color={color.black} />
              </TouchableOpacity>
            }
          />
          <View style={styles.timerBox}>
            <TouchableOpacity
              onPress={() => {
                if (!isPlay) setVisibleModal(true);
              }}
            >
              <View style={styles.timer}>
                <View style={styles.timeBox}>
                  <Txt textStyle="extralight88">{hour}</Txt>
                </View>
                <Txt textStyle="extralight88">:</Txt>

                <View style={styles.timeBox}>
                  <Txt textStyle="extralight88">{min}</Txt>
                </View>
                <Txt textStyle="extralight88">:</Txt>

                <View style={styles.timeBox}>
                  <Txt textStyle="extralight88">{sec}</Txt>
                </View>
              </View>
            </TouchableOpacity>
            {time == 0 && (
              <TouchableOpacity
                onPress={continueTimer}
                style={styles.continueButton}
              >
                <Play fill={color.gray600} color={color.gray600} size={16} />
                <Txt color="gray600" textStyle="semibold16">
                  다시 시작
                </Txt>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.timeControlBox}>
            <TouchableOpacity style={styles.subControlButton}>
              <Volume_Max color={color.gray500} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (time !== 0) setIsPlay((prev) => !prev);
              }}
              style={isPlay ? styles.pauseButton : styles.playButton}
            >
              {isPlay && time !== 0 ? (
                <Pause color={color.white} />
              ) : (
                <Play color={color.black} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={resetTimer}
              style={styles.subControlButton}
            >
              <Redo color={color.gray500} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
    justifyContent: "space-between",
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
    width: 220,
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
    width: 220,
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeBox: {
    width: 110,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
