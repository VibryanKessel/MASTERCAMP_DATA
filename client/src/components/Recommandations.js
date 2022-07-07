import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity } from "react-native"
import tw from "twrnc"

function reduceStringLen( str ){
    return (str.length <= 25)? str : str.slice(0,21)+'...'
}

export default ( {content, onPressItem} ) => {
    

    return (
        <FlatList 
            numColumns={10}
            style = { tw`h-70` }
            keyExtractor = { (item) => item.id }
            data = { content }
            renderItem = { 
                ( { item } ) => <TouchableOpacity style = { tw`flex flex-col w-1/9` }
                                    onPress = {
                                        () => {
                                            onPressItem(item.id);
                                        }
                                    }
                                >
                                    <Text>{ reduceStringLen(item.title) }</Text>
                                    <Image 
                                        style = {{
                                            width: 80,
                                            height: 80,
                                        }}
                                        source={ {uri : item.image}}
                                    />
                            </TouchableOpacity>
             }
        />
    )
}