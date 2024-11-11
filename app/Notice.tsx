import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Txt, color } from "@/styles";
import { TopBar } from "@/components";
import { Arrow } from "@/assets";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export default function Notice() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TopBar
        leftIcon={
          <Arrow onPress={() => navigation.goBack()} color={color.black} />
        }
        text="알림"
      />
      <View style={styles.noticeBox}>
        <View style={styles.circle} />
        <View style={styles.noticeDetails}>
          <Txt textStyle="semibold18" color="black">
            공부를 정말 열심히 하고 계신가요? 궁금해서 여쭤보아요.
          </Txt>
          <Txt textStyle="medium14" color="gray400">
            오늘 12:27
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
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  noticeBox: {
    width: "100%",
    borderBottomColor: color.gray100,
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 12,
    paddingVertical: 24,
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: color.gray800,
    margin: 7,
  },
  noticeDetails: {
    gap: 10,
    flex: 1,
  },
});
