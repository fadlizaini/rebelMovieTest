import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from '../screen/Detail';
import Home from '../screen/Home/Home';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="detail"
            component={Detail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
