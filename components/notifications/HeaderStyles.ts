import { StyleSheet, Dimensions } from "react-native";
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftHeader:{
        padding: 10,
    },
    notificationText:{
        fontSize: 24,
        fontWeight: 600,
    },
    rightHeader:{

    },
    menuIcon:{

    },
    searchIcon:{
        
    }
})

export default styles