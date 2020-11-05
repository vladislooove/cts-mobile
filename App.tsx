// Libs
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Store
import store from './store';

// Screens
import screens from './configs/screens';

const Stack = createStackNavigator();

export default function Application(): ReactElement {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {Object.entries(screens).map(([name, component]) => (
            <Stack.Screen name={name} component={component} key={name} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
