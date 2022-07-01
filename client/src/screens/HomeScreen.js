import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux"
import tw from "twrnc";
import axios from "axios";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default () => {
    const dispatch = useDispatch();
    const logOut = () => dispatch({ type:"LOGOUT"})
    const [selectedCategory, setCategory] = useState();
    const Topcategories = [
        "Breavet",
        "Liclangue",
        "Preaquat",
        "Ibburine",
        "Eolo",
        "Guarana Monstrueux",
        "Abricot Aigre",
        "Ail Oriental",
        "Clémentine D'Orage",
        "Tamarin Tranquille"
        ]
    const categories = [
        "Breavet",
        "Liclangue",
        "Preaquat",
        "Ibburine",
        "Eolo",
        "Guarana Monstrueux",
        "Abricot Aigre",
        "Ail Oriental",
        "Clémentine D'Orage",
        "Tamarin Tranquille"
    ]
    return <View>
        <View style = { tw`mx-5 self-center` }>
            <Text style = { tw` bg-gray-300 p-5 my-5 rounded-md` }>
                Labore est laboris est veniam aliquip pariatur. Ut velit exercitation ad et. Aliqua eu aute et sit cillum quis anim occaecat nisi consectetur aliquip quis aute elit.
                Exercitation cupidatat ea cupidatat culpa duis amet consequat. Qui elit dolor dolore aute reprehenderit incididunt. Voluptate aliqua voluptate aliqua velit ullamco incididunt consequat. Eu adipisicing cillum ipsum ex excepteur ex proident occaecat velit veniam ipsum esse officia sunt. Veniam laborum ad consequat proident nostrud adipisicing pariatur eu officia. Eu eiusmod culpa ea fugiat nisi esse nulla ut et laboris. Commodo aliqua amet aliqua ipsum reprehenderit commodo esse.
                <Text style={tw`font-bold text-lg`}>
                    {"\n"}Getting started with a {' '}
                    <TouchableOpacity
                        style={tw`underline text-blue-500`}
                    >
                        <Text>DIET</Text>
                    </TouchableOpacity>
                    ...
                </Text>
            </Text>
        </View>
        <View style = { tw`self-center  p-13 bg-gray-300 rounded-md` }>
            <View style = { tw`flex flex-row justify-around bg-gray-500 p-2` }>
                <Picker
                    style = { tw`bg-orange-500 h-7 w-1/3  text-center text-lg` }
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                    }>
                    {
                        categories.map(
                            (el,idx) => {
                                return <Picker.Item
                                key = {idx} 
                                style = { tw`bg-slate-100 text-center text-lg` }
                                label= { el } value= { el } 
                                />
                            }
                        )
                    }
                </Picker>
                <View style={tw`h-7 flex flex-row w-1/2 bg-red-500`}>
                    <TextInput
                        style={tw`h-7 text-center w-2/3`}
                        placeholder="Que recherchez-vous ?"
                    />
                    <TouchableOpacity style={tw`h-7 bg-orange-500 w-1/3`}>
                        <Text style={tw`font-bold text-blue-500 text-sm text-center py-1`}>
                            SEARCH
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={tw`border-b-2 my-3`}>
                <Text style={tw`font-bold text-lg`}>
                    TOP CATEGORIES
                </Text>
            </View>
            <Carousel content = { Topcategories }/>
        {/* <TouchableOpacity 
            onPress={() => { logOut() }}
            style = {tw`shadow-lg shadow-gray-500/50 border-2 border-orange-500 bg-orange-500 font-black h-10 rounded`}
        >
            <Text style = { tw` text-gray-100 text-xl text-center font-bold`}>
                LOG OUT
            </Text>
        </TouchableOpacity> */}
            <View style = { tw`border-b-2 my-3` }>
                <Text style = { tw`font-bold text-lg` }>
                    TRENDY MEALS
                </Text>
            </View>
            <Carousel content = { categories }/>
        </View>
        <Footer/>
    </View>
}