import React from "react";
import { Tabs } from "expo-router";
import { Play } from "@/assets";

export default function Tab() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "red", headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Play color={color} />,
        }}
      />
      <Tabs.Screen
        name="Main"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Play color={color} />,
        }}
      />
    </Tabs>
  );
}
