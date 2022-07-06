import { View, Text } from "react-native"

import tw from 'twrnc';
import Navbar from "../components/Navbar"
import navbarTabs from "../datas/navbarTabs";
import MealPrevLeft from "../components/MealPrevLeft";
import MealPrevRigth from "../components/MealPrevRigth";

export default () => {
    return <View>
        <Navbar tabs = {navbarTabs}></Navbar>
        <View style = { tw`flex flex-row` }>
            <MealPrevLeft></MealPrevLeft>
            <MealPrevRigth></MealPrevRigth>
        </View>
    </View>
}