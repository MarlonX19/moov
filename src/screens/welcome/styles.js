import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  welcomeText: {
    fontSize: 33,
    color: 'lightgrey'
  },

  btn: {
    marginTop: 20,
    borderRadius: 30,
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: '#FA960F',
    backgroundColor: '#FA960F',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: '#fff',
    fontSize: 16
  }
})

export default styles;
