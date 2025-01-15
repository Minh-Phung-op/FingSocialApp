import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  textHead: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 500,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: 'center',
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
  loadMoreButton: {
    marginHorizontal: 15,
    marginTop: 15,
    paddingVertical: 5,
    borderRadius: 7,
  }
})

export default styles