import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    flexDirection: 'column',
  },
  imageContainer: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    width: 100,
    height: 100,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#3B5998',
  },
  button: {
    marginTop: 15,
     alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});

export default styles;

