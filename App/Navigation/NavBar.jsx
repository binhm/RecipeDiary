import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../Screens/SearchScreen";
import HomeScreen from "../Screens/HomeScreen";
import AddScreen from "../Screens/AddScreen";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Search") {
            iconName = "search1";
          } else if (route.name === "Add") {
            iconName = "plus";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
    </Tab.Navigator>
  );
}
