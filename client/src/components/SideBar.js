import { Feather } from "@expo/vector-icons"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

export default ({ style }) => {
    return( 
        <View
            style = { {...tw`flex flex-col h-full border-r-2 border-gray-300`,...style} }
        >
                <TouchableOpacity
                    style = { tw`flex flex-row self-center h-1/5 pl-5 py-10 w-full border-b-2 border-gray-300` }
                >
                    <Text
                        style = { tw` self-center font-bold w-8/10` }
                    >
                        Current diet
                    </Text>
                    <Feather name = "chevron-right" size={24} style = { tw`self-center  w-1/10 text-orange-500` }/>
                </TouchableOpacity>
                <TouchableOpacity
                    style = { tw`flex flex-row self-center h-2/5 pl-5 py-10 w-full border-b-2 border-t-2 border-gray-300` }
                >
                    <Text
                        style = { tw` self-center font-bold w-8/10` }
                    >
                        Past diets
                    </Text>
                    <Feather name = "chevron-right" size={24} style = { tw`self-center  w-1/10 text-orange-500` }/>
                </TouchableOpacity>
                <View
                    style = { tw`h-3/5` }
                >

                </View>
        </View>
    )
}