import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/components/Register';

const App = () => {
  return (
    <Register/>
  );
}

registerRootComponent(App);
export default App;
