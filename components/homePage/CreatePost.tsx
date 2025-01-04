import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './CreatePostStyles'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Thư viện FontAwesome cho React Native
import { faImage, faHome } from '@fortawesome/free-solid-svg-icons';  // Import icon từ FontAwesome

export default function CreatePost() {
  return (
    <View style={styles.container}>
      <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}/>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text>Bạn đang nghĩ gì</Text>
      </TouchableOpacity>
      <FontAwesome6 name="file-image" size={30} color="#000" />
    </View>
  )
}
