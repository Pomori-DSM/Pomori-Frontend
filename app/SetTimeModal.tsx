import { Txt, color } from "@/styles";
import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface ISetTimeModal {
  setVisibleModal: any;
  setTime: any;
  setContinueTime: any;
}

export default function SetTimeModal({
  setVisibleModal,
  setTime,
  setContinueTime,
}: ISetTimeModal) {
  const [hourIndex, setHourIndex] = useState(0);
  const [minuteIndex, setMinuteIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);

  useEffect(() => {
    console.log(`${hourIndex}:${minuteIndex}:${secondIndex}`);
  }, [hourIndex, minuteIndex, secondIndex]);

  const hourArr = Array(60)
    .fill(null)
    .map((v, i) => i);
  const minSecArr = Array(60)
    .fill(null)
    .map((v, i) => i);

  const scrollRefs = {
    hour: useRef<ScrollView>(null),
    minute: useRef<ScrollView>(null),
    second: useRef<ScrollView>(null),
  };

  const snapToInterval = 100;

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    arrayLength: number,
    ref: React.RefObject<ScrollView>
  ) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / snapToInterval) % arrayLength;

    if (offsetY <= snapToInterval) {
      ref.current?.scrollTo({
        y: offsetY + arrayLength * snapToInterval,
        animated: false,
      });
    } else if (offsetY >= (arrayLength * 2 - 1) * snapToInterval) {
      ref.current?.scrollTo({
        y: offsetY - arrayLength * snapToInterval,
        animated: false,
      });
    }

    setIndex((index + arrayLength) % arrayLength);
  };

  const setTimeHandle = () => {
    setVisibleModal(false);
    let time =
      ((hourIndex + 1) % 60) * 3600 +
      ((minuteIndex + 1) % 60) * 60 +
      ((secondIndex + 1) % 60);
    setTime(time);
    setContinueTime(time);
  };

  return (
    <View style={styles.container}>
      <View style={styles.setTimeBox}>
        {/* <FlatList keyExtractor={(i) => ``} data={} renderItem={} /> */}
        <ScrollView
          ref={scrollRefs.hour}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          snapToInterval={snapToInterval}
          decelerationRate="fast"
          onScroll={(event) =>
            handleScroll(event, setHourIndex, hourArr.length, scrollRefs.hour)
          }
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {Array(3)
            .fill(hourArr)
            .flat()
            .map((i, idx) => (
              <Txt
                key={`hour${idx}`}
                textStyle="extralight88"
                style={{
                  textAlign: "center",
                }}
              >
                {i.toString().padStart(2, "0")}
              </Txt>
            ))}
        </ScrollView>
        <Txt textStyle="extralight88">:</Txt>
        <ScrollView
          ref={scrollRefs.minute}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          snapToInterval={snapToInterval}
          decelerationRate="fast"
          onScroll={(event) =>
            handleScroll(
              event,
              setMinuteIndex,
              minSecArr.length,
              scrollRefs.minute
            )
          }
          scrollEventThrottle={16}
        >
          {Array(3)
            .fill(minSecArr)
            .flat()
            .map((i, idx) => (
              <Txt
                key={`min${idx}`}
                textStyle="extralight88"
                style={{ textAlign: "center" }}
              >
                {i.toString().padStart(2, "0")}
              </Txt>
            ))}
        </ScrollView>
        <Txt textStyle="extralight88">:</Txt>
        <ScrollView
          ref={scrollRefs.second}
          showsVerticalScrollIndicator={false}
          pagingEnabled
          snapToInterval={snapToInterval}
          decelerationRate="fast"
          onScroll={(event) =>
            handleScroll(
              event,
              setSecondIndex,
              minSecArr.length,
              scrollRefs.second
            )
          }
          scrollEventThrottle={16}
        >
          {Array(3)
            .fill(minSecArr)
            .flat()
            .map((i, idx) => (
              <Txt
                key={`sec${idx}`}
                textStyle="extralight88"
                style={{ textAlign: "center" }}
              >
                {i.toString().padStart(2, "0")}
              </Txt>
            ))}
        </ScrollView>
        <LinearGradient
          colors={["white", "transparent"]}
          style={styles.translucentWrap1}
        />
        <LinearGradient
          colors={["transparent", "white"]}
          style={styles.translucentWrap2}
        />
      </View>
      <TouchableOpacity onPress={setTimeHandle} style={styles.pauseButton}>
        <Txt textStyle="medium18" color="white">
          완료
        </Txt>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    backgroundColor: color.white,
  },
  setTimeBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 300,
    position: "relative",
  },
  pauseButton: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.black,
    borderWidth: 2,
    borderColor: color.black,
    borderRadius: 100,
    width: 220,
  },
  translucentWrap1: {
    position: "absolute",
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: Dimensions.get("window").width,
    height: 100,
    zIndex: 100,
  },
  translucentWrap2: {
    position: "absolute",
    top: 200,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: Dimensions.get("window").width,
    height: 100,
    zIndex: 100,
  },
  scrollView: {},
});
