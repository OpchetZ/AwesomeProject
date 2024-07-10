import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "./MyIcon";


export default function Section6() {
    return (
        <View style={{ marginLeft:20,marginRight:20,marginTop:20,flex:1,flexDirection:"column" }}>

        <Text style={{ fontSize:20 }}>Location</Text>
        <Text>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
        <View>
        <Image style={{ width: 575 }} source={require("../../assets/week3/map.jpg")} />
        </View>
            
        </View>

    );
}