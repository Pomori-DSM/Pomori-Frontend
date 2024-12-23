import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { color, Txt } from "@/styles";
import { Button, Input, TopBar } from "@/components";
import { Arrow_Long } from "@/assets";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "expo-router";
import { login } from "./apis/user";
import { NavigationProp } from "@react-navigation/native";

export default function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { id: "", password: "" } });

  const navigation = useNavigation<NavigationProp<any>>();

  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const loginHandler = handleSubmit((data) => {
    login(data, navigation);
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
          <Txt textStyle="semibold36">로그인</Txt>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={styles.moveSignupTextBox}
          >
            <Txt textStyle="medium16" color="gray500">
              계정이 없으신가요?
            </Txt>
            <Txt textStyle="semibold16">회원가입</Txt>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.buttonBox, { padding: keyboardOpen ? 0 : 20 }]}>
        <Button
          onPress={loginHandler}
          text="로그인"
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
  moveSignupTextBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
