import { ScrollView, View } from 'react-native'
import React from 'react'
import Header from './Header'
import TodayNotifications from './TodayNotifications'
import PreviousNotifications from './PreviousNotifications'

const NotificationList = () => {
    return (
        <ScrollView>
            <Header/>
            <TodayNotifications/>
            <PreviousNotifications/>
        </ScrollView>
    )
}

export default NotificationList