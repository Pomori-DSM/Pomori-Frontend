import React from "react";
import { Tabs } from "expo-router";
import { Calendar, House, Notebook, Timer, User } from "@/assets";
import { color } from "@/styles";

export default function Tab() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: color.gray400,
        tabBarActiveTintColor: color.black,
        headerShown: false,
        tabBarStyle: {
          padding: 8,
          height: 72,
        },
      }}
    >
      <Tabs.Screen
        name="Main"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <House size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Goal"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Notebook size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Timer"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Timer size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Calendar"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Calendar size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <User size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
