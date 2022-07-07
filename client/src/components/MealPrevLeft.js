import { View, Text, Image } from "react-native"

import tw from 'twrnc';


export default ({mealInfos}) => {
    return <View style={tw`w-1/3 h-full`}>
        <View style={{...tw` w-full h-2/3`,margin:20}} >
            <Image
                style={tw `object-cover h-full w-full`}
                source={{
                    uri: mealInfos["image"],
                }}
            />
        </View>
        <View style={{...tw` w-full px-20`}} >

            <Text style={{...tw `px-3`, fontSize: 15 }} > Temps de préparation : {mealInfos["readyInMinutes"]} min </Text>
            <Text style={{...tw `px-3`, fontSize: 15 }} > Coût de préparation : {mealInfos["pricePerServing"]} $ </Text>
            <Text style={{...tw `px-3`, fontSize: 15 }} > Apport kcal : 1500 kcal </Text>
            <Text style={{...tw `px-3`, fontSize: 15 }} > Apport protéines : 20 g </Text>
            <Text style={{...tw `px-3`, fontSize: 15 }} > Apport glucides : 20 g </Text>
            <Text style={{...tw `px-3`, fontSize: 15 }} > Apport lipides : 20 g </Text>

        </View>

    </View>
}