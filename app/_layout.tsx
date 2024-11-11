import React, { useState, useEffect } from "react";
import { Stack } from "expo-router/stack";
import * as Font from "expo-font";
import { Text } from "react-native";
import { ThemeProvider } from "@react-navigation/native";

export default function App() {
  const [isFont, setIsFont] = useState<boolean>(false);

  const loadFonts = async () => {
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
    setIsFont(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!isFont) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Notice" />
      <Stack.Screen name="Signup" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
