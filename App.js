import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { LogBox } from 'react-native';
import Toast from 'react-native-toast-message';
//Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

//Context API
import Auth from './Context/store/Auth';


// Screen

import Header from './Shared/Header';

import { NavigationContainer } from '@react-navigation/native'

// Navigators
import Main from './Navigators/Main';


LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>

  );
}

