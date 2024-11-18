import { Arrow_Long } from "@/assets";
import { Button, Input, TopBar } from "@/components";
import { color } from "@/styles";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddGoal() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { goalTitle: "", endDate: "", time: "" } });
  const navigation = useNavigation<NavigationProp<any>>();

  // 목표 추가 처리 함수
  const addGoalHandler = handleSubmit(async (data) => {
    try {
      // 입력된 time을 초 단위로 변환
      const timeParts = data.time.split(":").map(Number); // 시, 분, 초를 분리하여 숫자로 변환
      const timeInSeconds =
        (timeParts[0] || 0) * 3600 + // 시 * 3600초
        (timeParts[1] || 0) * 60 + // 분 * 60초
        (timeParts[2] || 0); // 초 그대로

      // AsyncStorage에서 현재 목표 가져오기
      const currentGoals = await AsyncStorage.getItem("goals");
      const parsedGoals = currentGoals ? JSON.parse(currentGoals) : [];

      // 새로운 목표 추가
      const newGoal = {
        goalTitle: data.goalTitle,
        endDate: data.endDate,
        time: timeInSeconds, // 변환된 초 단위 시간 저장
      };

      parsedGoals.push(newGoal);

      // 업데이트된 목표 리스트를 AsyncStorage에 저장
      await AsyncStorage.setItem("goals", JSON.stringify(parsedGoals));

      // 목표 추가 후 목록 화면으로 돌아가기
      navigation.goBack();
    } catch (error) {
      console.error("목표 저장 실패:", error);
    }
  });

  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={
          <Arrow_Long onPress={() => navigation.goBack()} color={color.black} />
        }
        text="목표 추가"
      />
      <View style={styles.inputBox}>
        <Controller
          name="goalTitle"
          rules={{ required: "목표를 입력해주세요.", max: 100 }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              title="목표"
              placeholder="최대 100자"
              errorMessage={errors.goalTitle?.message}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          rules={{
            required: "종료 날짜를 입력해주세요.",
            pattern: {
              value:
                /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):[0-5]\d$/,
              message: "형식에 맞지 않습니다.",
            },
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              title="종료 날짜"
              placeholder="년-월-일 시:분"
              errorMessage={errors.endDate?.message}
            />
          )}
        />
        <Controller
          name="time"
          control={control}
          rules={{
            required: "시간을 입력해주세요.",
          }}
          render={({ field: { value, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              title="시간"
              placeholder="시:분:초"
              errorMessage={errors.time?.message}
            />
          )}
        />
      </View>
      <View style={styles.buttonBox}>
        <Button onPress={addGoalHandler} text="목표 추가" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 20,
    paddingTop: 100,
    gap: 24,
    justifyContent: "space-between",
  },
  inputBox: {
    gap: 24,
  },
  buttonBox: {
    paddingVertical: 20,
  },
});
