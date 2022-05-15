/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainerRef } from '@react-navigation/native';
import {
  Provider,
  SafeAreaProvider,
  SplashScreen,
  ThemeProvider,
} from './modules';
import { Navigation } from './navigation';
import { NavigationActions } from './services';
import store from './stores';

const AppContainer = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <Provider rootStore={store}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navigation
            setNavigationTop={(navigatorRef: NavigationContainerRef): void =>
              NavigationActions.setTopLevelNavigator(navigatorRef)
            }
          />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppContainer;
