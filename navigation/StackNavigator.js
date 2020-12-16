import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";


import SubHome from "../screens/SubHome";
import SubAbout from "../screens/SubAbout";
import Contact from "../screens/Contact";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
     //   headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}


const SubStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
     //   headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="SubHome" component={SubHome} />
      <Stack.Screen name="SubAbout" component={SubAbout} />
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
     
    </Stack.Navigator>
  );
}


export { MainStackNavigator , SubStackNavigator };