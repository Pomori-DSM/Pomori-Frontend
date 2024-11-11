import { Txt, color } from "@/styles";
import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "@/components";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function Onboarding() {
  const [imageNumber, setImageNumber] = useState<number>(0);
  const images = [
    <View style={styles.image} />,
    <View style={styles.image} />,
    <View style={styles.image} />,
  ];
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Txt textStyle="semibold16" color="gray500">
          POMORI에 오신 걸 환영해요
        </Txt>
        <Txt textStyle="semibold36" color="black">
          나만의 목표를{"\n"}추가하고 관리해요
        </Txt>
      </View>
      <View style={styles.imageSlideBox}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.imageSlide}
        >
          {images.map((img, index) => (
            <View key={index} style={styles.image} />
          ))}
        </ScrollView>
        <View style={styles.dotIndicatorBox}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, imageNumber === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonBox}>
        <Button
          onPress={() => navigation.navigate("Login")}
          type="primary"
          text="로그인"
        />
        <Button type="white" text="게스트로 시작하기" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: 20,
    gap: 24,
  },
  titleBox: {
    width: "100%",
    gap: 12,
  },
  imageSlide: {
    width: "100%",
  },
  image: {
    borderRadius: 16,
    backgroundColor: color.gray300,
    width: Dimensions.get("window").width - 40,
  },
  imageSlideBox: {
    flex: 1,
    gap: 24,
  },
  dotIndicatorBox: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  dot: {
    borderRadius: 8,
    backgroundColor: color.gray200,
    width: 8,
    height: 8,
  },
  activeDot: {
    backgroundColor: color.black,
    width: 40,
  },
  buttonBox: {
    width: "100%",
    gap: 8,
  },
});
