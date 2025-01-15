import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './PreviousNotificationStyles'

const PreviousNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [visibleNotification, setVisibleNotification] = useState(3);
    const [isRead, setIsRead] = useState(false);
    const handlePressNotificationItems = () => {
        setIsRead(!isRead);
    }
    const handleLoadAll = () => {
        setVisibleNotification(notificationList.length)
    }
    const notificationList = [
        { id: 1, userName: 'John Doe', message: 'Sent you a message' },
        { id: 2, userName: 'Jane Smith', message: 'Commented on your post' },
        { id: 3, userName: 'Jane Doe', message: 'Commented on your post' },
        { id: 4, userName: 'Jane Dan', message: 'Commented on your post' },
        { id: 5, userName: 'Jane Mie', message: 'Commented on your post' },
        { id: 6, userName: 'Mohn Smith', message: 'Commented on your post' },
        { id: 7, userName: 'Jane Candle', message: 'Commented on your post' },
        { id: 8, userName: 'Mohn Hit', message: 'Commented on your post' },
        { id: 9, userName: 'Hatee Csan', message: 'Commented on your post' },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>Trước đó</Text>
            {notificationList.slice(0, visibleNotification).map(notification => (
                <Pressable key={notification.id} style={[styles.notificationItem,
                { backgroundColor: isRead ? 'transparent' : '#c4e4ee' },
                { borderBottomColor: isRead ? '#ddd' : 'white' }
                ]}
                    onPress={handlePressNotificationItems}>
                    <Image source={{ uri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg' }} style={styles.avatar} />
                    <View style={styles.textContainer}>
                        <Text style={styles.description}>
                            <Text style={styles.usernameText}> {notification.userName} </Text>
                            {notification.message}
                        </Text>
                        <Text style={styles.time}>1 giờ trước</Text>
                    </View>
                </Pressable>
            ))}
            {visibleNotification < notificationList.length && (
                <Pressable style={({ pressed }) => [
                    styles.loadMoreButton,
                    { backgroundColor: pressed ? '#c2c1c1' : '#ddd' }]}
                    onPress={handleLoadAll}>
                    <Text style={{ textAlign: 'center' }}>Xem thông báo trước đó</Text>
                </Pressable>
            )}
        </View>
    )
}

export default PreviousNotifications