import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import styles from './PostStyles'

export default function Post() {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Image style={styles.myAvatar} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}/>\
            <View style={styles.mainLeftHeader}>
              <Text style={styles.myName}>Linh nhi Shop</Text>
              <Text style={styles.postTime}>31/12/2024</Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity style={styles.postMenuButton}>
              <Text style={styles.postMenuText}>。。。</Text>

            </TouchableOpacity>
              <Text style={styles.hiddenPostText}>x</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.postContentText}>Hôm nay là thứ mấy, chắc chắn là thứ 2
          Hôm nay là thứ mấy, chắc chắn là thứ 2
          </Text>
          <View style={styles.postImageContainer}>
            <Image style={styles.postImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}/>

          </View>
        </View>
        <View style={styles.action}>
          <View style={styles.postStats}>
            <View style={styles.likeAmount}>
              <Text>1.2K</Text>
            </View>
            <View style={styles.otherAmount}>
              <Text>1.5K follow</Text>
            </View>
          </View>
          <View style={styles.socialAction}>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Bình luận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
        </View> 
    </View>
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Image style={styles.myAvatar} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}/>\
            <View style={styles.mainLeftHeader}>
              <Text style={styles.myName}>Linh nhi Shop</Text>
              <Text style={styles.postTime}>31/12/2024</Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity style={styles.postMenuButton}>
              <Text style={styles.postMenuText}>。。。</Text>

            </TouchableOpacity>
              <Text style={styles.hiddenPostText}>x</Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.postContentText}>Hôm nay là thứ mấy, chắc chắn là thứ 2
          Hôm nay là thứ mấy, chắc chắn là thứ 2
          </Text>
          <View style={styles.postImageContainer}>
            <Image style={styles.postImage} source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }}/>

          </View>
        </View>
        <View style={styles.action}>
          <View style={styles.postStats}>
            <View style={styles.likeAmount}>
              <Text>1.2K</Text>
            </View>
            <View style={styles.otherAmount}>
              <Text>1.5K follow</Text>
            </View>
          </View>
          <View style={styles.socialAction}>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Bình luận</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Text style={styles.actionTextCard}>Chia sẻ</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </>
  )
}
