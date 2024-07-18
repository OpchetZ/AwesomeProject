import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    
    const [num, setNum] = useState(0);

    console.log("STATE : ", num);
    const PressHeart = () => {
        
        setNum(num+1);
    };
    return (
        <View>
            <View style={{ flexDirection:'row',justifyContent:'space-around',padding:30 }}>
                <TouchableOpacity onPress={PressHeart}>
                <FontAwesome name="heart" size={32} color="orange" />
                </TouchableOpacity>
                <Text style={{ fontSize:25 }}>{num}</Text>

            </View>
        </View>
    );
}
