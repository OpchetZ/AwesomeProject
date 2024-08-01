import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

export default function Event(props) {    
    const [onlineTours, setOnlineTours] = useState([]);
  const loadOnlineTours = async () => {
    try{
        let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
        let data = await text.json();
        console.log("Load Data : " , data);
	  //SET STATE
        setOnlineTours(data);
    }catch(error){
        console.log("ERROR : " , error);
    }
} 
useEffect(() => {
    loadOnlineTours();
}, []);
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
      <Text style={{ color: "grey" }}>
        What's the Worst That Cloud Happen
      </Text>
      <FlatList
        horizontal={true}
        data={onlineTours}
        renderItem={({ item, index }) => {
          console.log(item, index, item.uri);
          return (
            <View style={{ marginRight: 10 }}>
              <Image
                style={{ width : Dimensions.get("screen").width/2.0, height: 150, borderTopLeftRadius: 10,borderTopRightRadius:10 }}
                source={{
                  uri: item.uri,
                }}
              />
              <View
                style={{
                  
                  flexDirection:'row',
                  borderWidth:1,
                  borderColor:'gray',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
              >
            <View
                style={{
                  
                  padding:10
                }}
              >
                 <Text style={{ fontSize: 20, color: "red" ,textAlign:'center' }}>
                  {item.month}
                </Text> 
                <Text style={{ fontSize: 15, color: "gray" ,textAlign:'center' }}>
                  {item.date}
                </Text> 
              </View>
              <View
                style={{
                  
                  padding:10
                }}
              >
                <Text style={{ fontSize: 20, color: "black" }}>
                  {item.title}
                </Text> 
                <Text style={{ fontSize: 15, color: "gray" }}>
                  {item.datetime}
                </Text> 
                <Text style={{ fontSize: 15, color: "gray"  }}>
                  {item.place}
                </Text> 
              </View>

              </View>
              
            </View>
            
          );
        }}
        keyExtractor={(item) => item.id}
      />
        </View>
    );

}
