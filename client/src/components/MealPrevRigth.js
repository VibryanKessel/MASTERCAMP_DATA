import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native"

import tw from 'twrnc';
import previewMeal from "../datas/previewMeal";

export default (props) => {
    return <View style={{ ...tw`w-2/3 mx-7 p-5` }}>
        <View >
            <Text style={tw`font-bold text-2xl`} > Description </Text>
            <Text style={{ ...tw``, fontSize: 15 }} > {previewMeal["summary"]} </Text>
        </View>
        <View>

        </View>

        <View style={tw`py-5`}>
            <TouchableOpacity
                style={tw`w-35 h-15 flex flex-row self-center rounded bg-orange-500 px-10 py-2`}
                onPress={() => { }}
            >
                <Text style={tw`self-center text-white`}>Order</Text>
                <Feather name = "shopping-cart" size = { 20 } style = { tw`self-center text-white pl-2` }></Feather>
            </TouchableOpacity>
        </View>
    </View>
}