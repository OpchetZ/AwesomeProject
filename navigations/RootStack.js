import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./ฺBottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Tarvel";
import Resort from "../screens/week3/Resort";
import Health from "../screens/week5/Health";


const Stack = createStackNavigator();

export default function RootStack() {
  return ( 
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      
      <Stack.Screen name="Resort" component={Resort} options={{ title : "Resort" }}  />
      <Stack.Screen name="Health" component={Health} options={{ title : "Health" }}  />
    </Stack.Navigator>
  );
}
