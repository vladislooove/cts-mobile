// Libs
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Store
import store from './store';

// Screens
import screens from './configs/screens';

// Services
import navigationService from './services/navigation';

const Stack = createStackNavigator();

export default function Application(): ReactElement {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationService.ref}>
        <Stack.Navigator>
          {Object.entries(screens).map(([name, props]) => (
            <Stack.Screen name={name} key={name} {...props} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
