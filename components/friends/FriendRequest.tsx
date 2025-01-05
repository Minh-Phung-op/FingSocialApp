import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './FriendRequestStyles'
import { FriendHubProps } from './FriendHub';

const FriendRequest: React.FC<FriendHubProps> = ({ navigation }) => {
  const [anyFriends, setAnyFriends] = useState(false);
  if (!anyFriends) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Chưa có lời mời kết bạn nào</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? '#DDDDDD' : 'transparent' }  // Màu sáng khi nhấn
            ]}>
            <Text style={{ color: '#3366CC' }} onPress={() => navigation.navigate('SentRequest')}>Lời mời đã gửi</Text>
          </Pressable>
        </View>
        <View style={styles.main}>
          <Image style={styles.noRequestImage} source={{ uri: 'https://www.clipartmax.com/png/middle/319-3196434_request-friend-request-icon-png.png' }} />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Lời mời kết bạn</Text>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#DDDDDD' : 'transparent' }  // Màu sáng khi nhấn
          ]}>
          <Text style={{ color: '#3366CC' }} onPress={() => navigation.navigate('AllFriendRequests')}>Xem tất cả</Text>
        </Pressable>
      </View>
      <View style={styles.main}>
        <View style={styles.card}>
          <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} />
          <View style={styles.content}>
            <Text style={styles.userName}>Nguyễn Minh Phụng</Text>
            <View style={styles.mutualFriendQuantity}>
              <Text>53 bạn chung</Text>
            </View>
            <View style={styles.action}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                    flex: 1
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Gỡ</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} />
          <View style={styles.content}>
            <Text style={styles.userName}>Nguyễn Minh Phụng</Text>
            <View style={styles.mutualFriendQuantity}>
              <Text>53 bạn chung</Text>
            </View>
            <View style={styles.action}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                    flex: 1
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Gỡ</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} />
          <View style={styles.content}>
            <Text style={styles.userName}>Nguyễn Minh Phụng</Text>
            <View style={styles.mutualFriendQuantity}>
              <Text>53 bạn chung</Text>
            </View>
            <View style={styles.action}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                    flex: 1
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Gỡ</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} />
          <View style={styles.content}>
            <Text style={styles.userName}>Nguyễn Minh Phụng</Text>
            <View style={styles.mutualFriendQuantity}>
              <Text>53 bạn chung</Text>
            </View>
            <View style={styles.action}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                    flex: 1
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Gỡ</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Image style={styles.userImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} />
          <View style={styles.content}>
            <Text style={styles.userName}>Nguyễn Minh Phụng</Text>
            <View style={styles.mutualFriendQuantity}>
              <Text>53 bạn chung</Text>
            </View>
            <View style={styles.action}>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Chấp nhận</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  {
                    backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                    flex: 1
                  }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>Gỡ</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FriendRequest;