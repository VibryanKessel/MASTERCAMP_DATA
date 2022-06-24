import { Text, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import tw from "twrnc";

export default () => {
    const dispatch = useDispatch();
    const logOut = () => dispatch({ type:"LOGOUT"})
    
    return <View>
        <TouchableOpacity 
            onPress={() => { logOut() }}
            style = {tw`shadow-lg shadow-gray-500/50 border-2 border-orange-500 bg-orange-500 font-black h-10 rounded`}
        >
            <Text style = { tw` text-gray-100 text-xl text-center font-bold`}>
                LOG OUT
            </Text>
        </TouchableOpacity>
    </View>
}