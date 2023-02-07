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
        tabBarStyle: { backgroundColor: "#D2E3EC" },
        tabBarActiveTintColor: "black",
      }}
    >
      <TopTab.Group>
        <TopTab.Screen
          name="0"
          component={Services}
          options={{
            tabBarLabel: ({ color, size }) => (
              <MaterialCommunityIcons
                name="room-service"
                color={color}
                size={30}
              />
            ),
          }}
        />

        <TopTab.Screen
          name="Providers"
          component={Providers}
          options={{
            tabBarLabel: ({ color, size }) => (
              <MaterialCommunityIcons name="doctor" color={color} size={30} />
            ),
          }}
        />
        <TopTab.Screen
          name="Packages"
          component={Packages}
          options={{
            tabBarLabel: ({ color, size }) => (
              <MaterialCommunityIcons
                name="package-variant"
                color={color}
                size={30}
              />
            ),
          }}
        />
      </TopTab.Group>
      <TopTab.Group>
        <TopTab.Screen
          name="Self-Help"
          component={SelfHelp}
          options={{
            tabBarLabel: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={30}
              />
            ),
          }}
        />
      </TopTab.Group>
    </TopTab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TopNavBar;
