import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        marginBottom: 10
    },
    todayText:{
        marginBottom: 5,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 500,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
      },
      textContainer: {
        width: '70%',
        justifyContent: 'center',
        // borderWidth: 1,
      },
      description: {
        fontSize: 16,
        color: '#333',
      },
      usernameText:{
        fontWeight: 700,
      },
      time: {
        fontSize: 12,
        color: '#888',
      },

})

export default styles;