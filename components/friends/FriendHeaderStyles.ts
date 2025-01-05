import { StyleSheet, Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height*0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingVertical: 5,
        paddingRight: 15,
        // borderWidth: 1,
    },
    leftHeader:{
        flexDirection: 'row',
        gap: 10,
        // borderWidth: 1,
    },
    rightHeader:{

    },
    button: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

  export default styles