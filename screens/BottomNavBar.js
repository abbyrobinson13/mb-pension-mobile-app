import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ContentHome from "./ContentHome.js";
import Wallet from "./Wallet.js";
import Profile from "./Profile.js";
import TopNavBar from "./TopNavBar.js";
import LoggingOut from "./LoggingOut.js";

import UpdateEmployeeProfile from "./UpdateEmployeeProfile"

const BottomNavBar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#2a11ed",
      }}
    >
      <Tab.Screen
        name="Home"
        component={TopNavBar}
        options={{
          headerTitle: "",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UpdateEmployeeProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LoggingOut}
        options={{
          tabBarLabel: "Log Out",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout-variant" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({});
