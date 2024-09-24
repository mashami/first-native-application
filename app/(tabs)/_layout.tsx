import { Tabs } from "expo-router"
import React from "react"

import { TabBarIcon } from "@/components/navigation/TabBarIcon"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { Text } from "react-native"

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 1,
          height: 65,
          paddingTop: 10,
          borderTopColor: "#232533"
        }
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#FFFFFF" : "#808080", fontSize: 13 }}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#FFA001" : color}
            />
          ),
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#808080"
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#FFFFFF" : "#808080", fontSize: 13 }}
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={focused ? "#FFA001" : color}
            />
          ),
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#808080"
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "create",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#FFFFFF" : "#808080", fontSize: 13 }}
            >
              Create
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "create" : "create-outline"}
              color={focused ? "#FFA001" : color}
            />
          ),
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#808080"
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "saved",
          tabBarLabel: ({ focused }) => (
            <Text
              style={{ color: focused ? "#FFFFFF" : "#808080", fontSize: 13 }}
            >
              Saved
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bookmarks-sharp" : "bookmarks-outline"}
              color={focused ? "#FFA001" : color}
            />
          ),
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#808080"
        }}
      />
    </Tabs>
  )
}
