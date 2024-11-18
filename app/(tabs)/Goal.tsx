import { Arrow, Plus } from "@/assets";
import { GoalFocusTime, PhraseBox } from "@/components";
import { useRandomPhrase } from "@/hooks";
import { Txt, color } from "@/styles";
import { NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { getAllGoals } from "../apis/goal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Goal() {
  const [goals, setGoals] = useState<any[]>([]); // goals 상태를 배열로 설정
  const [loading, setLoading] = useState(true);
  const phraseArr = useRandomPhrase();
  const navigation = useNavigation<NavigationProp<any>>();

  // 목표 데이터를 AsyncStorage에서 불러오는 함수
  const fetchGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem("goals"); // AsyncStorage에서 목표 데이터 불러오기
      if (storedGoals) {
        setGoals(JSON.parse(storedGoals)); // 데이터가 있으면 상태에 설정
      }
    } catch (error) {
      console.error("Failed to fetch goals from AsyncStorage:", error);
    } finally {
      setLoading(false); //로딩 종료
    }
  };

  useEffect(() => {
    fetchGoals(); // 컴포넌트 마운트 시 목표 데이터를 불
  }, []);

  return (
    <View style={styles.box}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
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
          <View style={styles.focusTimeTitle}>
            <Txt textStyle="semibold24">오늘의 목표</Txt>
            <Plus
              onPress={() => navigation.navigate("AddGoal")}
              color={color.black}
            />
          </View>
          {loading ? (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={color.black} />
              <Txt textStyle="medium18" color="gray400">
                목표 데이터를 불러오는 중입니다...
              </Txt>
            </View>
          ) : (
            <>
              {goals.length > 0 ? (
                goals.map(({ goalTitle, time }, index) => (
                  <GoalFocusTime
                    title={goalTitle}
                    key={index}
                    time={200}
                    totalTime={Number(time)}
                  />
                ))
              ) : (
                <Txt color="gray400" textStyle="medium18">
                  저장된 목표가 없습니다.
                </Txt>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: color.white,
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.white,
  },
  focusTimeTitle: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
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
    padding: 20,
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
