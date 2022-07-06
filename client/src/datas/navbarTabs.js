import DashboardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


export default [
    {
        name : 'Home',
        component : HomeScreen,
        label : 'Home',
        iconName : 'home',
        active : true
    },
    {
        name : 'Dashboard',
        component : DashboardScreen,
        label : 'Dashboard',
        iconName : 'activity',
        active : false
    },
    {
        name : 'Settings',
        component : SettingsScreen,
        label : 'Settings',
        iconName : 'settings',
        active : false
    }
]