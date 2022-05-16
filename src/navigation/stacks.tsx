import React from 'react';
import { createStackNavigator } from '../modules';
import { SignUpScene, WelcomeScene } from '../scenes';
import { Routes } from '../utils/enums';

const Public = createStackNavigator<PublicStackParams>();

export const PublicStack = (): JSX.Element => (
  <Public.Navigator initialRouteName={Routes.WELCOME} headerMode="none">
    <Public.Screen name={Routes.WELCOME} component={WelcomeScene} />
    <Public.Screen name={Routes.SIGN_UP} component={SignUpScene} />
  </Public.Navigator>
);
