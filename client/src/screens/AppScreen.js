import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import Login from '../components/Login';
import Register from '../components/Register';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        )
    }  
</NavigationContainer> 
}