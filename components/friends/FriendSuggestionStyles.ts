import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        width: '100%',
        marginTop: 10,
    },
    header:{
        width: width*0.96,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7,
    },
    main:{
        marginTop: 5,
    },
    card:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    userImage:{
        flex: 1,
        aspectRatio: 1,
        borderRadius: 50,

    },
    content:{
        flex: 4,
        marginLeft: 10,
        gap: 2,
    },
    userName:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    mutualFriendQuantity:{
        marginBottom: 5,
    },
    action:{
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
    },

})

export default styles