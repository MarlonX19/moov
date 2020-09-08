import { StyleSheet } from 'react-native';


const styles  = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  valueView: {
    width: '100%',
    marginHorizontal: 10,
  },

  valueText: {
    fontSize: 18,
    color: '#696969',
  },

  searchButton:{
    width: '100%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
  }

})

export default styles;

