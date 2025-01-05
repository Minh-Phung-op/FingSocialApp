import React, { useState } from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from './SentRequestStyles';

const SentRequest = () => {
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
                        {/* <Text style={{ color: '#3366CC' }} onPress={() => navigation.navigate('SentRequest')}>Lời mời đã gửi</Text> */}
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
                <Text style={{ fontSize: 18, fontWeight: '700', marginLeft: 7,  }}>Lời mời đã gửi</Text>
                <Pressable
                    style={({ pressed }) => [
                        styles.button,
                        { backgroundColor: pressed ? '#DDDDDD' : 'transparent' }  // Màu sáng khi nhấn
                    ]}>
                    <Text style={{ color: '#3366CC' }}>Xem tất cả</Text>
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
                                        backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                                        flex: 1
                                    }  // Màu sáng khi nhấn
                                ]}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Hủy</Text>
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
                                        backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                                        flex: 1
                                    }  // Màu sáng khi nhấn
                                ]}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Hủy</Text>
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
                                        backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                                        flex: 1
                                    }  // Màu sáng khi nhấn
                                ]}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Hủy</Text>
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
                                        backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                                        flex: 1
                                    }  // Màu sáng khi nhấn
                                ]}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Hủy</Text>
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
                                        backgroundColor: pressed ? '#CCCCCC' : '#BBBBBB',
                                        flex: 1
                                    }  // Màu sáng khi nhấn
                                ]}>
                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Hủy</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SentRequest