import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';

const App = () => {
  return (
    <Login/>
  );
}

registerRootComponent(App);
export default App;
