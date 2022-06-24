import { registerRootComponent } from 'expo';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/reducers';
import AppScreen from './src/screens/AppScreen';

const App = () => {
  const session = null
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
          <StatusBar animated={true} />
        <AppScreen/>
      </PersistGate>
    </Provider>
  )
}
registerRootComponent(App);
export default App;
    