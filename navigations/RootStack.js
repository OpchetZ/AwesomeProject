import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./ฺBottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Tarvel";
import Resort from "../screens/week3/Resort";
import Health from "../screens/week5/Health";
import YourHealth from "../components/week9/YourHealth";
import TodoList from "../screens/week9/TodoList";


const Stack = createStackNavigator();

export default function RootStack() {
  return ( 
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      {/* <Stack.Screen name="Tarvel" component={Travel} options={{ title : "Travel" }}  /> */}
      <Stack.Screen name="Resort" component={Resort} options={{ title : "Resort" }}  />
      <Stack.Screen name="Health" component={Health} options={{ title : "Health" }}  />
      <Stack.Screen name="YourHealth" component={YourHealth} />
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
}
