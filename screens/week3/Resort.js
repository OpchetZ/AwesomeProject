import React from 'react';
import { ScrollView,  View } from 'react-native';
import Section1 from '../../components/week3/Section1';
import Section2 from '../../components/week3/Section2';
import Section3 from '../../components/week3/Section3';
import Section4 from '../../components/week3/Section4';

export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 , flexDirection: 'column'}}>
                    <Section1/>
                    <Section2/>
                    <Section3/>
                    <Section4/>
            </View>
        </ScrollView>
    );
}
