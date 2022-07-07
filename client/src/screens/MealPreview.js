import React from 'react';
import { useState, useEffect } from "react";

import { View, Text } from "react-native"

import tw from 'twrnc';
import MealPrevLeft from "../components/MealPrevLeft";
import MealPrevRigth from "../components/MealPrevRigth";
import { IconButton } from "react-native-paper";
import axios from 'axios';
import previeMeal from "../datas/previewMeal";


export default ({ children, id }) => {
    const Children = React.Children.toArray(children)

    const [mealInfos, setMealInfos] = useState(null);

    useEffect(() => {
        async function getMealInfos() {
            if (mealInfos == null) {
                const res = await axios.get(`http://localhost:5000/meal/${id}`);
                setMealInfos(res.data);
            }
        }
        getMealInfos();
    }, [mealInfos])


    return (
        <View style={tw`h-full bg-black/50`}>
            <View style={tw`flex flex-col bg-gray-300 h-8/10`}>
                {Children.map(child => child)}
                {
                    (mealInfos != null) ? (
                        <View style={tw`flex flex-row bg-gray-300 h-full`}>
                            <MealPrevLeft mealInfos={mealInfos}></MealPrevLeft>
                            <MealPrevRigth mealInfos={mealInfos} ></MealPrevRigth>
                        </View>
                    ):(<></>)
                }
            </View>
        </View>
    )
}