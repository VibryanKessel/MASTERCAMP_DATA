import { Image, Text, View } from "react-native"
import tw from "twrnc"

export default ( {content} ) => {
    return (
        <View style = { tw`grid grid-cols-4 gap-4` }>
            {
                content.map(
                    (el,idx) => <View key = { idx } style = { tw`flex flex-row` }>
                        <Text>{ el.title }</Text>
                        <Image source={{ uri: el.image }}/>
                    </View>
                )
            }
        </View>
    )
}