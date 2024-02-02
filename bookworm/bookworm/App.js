import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./src/Home";
import FictionScreen from "./src/Fiction";
import ComedyScreen from "./src/Comedy";
import UploadScreen from "./src/Upload";
import { Text, SafeAreaView, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Fiction") {
                iconName = "book";
              }else if (route.name === "Comedy") {
                iconName = "book";
              }else if (route.name === "Upload") {
                iconName = "book";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "#FBE5C0",
            inactiveTintColor: "black",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "#F88379"
            },
            labelStyle: {
              fontSize: 15,
              fontFamily: "Rajdhani_600SemiBold"
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center"
            }
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Fiction" component={FictionScreen} />
          <Tab.Screen name="Comedy" component={ComedyScreen} />
          <Tab.Screen name="Upload" component={UploadScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default App;

