import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './components/homePage/HomePage';
import FriendHub from './components/friends/FriendHub';
import MyFriends from './components/friends/MyFriends';
import SentRequest from './components/friends/SentRequest';
import AllFriendRequests from './components/friends/AllFriendRequests';
import { RootStackParamList } from './type';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Friends" component={FriendHub} />
        <Stack.Screen name="MyFriends" component={MyFriends} />
        <Stack.Screen name="SentRequest" component={SentRequest} />
        <Stack.Screen name="AllFriendRequests" component={AllFriendRequests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
