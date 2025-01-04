import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'white',
        marginTop: 5,
        // marginBottom: 30,
    },
    header: {
        // flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        marginBottom: 5,
        paddingTop: 7,
        paddingLeft: 5,
    },
    leftHeader: {
        width: '85%',
        flexDirection: 'row',
        marginLeft: 5
    },
    myAvatar: {
        width: '13%',
        aspectRatio: 1,
        borderRadius: 50,
    },
    mainLeftHeader: {
        marginLeft: 7,

    },
    myName: {
        fontSize: 16,
        fontWeight: "700",
    },
    postTime: {
        fontSize: 12
    },
    rightHeader: {
        width: '12%',
        height: '70%',
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    postMenuButton:{
        // borderWidth: 1,
    },
    postMenuText:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    hiddenPostText:{
        fontSize: 26,
    },
    content: {
       width: '100%',
       height: 'auto',
        // borderWidth: 1,
    },
    postContentText:{
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 7,
        fontSize: 16,
    },
    postImageContainer:{
        width: '100%',
        height: 400,
        // borderWidth: 1,
    },
    postImage:{
        width: '100%',
        height: '100%',
    },
    action: {
        width: '100%',
        // height: 60,
        // borderWidth: 1,
        // paddingHorizontal: 5,
        flexDirection: 'column',
    },
    postStats:{
        width: '100%',
        height: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        marginTop: 5,
        paddingHorizontal: 10,
    },
    likeAmount:{

    },
    otherAmount:{
        
    },
    socialAction:{
        width: '100%',
        height: 35,
        paddingHorizontal: 5,
        // paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'green'
    },
    actionCard:{
        flex: 1,
    },
    actionTextCard:{
        textAlign: 'center',
        fontSize: 16
    }
})

export default styles