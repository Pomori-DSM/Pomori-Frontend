import React, { useState, useEffect } from "react";
import { Stack } from "expo-router/stack";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";

// SplashScreen을 방지한 상태 유지
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isSplashDone, setIsSplashDone] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // 폰트 로드
        await Font.loadAsync({
          Thin: require("../assets/fonts/SUIT-Thin.otf"),
          ExtraLight: require("../assets/fonts/SUIT-ExtraLight.otf"),
          Light: require("../assets/fonts/SUIT-Light.otf"),
          Regular: require("../assets/fonts/SUIT-Regular.otf"),
          Medium: require("../assets/fonts/SUIT-Medium.otf"),
          SemiBold: require("../assets/fonts/SUIT-SemiBold.otf"),
          Bold: require("../assets/fonts/SUIT-Bold.otf"),
          ExtraBold: require("../assets/fonts/SUIT-ExtraBold.otf"),
          Heavy: require("../assets/fonts/SUIT-Heavy.otf"),
        });
        setIsFontLoaded(true);

        // 스플래쉬 지연
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.warn("Error loading resources:", error);
      } finally {
        setIsSplashDone(true);
        SplashScreen.hideAsync(); // 스플래쉬 화면 숨기기
      }
    };

    loadResources();
  }, []);

  // 로딩 중일 경우 Splash 화면 표시
  if (!isFontLoaded || !isSplashDone) {
    return <Splash />;
  }

  // 폰트와 스플래쉬가 완료된 경우 메인 화면 표시
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Notice" />
      <Stack.Screen name="Signup" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Set" />
      <Stack.Screen name="SetTimeModal" />
      <Stack.Screen name="AddGoal" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
