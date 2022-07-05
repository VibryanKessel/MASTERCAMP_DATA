import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, TextInput,Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import Autocomplete from 'react-native-dropdown-autocomplete-textinput';
import tw from "twrnc";

function SingleInput ({ textInputStyle, validated = false, active = true, value, onChangeText,onChangeActive, data}){
    
    return (
        <View>            
            {
                (validated)?
                    (active)?
                        <View style = { tw`flex flex-row` }>        
                            <TextInput
                                style = { tw`border-2 font-bold w-9/10` }
                                value = { value }
                                editable = { false }
                                selectTextOnFocus = { false }
                                />
                            <IconButton
                                style = { tw`self-center w-1/10` }
                                icon = "close-circle"
                                onPress={ () => {onChangeActive(false)} }
                                />
                        </View>:
                        <></>:
                    <Autocomplete
                        data={data}
                        textInputStyle = { {...tw`w-full my-3`,...textInputStyle}}
                        displayKey = "name"
                        onSelect={(value) => onChangeText(value.name)}
                        flatListProps={{
                            keyExtractor: item => item.id,
                            renderItem: ({ item }) => <Text>{ item.name }</Text>,
                    }}
                />
            }
        </View>
    )
}

export default ({ Inputs, onChangeInputs, inputsData }) => {
    const [inputs, setInputs] = useState(Inputs)
    const setText = text => {   
                                const copy = inputs
                                copy[copy.length - 1].text = text
                                setInputs( [...copy])
                            }   
    const setActive = (id) => {
                                const copy = inputs
                                copy[id].active = false
                                setInputs( [...copy] )
    }
    const addInput = () => {
                                const copy = inputs
                                if(copy[copy.length - 1].text !== '' && copy[copy.length - 1].text !== 'None'){
                                    copy[copy.length - 1].validated = true
                                    setInputs( [...copy,{id : inputs.length,validated : false,active : true, text : ''}])
                                    onChangeInputs(inputs)
                                }
                            }   
    return( 
        <View style = { tw`flex flex-row` }>         
            <FlatList 
                style = { tw`flex flex-col border-2 py-5 px-2 h-30` }
                // numColumns={1}
                keyExtractor = { (item) => item.id }
                data = { inputs }
                extraData = { inputs }
                renderItem = { 
                    ( { item } ) => <SingleInput 
                                        active = { item.active }
                                        data = { inputsData }
                                        validated = { item.validated }
                                        value = { item.text }
                                        onChangeActive = { () => setActive(item.id)}
                                        onChangeText={ (text) => setText(text)}
                                    />
                }
            />
            <TouchableOpacity
                style = { tw`self-center rounded bg-orange-500 p-2` }
                onPress = { () => { addInput() }}
            >
                <Feather name = "plus-circle" size = { 24 } style = { tw`self-center text-white` }/>
            </TouchableOpacity>
        </View>
    )
}