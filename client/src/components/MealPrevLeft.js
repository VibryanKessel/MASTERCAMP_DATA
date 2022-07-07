import { View, Text, Image, ScrollView } from "react-native"

import tw from 'twrnc';


export default ({mealInfos}) => {
    return <View style={tw`flex flex-col w-1/3 h-full`}>
            <View style={{...tw` w-full h-2/3`}} >
                <Image
                    style={tw `object-cover h-full w-full`}
                    source={{
                        uri: mealInfos["image"],
                    }}
                />
            </View>
            <ScrollView style={{...tw` w-full h-30 px-20`}} >
                <Text style={{...tw ``}} > Temps de préparation : {mealInfos["readyInMinutes"]} min </Text>
                <Text style={{...tw ``}} > Coût de préparation : {mealInfos["pricePerServing"]} $ </Text>
                <Text style={{...tw ``}} > Apport kcal : 1500 kcal </Text>
                <Text style={{...tw ``}} > Apport protéines : 20 g </Text>
                <Text style={{...tw ``}} > Apport glucides : 20 g </Text>
                <Text style={{...tw ``}} > Apport lipides : 20 g </Text>
            </ScrollView>

    </View>
}