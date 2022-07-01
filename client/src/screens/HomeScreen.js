import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux"
import tw from "twrnc";
import axios from "axios";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Recommandations from "../components/Recommandations";

export default () => {
    const dispatch = useDispatch();
    const logOut = () => dispatch({ type:"LOGOUT"})
    const [selectedCategory, setCategory] = useState();
    const [showTrendy, setTrendyVisibility] = useState(true)
    
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
        "Trendy",
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
    const recommandations = [
        {
            id: 649722,
            title: 'Lemon Pepper Steak',
            image: 'https://spoonacular.com/recipeImages/649722-312x231.jpg'
          },
          {
            id: 636436,
            title: 'Bulgur Pilaf With Green Lentils, Served With Caramelized Onions -Mercimekli Bulgur Pilavi',
            image: 'https://spoonacular.com/recipeImages/636436-312x231.jpg'
          },
          {
            id: 661522,
            title: 'Steak With Blue Cheese Sherry Sauce',
            image: 'https://spoonacular.com/recipeImages/661522-312x231.jpg'
          },
          {
            id: 662744,
            title: 'Taco Egg Roll',
            image: 'https://spoonacular.com/recipeImages/662744-312x231.jpg'
          },
          {
            id: 658134,
            title: 'Redneck Breakfast on a Croissant',
            image: 'https://spoonacular.com/recipeImages/658134-312x231.jpg'
          },
          {
            id: 1021898,
            title: 'Double Chocolate Chip Muffins',
            image: 'https://spoonacular.com/recipeImages/1021898-312x231.png'
          },
          {
            id: 631830,
            title: '10 Minute Brownies',
            image: 'https://spoonacular.com/recipeImages/631830-312x231.jpg'
          },
          {
            id: 639477,
            title: 'Cinnamon Roll Oatmeal',
            image: 'https://spoonacular.com/recipeImages/639477-312x231.jpg'
          },
          {
            id: 664448,
            title: 'Vegan Lemon Cookies',
            image: 'https://spoonacular.com/recipeImages/664448-312x231.jpg'
          },
          {
            id: 664392,
            title: 'Vegan Banana Nut Muffins',
            image: 'https://spoonacular.com/recipeImages/664392-312x231.jpg'
          },
          {
            id: 673425,
            title: 'Peanut Butter and Jelly Granola Bars',
            image: 'https://spoonacular.com/recipeImages/673425-312x231.jpg'
          },
          {
            id: 647261,
            title: 'Honey Nut Raspberry Baked Oatmeal',
            image: 'https://spoonacular.com/recipeImages/647261-312x231.jpg'
          },
          {
            id: 646361,
            title: 'Hawaiian Cookie Tarts',
            image: 'https://spoonacular.com/recipeImages/646361-312x231.jpg'
          },
          {
            id: 652576,
            title: "Mulligatawny - Quick, Curried Soup Using Trader Joe's Ingredients",
            image: 'https://spoonacular.com/recipeImages/652576-312x231.jpg'
          },
          {
            id: 635413,
            title: 'Blueberry Banana Bread',
            image: 'https://spoonacular.com/recipeImages/635413-312x231.jpg'
          },
          {
            id: 1165029,
            title: 'Instant Pot Curried Lentil Soup',
            image: 'https://spoonacular.com/recipeImages/1165029-312x231.jpg'
          },
          {
            id: 658068,
            title: 'Red Lentil Curry (Vegan, Gluten Free)',
            image: 'https://spoonacular.com/recipeImages/658068-312x231.jpg'
          },
          {
            id: 650871,
            title: 'Maple & Curry Acorn Squash',
            image: 'https://spoonacular.com/recipeImages/650871-312x231.jpg'
          },
          {
            id: 624304,
            title: 'set dosa recipe',
            image: 'https://spoonacular.com/recipeImages/624304-312x231.jpg'
          },
          {
            id: 636436,
            title: 'Bulgur Pilaf With Green Lentils, Served With Caramelized Onions -Mercimekli Bulgur Pilavi',
            image: 'https://spoonacular.com/recipeImages/636436-312x231.jpg'
          },
          {
            id: 652754,
            title: 'Mussels In Curry Sauce',
            image: 'https://spoonacular.com/recipeImages/652754-312x231.jpg'
          },
          {
            id: 661740,
            title: 'Strawberry and Banana Lassi',
            image: 'https://spoonacular.com/recipeImages/661740-312x231.jpg'
          },
          {
            id: 633649,
            title: 'Baked Indian Spice Chickpea',
            image: 'https://spoonacular.com/recipeImages/633649-312x231.jpg'
          },
          {
            id: 649196,
            title: 'Lamb Chop Fry',
            image: 'https://spoonacular.com/recipeImages/649196-312x231.jpg'
          },
          {
            id: 157995,
            title: 'Curried Cracker-Coated Chicken',
            image: 'https://spoonacular.com/recipeImages/157995-312x231.jpg'
          },
          {
            id: 633338,
            title: 'Bacon Wrapped Filet Mignon',
            image: 'https://spoonacular.com/recipeImages/633338-312x231.jpg'
          },
          {
            id: 665573,
            title: 'Yorkshire Pudding',
            image: 'https://spoonacular.com/recipeImages/665573-312x231.jpg'
          },
          {
            id: 647524,
            title: 'Hot Sliced Beef',
            image: 'https://spoonacular.com/recipeImages/647524-312x231.jpg'
          },
          {
            id: 665574,
            title: 'Yokshire Pudding',
            image: 'https://spoonacular.com/recipeImages/665574-312x231.jpg'
          },
          {
            id: 649722,
            title: 'Lemon Pepper Steak',
            image: 'https://spoonacular.com/recipeImages/649722-312x231.jpg'
          },
          {
            id: 661522,
            title: 'Steak With Blue Cheese Sherry Sauce',
            image: 'https://spoonacular.com/recipeImages/661522-312x231.jpg'
          },
          {
            id: 662744,
            title: 'Taco Egg Roll',
            image: 'https://spoonacular.com/recipeImages/662744-312x231.jpg'
          },
          {
            id: 658134,
            title: 'Redneck Breakfast on a Croissant',
            image: 'https://spoonacular.com/recipeImages/658134-312x231.jpg'
          },
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
                {
                (showTrendy)?"TRENDY MEALS":"RECOMMENDED MEALS"
                }
                </Text>
            </View>
        {
            (showTrendy)?
            <Carousel content = { categories }/>:
            <Recommandations content={recommandations}/>
        }
        </View>
        <Footer/>
    </View>
}