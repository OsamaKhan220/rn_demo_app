import React from 'react';
import HomeScreen from './screens/HomeScreen';
import QRScreen from './screens/QRScreen';
import CalendarScreen from './screens/CalendarScreen';
import UIScreen from './screens/UIScreen';
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
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="UIScreen" component={UIScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
