import React from 'react'
import { Text, SafeAreaView, ScrollView, Button } from 'react-native'
import FriendHeader from './FriendHeader'
import FriendRequest from './FriendRequest'
import FriendSuggestion from './FriendSuggestion'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../type'

type FriendHubNavigationProp = StackNavigationProp<RootStackParamList, 'Friends'>;

export type FriendHubProps = {
  navigation: FriendHubNavigationProp;
};

const FriendHub: React.FC<FriendHubProps> = ({ navigation }) => {
    return (
        <SafeAreaView style={{ paddingHorizontal: 5 }}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                style={{
                    height: '100%',
                    // backgroundColor: '#C0C0C0'
                }}>
                <FriendHeader navigation={navigation}/>
                <FriendRequest navigation={navigation}/>
                <FriendSuggestion navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FriendHub
