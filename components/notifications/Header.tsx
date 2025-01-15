import { View, Text } from 'react-native'
import React from 'react'
import styles from './HeaderStyles'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftHeader}>
                <Text style={styles.notificationText}>Thông báo</Text>
                <View style={styles.rightHeader}>
                    <View style={styles.menuIcon}>

                    </View>
                    <View style={styles.searchIcon}>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header