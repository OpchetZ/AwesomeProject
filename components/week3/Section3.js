import React from "react";
import { View, TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Section3() {
    return (
        <View style={{ marginLeft:30,marginTop:20,flex:1 }}>



            <View style={{ flexDirection: "row" }}>
                <View style={{ borderRadius:100,backgroundColor:'orange',width: 50, height: 50,alignItems:'center',justifyContent:'center' }}>
                        <Text style={{ fontSize:20,color:'white' }}>9.5</Text>
                </View>
                <View  style={{ marginLeft:10 }}>
                        <Text style={{ fontSize:25,color:'orange' }}>Excellent</Text>
                        <Text style={{ fontSize:10,color:'black' }}>See 801 reviews</Text>
                </View>
            </View>
            
        </View>

    );
}