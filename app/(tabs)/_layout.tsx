import React from "react";
import { Tabs, useNavigation } from "expo-router";
import { Bell, Calendar, House, Notebook, Timer, User } from "@/assets";
import { Txt, color } from "@/styles";
import { TopBar } from "@/components";
import { TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";

export default function Tab() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: color.gray400,
        tabBarActiveTintColor: color.black,
        // headerShown: false,
        header: () => (
          <TopBar
            leftIcon={<Txt textStyle="heavy20">POMORI</Txt>}
            rightIcon={
              <TouchableOpacity onPress={() => navigation.navigate("Notice")}>
                <Bell color={color.black} />
              </TouchableOpacity>
            }
          />
        ),
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
          headerShown: false,
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
        name="Profile"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <User size={32} isFill={color == "#000000"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
