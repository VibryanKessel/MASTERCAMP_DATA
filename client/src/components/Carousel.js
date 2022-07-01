import { Text, View , Image} from "react-native"
import { IconButton } from "react-native-paper"
import tw from "twrnc"

export default ({ content }) => {
    return(
        <View style = { tw`flex flex-row h-2/3 my-3 p-2 justify-between` }>
            <IconButton
                style = { tw`self-center bg-orange-500 ` }
                icon = "arrow-left-circle"
                onPress={ ()=>{} }
            />
            <View style = { tw`flex flex-row border-2 h-2/3 py-2 h-full w-5/6 overflow-hidden` }>
            {    
                content.map(
                    (el,idx) => 
                    <View
                        style = {tw`p-5 rounded bg-slate-100 h-30 w-1/3 mx-1`}
                        key = { idx }
                    >
                        <Text style = { tw`text-center text-xl font-bold` }>{ el }</Text>
                        <Image
                            style = {{
                                width: 80,
                                height: 80,
                            }}
                            source={{
                            uri: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
                            }}
                        />
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