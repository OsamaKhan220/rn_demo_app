import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import QRScreen from './src/screens/QRScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import UIScreen from './src/screens/UIScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6b86f3',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="QRScreen"
          options={{title: 'Scan QR'}}
          component={QRScreen}
        />
        <Stack.Screen
          name="CalendarScreen"
          options={{title: 'Calendar'}}
          component={CalendarScreen}
        />
        <Stack.Screen
          name="UIScreen"
          options={{title: 'UI Page'}}
          component={UIScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
