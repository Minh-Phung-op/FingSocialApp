import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // marginTop: 10,
    },
    header: {
        width: width * 0.96,
        marginTop: 5,
        alignItems: 'center',
        // borderWidth: 1,
    },
    noRequestImage:{
        width: 100,
        aspectRatio: 1,
    },
    friendSearchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 35,  // Giảm chiều cao xuống 30
        // borderColor: '#ddd', // Màu viền nhẹ
        borderWidth: 0.5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 25,
        paddingHorizontal: 15, // Khoảng cách giữa viền và văn bản
        backgroundColor: '#f2f2f2', // Màu nền sáng
    },
    friendSearchInput: {
        flex: 1, // Để TextInput chiếm hết không gian còn lại
        fontSize: 16,  // Giảm kích thước chữ một chút cho phù hợp với chiều cao nhỏ
        color: '#333',
        padding: 0,
        marginTop: -5,
        marginBottom: -6,
        // borderWidth: 1,
    },
    main: {
        // marginTop: 5,
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 50,
    },
    content: {
        flex: 3,
        marginLeft: 10,
        gap: 5,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    mutualFriendQuantity: {
        marginBottom: 5,
    },
    action: {
        flex: 1,
        // height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 0.5,
        gap: 5,
    },
    button: {
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonMenuCard: {
        // paddingVertical: 6,
        paddingBottom: 10,
        paddingHorizontal: 3,
        // marginBottom: 3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonMessage:{
        // paddingVertical: 2,
        // paddingTop: 0,
        paddingBottom: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.8,
    },
})

export default styles