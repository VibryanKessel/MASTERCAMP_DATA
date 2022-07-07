import { View, Text, Image, ScrollView } from "react-native"

import tw from 'twrnc';
import previewMeal from "../datas/previewMeal";


export default () => {
    return <View style={tw`flex flex-col w-1/3 h-full`}>
            <View style={{...tw` w-full h-2/3`}} >
                <Image
                    style={tw `object-cover h-full w-full`}
                    source={{
                        uri: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
                    }}
                />
            </View>
            <ScrollView style={{...tw` w-full h-30 px-20`}} >
                <Text style={{...tw ``}} > Temps de préparation : {previewMeal["readyInMinutes"]} min </Text>
                <Text style={{...tw ``}} > Coût de préparation : {previewMeal["pricePerServing"]} $ </Text>
                <Text style={{...tw ``}} > Apport kcal : 1500 kcal </Text>
                <Text style={{...tw ``}} > Apport protéines : 20 g </Text>
                <Text style={{...tw ``}} > Apport glucides : 20 g </Text>
                <Text style={{...tw ``}} > Apport lipides : 20 g </Text>
            </ScrollView>

    </View>
}