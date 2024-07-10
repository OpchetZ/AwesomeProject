import React from "react";
import { View, TextInput, Text, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import MyIcon from "./MyIcon";


export default function Section8() {
    return (
        <View style={{ marginTop:20,marginLeft:20,flexDirection:"row",justifyContent:"space-between" }}>
            <View style={{ flexDirection:"column" }}>
                <Text>Price</Text>
                <Text style={{ color:"orange",fontSize:20 }}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>
            <View style={{ marginRight:50,width:175,height:350,borderRadius:50 }}>
            <Button
  title="Book Now"
  color="orange"
  borderRadius="50"
 
/>
            </View>
            
        </View>

    );
}