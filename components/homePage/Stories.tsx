import React from 'react'
import { FlatList, View, Image, Text, ScrollView, Button, Pressable } from 'react-native'
import styles from './StoryStyles'

interface Story{
    id: string,
    imageUrl: string,
    userName: string,
}
const storyData: Story[] = [
    { id: '1', imageUrl: 'https://via.placeholder.com/100x100', userName: 'John Doe' },
    { id: '2', imageUrl: 'https://via.placeholder.com/100x100', userName: 'Jane Smith' },
    // Add more story data
];
interface RenderStoryProps{
    item: Story;
}

export default function Stories() {
  return (
    // <View style={styles.container}>
      <ScrollView style={styles.container} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <Image style={styles.myStoryImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} alt='story Image'/>
          <View style={styles.myBottomStoryCard}></View>
          <View style={styles.createStory}>
            <Text style={{ fontSize: 22, color: 'white' }}>+</Text>

          </View>
        </View>

        <View style={styles.card}>
          <Image style={styles.userStoryImage} 
              source={{ uri: 'https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg' }}
              resizeMode="cover"/>
          <Image style={styles.storyImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} alt='story Image'/>
          <Text style={styles.name}>Hello new</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.userStoryImage} 
              source={{ uri: 'https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg' }}
              resizeMode="cover"/>
          <Image style={styles.storyImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} alt='story Image'/>
          <Text style={styles.name}>Hello new</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.userStoryImage}
              source={{ uri: 'https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg' }}
              resizeMode="cover"/>
          <Image style={styles.storyImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} alt='story Image'/>
          <Text style={styles.name}>Hello new</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.userStoryImage} 
              source={{ uri: 'https://themeisle.com/blog/wp-content/uploads/2024/06/Online-Image-Optimizer-Test-Image-JPG-Version.jpeg' }}
              resizeMode="cover"/>
          <Image style={styles.storyImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} alt='story Image'/>
          <Text style={styles.name}>Hello new</Text>
        </View>

      </ScrollView>

    // </View>
  )
}
