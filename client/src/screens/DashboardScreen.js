import axios from "axios"
import { useState } from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"
import DietDetails from "../components/DietDetails"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import navbarTabs from "../datas/navbarTabs"


export default () => {
    const [detailsHidden,setDetailsVisibility] = useState(true)
    const [dietId,setDietId] = useState()
    const diets = [
		{
			"idRegime": 17,
			"dateDebut": "2022-03-08T23:00:00.000Z",
			"periodeRegime": 30,
			"ajoutCalorieJournalier": 481,
			"rythmeActivite": 3
		},
		{
			"idRegime": 27,
			"dateDebut": "2021-07-19T22:00:00.000Z",
			"periodeRegime": 35,
			"ajoutCalorieJournalier": 300,
			"rythmeActivite": 2
		}
	]
    return (
        <View style = { tw`h-full overflow-hidden` }>
            <Navbar tabs= { navbarTabs }/>
            <View
                style = { tw`h-full flex flex-row` }
            >
                <SideBar
                    style={ tw`w-1/5` }
                />
                <FlatList
                    numColumns={1}
                    style = { tw`flex flex-col w-2/5` }
                    keyExtractor = { (item) => item.idRegime }
                    data = { diets }
                    renderItem = { 
                        ( { item } ) => <TouchableOpacity
                                            style = { tw`my-3 mx-1 h-80 flex flex-row rounded border-solid border-2 border-orange-500` }
                                            onPress = { () =>{ 
                                                                setDetailsVisibility(true)
                                                                // setDietId(item.idRegime)
                                                            }    
                                                    }
                                        >
                                            <View style = {tw`h-full w-1/4`}>
                                                <Image style = {{height : '100%',width : '100%'}} source = { require('../../assets/logo.jpeg') }/>
                                            </View>
                                            <View style = {tw`h-full flex flex-col w-3/4`}>
                                                <Text style = {tw`uppercase font-bold px-20 py-2 h-5/6 w-full`}>Regime numero : {item.idRegime}</Text>
                                                <View
                                                    style = { tw`flex flex-row h-1/6` }
                                                >
                                                    <Text style = {tw`uppercase font-bold px-20 py-2 w-1/2`}>Ajout calorique ournalier : {item.ajoutCalorieJournalier}</Text>
                                                    <Text style = {tw`uppercase font-bold px-20 py-2 w-1/2`}>Rythme d'activité : {item.rythmeActivite}</Text>
                                                </View>
                                            
                                            </View>
                                        </TouchableOpacity>
                    }
                />
                {
                    (detailsHidden)?<></>:
                    <DietDetails style={ tw`w-2/5 border-orange-500` }/>
                }
            </View>
        </View>    
    )
}