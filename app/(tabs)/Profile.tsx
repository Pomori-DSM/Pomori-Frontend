import { Setting, User } from "@/assets";
import { TopBar } from "@/components";
import { color, Txt } from "@/styles";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Profile() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TopBar
        rightIcon={
          <TouchableOpacity onPress={() => navigation.navigate("Set")}>
            <Setting color={color.black} />
          </TouchableOpacity>
        }
      />
      <View style={styles.userInfoBox}>
        <View style={styles.userProfile} />
        <View style={styles.profileText}>
          {false ? (
            <Txt textStyle="semibold24">사용자 이름</Txt>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.loginButton}
            >
              <User color={color.gray600} size={16} />
              <Txt color="gray600" textStyle="semibold16">
                로그인
              </Txt>
            </TouchableOpacity>
          )}
          <Txt color="gray400" textStyle="medium16">
            16시간 28분
          </Txt>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  userInfoBox: {
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  userProfile: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: "red",
    borderColor: color.gray50,
    borderWidth: 4,
  },
  profileText: {
    alignItems: "center",
    gap: 12,
  },
  loginButton: {
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
});
