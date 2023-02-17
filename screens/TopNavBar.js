import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SelfHelp from "./SelfHelp.js";
import Packages from "./Packages.js";
import Providers from "./Providers.js";
import Services from "./Services.js";

const TopTab = createMaterialTopTabNavigator();

const TopNavBar = () => {
  return (
    <TopTab.Navigator
      tabBarLayout="wrap"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#0F1A4D" },
        tabBarActiveTintColor: "#F4f5f3",
      }}
    >
      <TopTab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="room-service"
              color={color}
              size={25}
            />
          ),
        }}
      />

      <TopTab.Screen
        name="Provider"
        component={Providers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="doctor" color={color} size={25} />
          ),
        }}
      />
      <TopTab.Screen
        name="Self-Help"
        component={SelfHelp}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={25} />
          ),
        }}
      />
      <TopTab.Screen
        name="Packages"
        component={Packages}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="package-variant"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TopNavBar;
