import { View, Text, Image } from "react-native"

import tw from 'twrnc';
import previewMeal from "../datas/previewMeal";


export default () => {
    return <View style={tw`w-1/3 h-full`}>
        <View style={{...tw` w-full h-2/3`,margin:20}} >
            <Image
                style={tw `object-cover h-full w-full`}
                source={{
                    uri: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
                }}
            />
        </View>
        <View style={{...tw` w-full h-1/3`,margin:20}} >

            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Temps de préparation : {previewMeal["readyInMinutes"]} min </Text>
            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Coût de préparation : {previewMeal["pricePerServing"]} $ </Text>
            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Apport kcal : 1500 kcal </Text>
            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Apport protéines : 20 g </Text>
            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Apport glucides : 20 g </Text>
            <Text style={{...tw `my-2 px-3`, fontSize: 15 }} > Apport lipides : 20 g </Text>

        </View>

    </View>
}