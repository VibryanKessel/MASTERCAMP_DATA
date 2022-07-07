import axios from "axios"
import { useState, useEffect} from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux"
import tw from "twrnc"
import DietDetails from "../components/DietDetails"
import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import navbarTabs from "../datas/navbarTabs"


export default () => {
    const [detailsHidden,setDetailsVisibility] = useState(true)
    const [dietId,setDietId] = useState()
    const [diets, setDiets] = useState(null);
    const session = useSelector( state => state.session )
    useEffect(() => {
        async function getDiets() {
            if (diets == null) {
                const res = await axios.get(`http://localhost:5000/diet/${session.id}`);
                setDiets(res.data["results"]);
            }
        }
        getDiets();
    }, [diets]);

    console.log(diets);
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
                                                                setDetailsVisibility(false)
                                                                // setDietId(item.idRegime)
                                                            }    
                                                    }
                                        >
                                            <View style = {tw`h-full w-1/4`}>
                                                <Image style = {{height : '100%',width : '100%'}} source = { require('../../assets/logo.jpeg') }/>
                                            </View>
                                            <View style = {tw`h-full flex flex-col w-3/4`}>
                                                <Text style = {tw`uppercase font-bold px-20 py-2 h-1/2 w-full`}>Regime numero : {item.idRegime}</Text>
                                                <View
                                                    style = { tw`flex flex-row h-1/6` }
                                                >
                                                    <Text style = {tw`uppercase font-bold px-20 py-2 w-1/2`}>Ajout calorique journalier : {item.ajoutCalorieJournalier}</Text>
                                                    <Text style = {tw`uppercase font-bold px-20 py-2 w-1/2`}>Rythme d'activité : {item.rythmeActivite}</Text>
                                                </View>
                                            
                                            </View>
                                        </TouchableOpacity>
                    }
                />
                {
                    (detailsHidden)?<></>:
                    <DietDetails style={ tw`w-1/5 border-orange-500` }/>
                }
            </View>
        </View>    
    )
}