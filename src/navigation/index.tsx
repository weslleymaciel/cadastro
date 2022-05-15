import React, { useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '../modules';
import { Stacks } from '../utils/enums';
import { PublicStack } from './stacks';

const MainStack = createStackNavigator();

type Props = {
  setNavigationTop: (navigatorRef: NavigationContainerRef) => void;
};

export const Navigation: React.FC<Props> = ({ setNavigationTop }) => {
  const routeNameRef = useRef<any>();

  const getActiveRouteName = (
    state: NavigationState | PartialState<NavigationState>,
  ): string => {
    if (state.index != null) {
      const route = state.routes[state.index];
      if (route.state) {
        return getActiveRouteName(route.state);
      }
      return route.name;
    }
    return '';
  };

  const onNavigationStateChange = (state?: NavigationState) => {
    if (state) {
      const currentRouteName = getActiveRouteName(state);
      routeNameRef.current = currentRouteName;
    }
  };

  return (
    <NavigationContainer
      ref={setNavigationTop}
      onStateChange={onNavigationStateChange}
    >
      <MainStack.Navigator
        headerMode="none"
        initialRouteName={Stacks.PUBLIC}
        screenOptions={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        <MainStack.Screen name={Stacks.PUBLIC} component={PublicStack} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
