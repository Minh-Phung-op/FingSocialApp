import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: height * 0.26,
        marginTop: 5,
        paddingVertical: 6,
        backgroundColor: 'white',
        // borderWidth: 1,
    },
    card: {
        width: width * 0.28,
        height: '100%',
        margin: 0,
        paddingRight: 5,
    },
    name: {
        position: 'absolute',
        bottom: 8,
        left: 6,
        fontSize: 14,
        color: 'white',
    },
    myStoryImage: {
        width: '100%',
        height: '70%',
        borderRadius: 7,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    userStoryImage:{
        width: '28%',
        aspectRatio: 1, // Đảm bảo chiều cao = chiều rộng (tỷ lệ 1:1)
        borderRadius: 50,
        position: 'absolute',
        zIndex: 100,
        top: 6,
        left: 6,
        borderWidth: 2.5,
        borderColor: 'blue'
    },
    storyImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    myBottomStoryCard:{
        width: '100%',
        height: '30%',
        backgroundColor: 'grey',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },
    createStory:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center', 
        fontSize: 28,
        color: 'white',
        backgroundColor: 'blue',
        width: 30,
        aspectRatio: 1,
        borderRadius: 50,
        top: '61%',
        left: '50%',
        transform: 'translate(-50%)',  /* Dịch chuyển phần tử về chính giữa */
    }
});

export default styles