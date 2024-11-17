import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Keyboard } from "react-native";
import { color, Txt } from "@/styles";
import { Button, Input, TopBar } from "@/components";
import { Arrow_Long } from "@/assets";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useNavigation } from "expo-router";
import { signup } from "./apis/user";
import { NavigationProp } from "@react-navigation/native";

export default function Signup() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { id: "", password: "", passwordCheck: "" } });

  const navigation = useNavigation<NavigationProp<any>>();
  const password = useWatch({ control, name: "password" });

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const signupHandler = handleSubmit((data) => {
    signup(data, navigation);
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardOpen(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={
          <Arrow_Long onPress={() => navigation.goBack()} color={color.black} />
        }
      />
      <View style={styles.loginBox}>
        <View style={styles.titleBox}>
          <Txt textStyle="semibold36">회원가입</Txt>
          <Txt textStyle="semibold16" color="gray500">
            효율적인 공부의 시작, POMORI
          </Txt>
        </View>
        <View style={styles.inputBox}>
          <Controller
            name="id"
            control={control}
            rules={{ required: "아이디를 입력해주세요." }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                title="아이디"
                placeholder="아이디 입력"
                type="text"
                errorMessage={errors.id?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "비밀번호를 입력해주세요." }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                title="비밀번호"
                placeholder="비밀번호 입력"
                type="password"
                errorMessage={errors.password?.message}
              />
            )}
          />
          <Controller
            name="passwordCheck"
            control={control}
            rules={{
              required: "비밀번호를 입력해주세요.",
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                value={value}
                title="비밀번호 확인"
                placeholder="비밀번호 재입력"
                type="password"
                errorMessage={errors.password?.message}
              />
            )}
          />
        </View>
      </View>
      <View style={[styles.buttonBox, { padding: keyboardOpen ? 0 : 20 }]}>
        <Button
          onPress={signupHandler}
          text="회원가입 완료"
          keyboardOpen={keyboardOpen}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    position: "relative",
    paddingTop: 80,
  },
  loginBox: {
    padding: 20,
    gap: 24,
    flex: 1,
  },
  titleBox: {
    gap: 12,
  },
  inputBox: {
    gap: 24,
    paddingVertical: 16,
  },
  buttonBox: {
    width: Dimensions.get("window").width,
  },
});
