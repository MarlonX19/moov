import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  imageView: {
    width: 200,
    height: 200,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: -90,
  },

  updateButton: {
    alignSelf: 'center',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    borderColor: 'purple',
    borderWidth: 0.6
  },

  updateTxt: {
    fontSize: 18,
    color: 'purple'
  }
})

export default styles;
