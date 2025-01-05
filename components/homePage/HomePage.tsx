import React from 'react'
import { Button, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Post from './Post'
// import BottomTap from '../../BottomTap'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type'

type HomePageNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type HomePageProps = {
  navigation: HomePageNavigationProp;
};

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 5 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" 
          showsVerticalScrollIndicator = {false} 
          style={{ height: '100%', 
            backgroundColor: '#C0C0C0'
      }}>
        <CreatePost/>
        <Stories/>
        <Button
          title="Friends"
          onPress={() => navigation.navigate('Friends')} // Điều hướng đến màn hình "Details"
        />
        <Post/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage;