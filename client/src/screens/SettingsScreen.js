import { View } from "react-native"
import Navbar from "../components/Navbar"
import navbarTabs from "../datas/navbarTabs"

export default () => {
    return <View>
        <Navbar tabs = { navbarTabs }/>
    </View>
}