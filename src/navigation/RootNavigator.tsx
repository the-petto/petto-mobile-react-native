import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogInScreen} from '../screens/LogInScreen';
import {SignUpScreen} from '../screens/SignUpScreen';
import {WalkListScreen} from '../screens/WalkListScreen';
import {WalkDetailScreen} from '../screens/WalkDetailScreen';
import {WalkFormScreen} from '../screens/WalkFormScreen';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="WalkListScreen" component={WalkListScreen} />
        <Stack.Screen name="WalkDetailScreen" component={WalkDetailScreen} />
        <Stack.Screen name="WalkFormScreen" component={WalkFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
