import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "./MyIcon";


export default function Section7() {
    return (
        <View style={{ marginTop:20,marginLeft:20 }}>
            <View>
                <Text style={{ fontSize:20}}>Room Type</Text>
            </View>
            <View style={{ flexDirection:"row" }}>
                <View>
                <Image style={{ width: 100, height: 120, borderRadius: 20 }} source={require("../../assets/week3/room-2.jpg")} />
                </View>
                <View style={{ marginLeft:20}}>
                    <Text style={{ fontSize:20 }}>Standard Twin Room</Text>
                    <Text style={{ marginTop:20,color:"orange" }}>$399.99</Text>
                    <Text style={{ color:"lime" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
            
        </View>

    );
}