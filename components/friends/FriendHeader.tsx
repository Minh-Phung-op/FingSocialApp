import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './FriendHeaderStyles'
import { FriendHubProps } from './FriendHub';

const FriendHeader: React.FC<FriendHubProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>
        <Pressable 
          style={({ pressed }) => [
            styles.button, 
            { backgroundColor: pressed ? '#42b7f5' : '#0099cc' }  // Màu sáng khi nhấn
          ]}
      >
        <Text style={styles.buttonText} onPress={() => navigation.navigate('SentRequest')}>Lời mời đã gửi</Text>
      </Pressable>
        <Pressable 
          style={({ pressed }) => [
            styles.button, 
            { backgroundColor: pressed ? '#42b7f5' : '#0099cc' }  // Màu sáng khi nhấn
          ]}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('MyFriends')}>Bạn bè</Text>
        </Pressable>
      </View>
      <View style={styles.rightHeader}>
      <Pressable 
          style={({ pressed }) => [
            styles.button, 
            { backgroundColor: pressed ? '#42b7f5' : '#0099cc' }  // Màu sáng khi nhấn
          ]}
      >
        <Text style={styles.buttonText}>O</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default FriendHeader;