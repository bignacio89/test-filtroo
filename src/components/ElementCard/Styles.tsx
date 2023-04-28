import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    overflow: 'hidden',
  },
  image: {
    borderRadius:10,
    flex: 1,
    width: 150,
    height: 150,
    resizeMode: 'center'
  },
  textContainer:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: "absolute",
    bottom: 0,
    width: 150,
    padding: 5,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10

  },
  text:{
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center'    
  }
});

export default styles