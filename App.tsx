import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './components/homePage/HomePage';
import FriendHub from './components/friends/FriendHub';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// Định nghĩa các tham số của Stack Navigator
export type RootStackParamList = {
  Home: undefined;
  Friends: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Friends" component={FriendHub} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
      // <SafeAreaView style={{ paddingHorizontal: 5 }}>
      //   <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ height: '100%', 
      //       backgroundColor: '#C0C0C0'
      //     }}>
      //     <HomePage />
      //   </ScrollView>
      // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
