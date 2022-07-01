import { Text, View } from "react-native"
import { IconButton } from "react-native-paper"
import tw from "twrnc"

export default ({ content }) => {
    return(
        <View style = { tw`flex flex-row my-3 p-2 justify-between` }>
            <IconButton
                style = { tw`self-center bg-orange-500` }
                icon = "arrow-left-circle"
                onPress={ ()=>{} }
            />
            <View style = { tw`flex flex-row border-2 py-2 h-full w-5/6 overflow-hidden` }>
            {    
                content.map(
                    (el,idx) => 
                    <View
                        style = {tw`p-5 rounded bg-slate-100 h-30 w-1/3 mx-1`}
                        key = { idx }
                    >
                        <Text style = { tw`text-center text-xl font-bold` }>{ el }</Text>
                    </View>
                )
            }
            </View>
            <IconButton
                style = { tw`self-center bg-orange-500` }
                icon = "arrow-right-circle"
                onPress={ ()=>{} }
            />
        </View>
    )
}