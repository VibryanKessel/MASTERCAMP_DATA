import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button, TextInput } from "react-native-paper";
import tw from "twrnc";
import axios from "axios";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Recommandations from "../components/Recommandations";
import recommandations from "../datas/recommandations";
import Navbar from "../components/Navbar";

export default () => {
    const [selectedCategory, setCategory] = useState("Trendy");
    const [showTrendy, setTrendyVisibility] = useState(true)

    const categories = [
        "Trendy",
        "Cuisine algérienne",
        "Cuisine italienne",
        "Vegan",
        "Viandes",
        "Cuisine japonaise",
        "Curry",
    ]
    const Topcategories = [
        { title : "Cuisine algérienne",key : 1},
        { title : "Cuisine italienne",key : 2},
        { title : "Vegan",key : 3},
        { title : "Viandes",key : 4},
        { title : "Cuisine japonaise",key : 5},
        { title : "Curry",key : 6},
    ]
    const trendyMeals = [
        { title :"Pommes au four",key : 1},
        { title :"Petit salé aux lentilles",key : 2},
        { title :" Tarte aux fraises facile",key : 3},
        { title :"Croque-monsieur",key : 4},
        { title :"Aïoli",key : 5},
        { title :"Oeufs mimosa",key : 6},
    ]
    const bgImage = require("../../assets/logo.jpeg")
    

    return <View>
                        <ImageBackground source={bgImage} resizeMode="cover" style={ {...tw`flex-1 rotate-45 justify-center h-70 w-30 absolute left-0 top-80`} }/>
                <View style = { tw`bg-orange-500 flex-1 h-25 w-25 rounded-lg absolute rotate-45 bottom-70 right-0`}></View>
                <View style = { {...tw`bg-orange-500/90 rounded-full absolute right-20 top-50`,width : 100,height : 100} }></View>
                <View style = { {...tw`bg-orange-500/60 rounded-full absolute right-15 top-45`,width : 50,height : 50} }></View>
                

        <Navbar></Navbar>
        <View style = { tw`mx-5 w-9/10 self-center` }>
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
        <View style = { tw`self-center w-9/10 p-13 bg-gray-300 rounded-md` }>
            <View style = { tw`flex flex-row justify-around bg-gray-500 p-2` }>
                <Picker
                    style = { tw`bg-orange-500 h-7 w-1/3  text-center text-lg` }
                    selectedValue={selectedCategory}
                    onValueChange={(itemValue, itemIndex) =>{
                        setCategory(itemValue)
                        setTrendyVisibility( itemValue === "Trendy" )
                    }
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
        <View style = { tw`border-b-2 my-3` }>
                <Text style = { tw`font-bold text-lg` }>
                {
                (showTrendy)?"TRENDY MEALS":"RECOMMENDED MEALS"
                }
                </Text>
            </View>
        {
            (showTrendy)?
            <Carousel content = { trendyMeals }/>:
            <Recommandations content={recommandations}/>
        }
        </View>
        <Footer/>
    </View>
}