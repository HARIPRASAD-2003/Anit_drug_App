import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/HomePage';
import Login from './Components/Login';
import SignUp from './Components/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ route, navigation }) => {
            const title =
              route.params?.headerTitle ||
              route.name;

            return (
              <Navbar
                title={title}
                showBackButton={route.name !== 'Home'}
                navigation={navigation}
              />
            );
          },
        }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
