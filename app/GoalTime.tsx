import { Arrow_Long } from "@/assets";
import { TopBar } from "@/components";
import { useTimeFormat } from "@/hooks";
import { Txt, color } from "@/styles";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

interface GoalTimeProps {
  totalTime?: number;
}

export default function GoalTime({ totalTime = 0 }: GoalTimeProps) {
  const [clickedTabBar, setClickedTabBar] = useState<number>(0);
  const tabBarText = ["오늘", "어제", "이번 주"];
  const { timeFormatText } = useTimeFormat(totalTime);
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={
          <Arrow_Long onPress={() => navigation.goBack()} color={color.black} />
        }
      />
      <View style={styles.titleBox}>
        <Txt textStyle="medium16" color="gray400">
          오늘 집중한 시간
        </Txt>
        <Txt textStyle="semibold32">{timeFormatText}</Txt>
        {/* <Txt textStyle="medium14" color="gray400">
          ⓘ 오후 11시 59분까지 기록
        </Txt> */}
      </View>
      <View style={styles.navControllerContainer}>
        <View style={styles.navControllerBox}>
          {tabBarText.map((text, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setClickedTabBar(index)}
              style={[
                styles.navController,
                {
                  backgroundColor:
                    clickedTabBar == index ? color.white : color.gray100,
                },
              ]}
            >
              <Txt
                textStyle="semibold16"
                color={clickedTabBar == index ? "black" : "gray400"}
              >
                {text}
              </Txt>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {<ScrollView></ScrollView>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 108,
    gap: 36,
    backgroundColor: color.white,
  },
  titleBox: {
    gap: 8,
    paddingHorizontal: 24,
  },
  navControllerContainer: {
    width: "100%",
    paddingHorizontal: 24,
  },
  navControllerBox: {
    backgroundColor: color.gray100,
    borderRadius: 100,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navController: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});
