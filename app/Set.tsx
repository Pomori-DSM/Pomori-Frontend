import { Arrow_Long } from "@/assets";
import { SetList, TopBar } from "@/components";
import { Txt, color } from "@/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default function Set() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Arrow_Long color={color.black} />
          </TouchableOpacity>
        }
        text="설정"
      />
      <SetList text="내 정보" />
      <SetList type="toggle" text="테마" />
      <SetList text="알림 관리" />
      <SetList text="버전 정보" />
      <SetList text="문의" />
      <SetList
        onPress={() => {
          AsyncStorage.removeItem("accessToken");
          navigation.navigate("Login");
        }}
        text="로그아웃"
      />
      <Txt style={styles.appVersion} textStyle="medium14" color="gray400">
        ⓒ Pomori
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: 100,
    gap: 6,
  },
  appVersion: {
    position: "absolute",
    bottom: 24,
    left: 24,
  },
});
