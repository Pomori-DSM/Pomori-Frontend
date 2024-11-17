import { FocusTime, GoalFocusTime, MainCard, PhraseBox } from "@/components";
import { Txt, color } from "@/styles";
import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Image,
} from "react-native";
import { useRandomPhrase } from "@/hooks";
import { Arrow } from "@/assets";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export default function Main() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleBox}>
        <Txt textStyle="semibold24">
          반가워요! 어진님{"\n"}오늘도 집중해봐요
        </Txt>
      </View>
      <View style={styles.focusTimeBox}>
        <View style={styles.focusTimeTitle}>
          <Txt textStyle="semibold24">내 집중력 확인</Txt>
          <Txt textStyle="medium14">9월 12일 목요일</Txt>
        </View>
        <FocusTime />
        <View style={styles.goalBox}>
          <MainCard
            onPress={() => navigation.navigate("Calendar")}
            title="내 계획"
            details="오늘 할 일 5개"
            image={require("../../assets/images/calender.png")}
          />
          <MainCard
            title="내 목표"
            onPress={() => navigation.navigate("Goal")}
            details="오늘 할 일 5개"
            image={require("../../assets/images/location.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingVertical: 24,

    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderEndEndRadius: 24,
  },
  goalBox: {
    flexDirection: "row",
    gap: 12,
  },
  container: {
    paddingTop: 80,
    gap: 48,
    // backgroundColor: color.white,
  },
  countTimeBox: {
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 16,
    gap: 8,
  },

  focusTimeBox: {
    paddingHorizontal: 20,
    width: "100%",
    gap: 12,
    // backgroundColor: color.white,
    borderRadius: 16,
  },
  focusTimeTitle: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
