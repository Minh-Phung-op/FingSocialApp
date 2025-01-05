import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import styles from './FriendSuggestionStyles'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type'

type FriendSuggestionNavigationProp = StackNavigationProp<RootStackParamList, 'Friends'>;

type FriendSuggestionProps = {
  navigation: FriendSuggestionNavigationProp;
};

const FriendSuggestion: React.FC<FriendSuggestionProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>Những người bạn có thể biết</Text>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { backgroundColor: pressed ? '#DDDDDD' : 'transparent' }  // Màu sáng khi nhấn
          ]}>
          {/* <Text style={{ color: '#3366CC' }}>Xem tất cả</Text> */}
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
                  { backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                   }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Kết bạn</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
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
                  { backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                   }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Kết bạn</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
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
                  { backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                   }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Kết bạn</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
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
                  { backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                   }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Kết bạn</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
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
                  { backgroundColor: pressed ? '#3399CC' : '#0099FF',
                    flex: 1,
                   }  // Màu sáng khi nhấn
                ]}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: '700' }}>Kết bạn</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  { backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
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

export default FriendSuggestion;