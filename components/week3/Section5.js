import React from "react";
import { View, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "./MyIcon";


export default function Section5() {
    return (
        <View style={{ marginLeft:10,marginRight:10,marginTop:20,flex:1,flexDirection:"row" }}>

<MyIcon title="wifi" name="wifi" size={30} color="teal" />
        <MyIcon title="coffee" name="coffee" size={30} color="teal" />
        <MyIcon title="bath" name="bath" size={30} color="teal" />
        <MyIcon title="car" name="car" size={30} color="teal" />
        <MyIcon title="paw" name="paw" size={30} color="teal" />
            
            
        </View>

    );
}