import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 5,
    },
    header: {
        width: width * 0.96,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 0.5,
        alignItems: 'center',
        marginBottom: 5,
    },
    main: {
        marginTop: 5,
        alignItems: 'center',
    },
    noRequestImage:{
        width: 100,
        aspectRatio: 1,
    },
    card: {
        flexDirection: 'row',
        // borderWidth: 0.5,
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 5,
    },
    userImage: {
        flex: 1,
        // width: 80,
        aspectRatio: 1,
        borderRadius: 50,
    },
    content: {
        flex: 4,
        marginLeft: 10,
        gap: 2,
        // alignItems: 'center',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        // borderWidth: 0.5
    },
    mutualFriendQuantity: {
        marginBottom: 5,
    },
    action: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        // Shadow for iOS
        // shadowColor: '#000', // Màu bóng
        // shadowOffset: { width: 0, height: 4 }, // Vị trí bóng
        // shadowOpacity: 0.1, // Độ mờ của bóng
        // shadowRadius: 10, // Độ mờ của bóng
        // // Shadow for Android
        // elevation: 3, // Độ cao của bóng trên Android
    },

})

export default styles