// Libs
import React, { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Store
import store from './store';

// Screens
import screens from './configs/routing/config';

// Services
import navigationService from './services/navigation';

// Containers
import App from './containers/App';

// Styles
import { COLOR_SECONDARY } from './styles/constants';

const Stack = createStackNavigator();

export default function Application(): ReactElement {
  return (
    <Provider store={store}>
      <App>
        <StatusBar backgroundColor={COLOR_SECONDARY} />
        <NavigationContainer ref={navigationService.ref}>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            {Object.entries(screens).map(([name, props]) => (
              <Stack.Screen name={name} key={name} {...props} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </App>
    </Provider>
  );
}
