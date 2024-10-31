import React from "react";
import { Stack } from "expo-router";

export default function App(): React.JSX.Element {
  return (
    <Stack initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Onboarding" />
    </Stack>
  );
}
