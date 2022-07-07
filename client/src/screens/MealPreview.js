import React from 'react';
import { View, Text } from "react-native"

import tw from 'twrnc';
import Navbar from "../components/Navbar"
import navbarTabs from "../datas/navbarTabs";
import MealPrevLeft from "../components/MealPrevLeft";
import MealPrevRigth from "../components/MealPrevRigth";
import { IconButton } from "react-native-paper";

export default ({children}) => {
    const Children = React.Children.toArray(children)
    
    return (
        <View style = { tw`h-full bg-black/50` }>
            <View style = { tw`flex flex-col bg-gray-300 h-1/2` }>
                {Children.map( child => child)}
                <View style = { tw`flex flex-row bg-gray-300 h-full` }>
                    <MealPrevLeft></MealPrevLeft>
                    <MealPrevRigth></MealPrevRigth>
                </View>
            </View>
        </View>
    )
}