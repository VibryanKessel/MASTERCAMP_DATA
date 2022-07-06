import axios from "axios"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"
import Navbar from "../components/Navbar"
import SideSection from "../components/SideSection"
import navbarTabs from "../datas/navbarTabs"

export default () => {
    const diets = async () => {
        const response = await axios.get("http://localhost:5000/diet")
        console.log(response)
        // if(response.status === 200){
        //     setMsg({text : "Vous etes connecté(e)",err :false})
        //     setTimeout(
        //         dispatch( {type:"LOGIN",user:user} ),5000            
        //     )
        // }else{
        //     setMsg({text :"User introuvable !",err : true})
//         }
// }
    }
    return (
        <View style = { tw`h-full overflow-hidden` }>
            <Navbar tabs= { navbarTabs }/>
            <View
                style = { tw`h-full flex flex-row` }
            >
                <SideSection
                    style={ tw`w-1/5` }
                />
                <View
                    style = { tw`w-4/5 flex flex-col` }
                >
                <TouchableOpacity
                onPress={
                    
                    ()=>diets()
                }
                >
                <Text>hizdbfir</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>    
    )
}