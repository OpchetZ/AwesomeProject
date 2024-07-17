import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [jj, setJJ] = useState("-");

 

  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));
    console.log(bmi);
    let des = "";
    if (bmi < 18.5) des = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.99) des = "Normal";
    else if (bmi >= 25 && bmi <= 29.99) des = "Overweight";
    else if (bmi >= 30 && bmi <= 39.99) des = "Obese";
    else des = "Morbidly Obese";
    setJJ(des);
    console.log(jj);
    console.log(output,des);
    
    
  };
  console.log("STATE : ", weight, height, bmi, jj);

  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25 }}>Weight (kg.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          value={weight}
          keyboardType="numeric"
          placeholder="Input your weight"
          onChangeText={(newWeight) => setWeight(newWeight)}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 25 }}>Height (cm.)</Text>
        <TextInput
          style={{ fontSize: 20 }}
          value={height}
          keyboardType="numeric"
          placeholder="Input your height"
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 25 }}>BMI : {bmi}</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 25 }}>{jj}</Text>
        </View>
      </View>
      {/* <Button title="Calculate" onPress={ onPressButton }/> */}
      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}
        >
          <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
