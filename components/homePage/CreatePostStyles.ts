import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height*0.07,
        backgroundColor: 'white',
        paddingTop: 3,
        flexDirection: 'row'
    },
    userImage: {
        width: '10%',
        aspectRatio: 1,
        borderRadius: 50,
        marginLeft: 8,
    },
    button: {
        width: '78%',
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
        // borderWidth: 1,
        borderRadius: 8,
    }
})

export default styles