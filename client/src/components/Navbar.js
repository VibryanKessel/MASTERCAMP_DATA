import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc"

export default ({ tabs }) => {
    const dispatch = useDispatch();
    const logOut = () => dispatch({ type:"LOGOUT"})
    const navigation = useNavigation();
    const user = useSelector( state => state.session)
    
    return (
        <View style = { tw`flex flex-row w-full p-5 border-b-2 border-gray-300` }>
            <View style = { tw`flex flex-row w-1/2` }>
                <Feather name = "user" size = { 40 } style = { tw`self-center text-orange-500 mr-2` }/>
                <Text style = { tw`self-center font-bold` }>{ user.nom }</Text>
            </View>
            {
                tabs.map(
                    (tab , idx) => <TouchableOpacity 
                                        key = { idx }
                                        style = { tw`flex flex-col w-1/7` }
                                        onPress = { () => navigation.navigate(tab.name) }
                                    >
                                        <Feather name = { tab.iconName } size={24} style = { tw`self-center text-orange-500` }/>
                                        <Text style = { tw`self-center` }>{ tab.label }</Text>
                                    </TouchableOpacity>
                )
            }
            <View style = { tw`w-1/15 ` }>
                <TouchableOpacity 
                    style = { tw`flex flex-row self-center rounded bg-orange-500 px-3 py-2` }
                    onPress={() => { logOut() }}
                    >
                    <Feather name = "log-out" size = { 24 } style = { tw`self-center text-white mr-2` }/>
                    <Text style = { tw`self-center text-white` }>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}