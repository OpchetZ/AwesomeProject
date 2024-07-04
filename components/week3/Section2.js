import React from "react";
import {  View,  TextInput, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Section2() {
  return (
    <View style={{ marginTop : -25 ,marginLeft : 25,marginRight : 25, padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 20, backgroundColor: 'white' }}>
            <View style={{ alignItems:"center" }}>
            
            <Text style={{fontSize: 25}}>Hilton San Francisco</Text>
            <View style={{ flexDirection : "row" }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                <Text>Facilities provided may range from a modest quality mattress in a</Text>
                <Text>small room to large suites</Text>
            </View>
    </View>
  );
}