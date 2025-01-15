import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './TodayNotificationStyles'

const TodayNotifications = () => {
    const [isRead, setIsRead] = useState(false);
    const handlePressNotificationItem = () => {
        setIsRead(!isRead);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.todayText}>Hôm nay</Text>
            <Pressable style={[styles.notificationItem,
                {backgroundColor: isRead ? 'transparent' : '#c4e4ee'}
                ]} onPress={handlePressNotificationItem}>
                <Image source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} style={styles.avatar} />
                <View style={styles.textContainer}>
                    <Text style={styles.description}>Bạn có 1 tym từ
                        <Text style={styles.usernameText}> HuyFly </Text>
                        Bạn có biết bạn đẹp zai lắm không Phụng. Bạn làm thế thì bao nhiêu em gái ngủ sao được. Bạn đang gieo nghiệp đó
                    </Text>
                    <Text style={styles.time}>1 giờ trước</Text>
                </View>
                {/* <Text>@@@</Text> */}
            </Pressable>
        </View>
    )
}

export default TodayNotifications