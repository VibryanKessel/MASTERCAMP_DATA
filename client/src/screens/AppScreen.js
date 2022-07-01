import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import tw from 'twrnc';
import { Feather } from '@expo/vector-icons'

import Login from '../components/Login';
import Register from '../components/Register';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const Tabs = [
    {
        name : 'Home',
        component : HomeScreen,
        label : 'Home',
        iconName : 'home'
    },
    {
        name : 'Dashboard',
        component : SettingsScreen,
        label : 'Dashboard',
        iconName : 'activity'
    },
    {
        name : 'Profile',
        component : SettingsScreen,
        label : 'Profile',
        iconName : 'settings'
    },
    {
        name : 'Settings',
        component : SettingsScreen,
        label : 'Settings',
        iconName : 'settings'
    }
]

export default () => {
    const session = useSelector( state => state.session )
    
    return <NavigationContainer>
    {  
        (session === null)? 
        (
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen name="Sign In" component={Login} />
                <Stack.Screen name="Sign Up" component={Register} />
            </Stack.Navigator>
        ):
        (
            <Tab.Navigator screenOptions={{ headerShown: false}}>
                {
                    Tabs.map(
                        (tab,idx) => {
                            return <Tab.Screen 
                                key = { idx }
                                name= { tab.name } 
                                component={tab.component}
                                options={{
                                tabBarLabel: tab.label,
                                tabBarIcon: ({ color, size }) => (
                                    <Feather name = { tab.iconName } size={24} style = { tw`text-blue-500` }/>
                                ),
                                }}
                          />
                        }
                    )
                }
            </Tab.Navigator>
        )
    }  
</NavigationContainer> 
}