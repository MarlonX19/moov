import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topView: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA960F'
  },

  topText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold'
  },

  inputsView: {
    backgroundColor: '#fff',
    elevation: 1,
  },

  forgotPass: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 20
  },

  forgotPassText: {
    color: 'grey'
  },

  input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    paddingTop: 10,
  },

  btnView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FA960F',
    borderRadius: 30,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  },

  signUpView: {
    height: 50,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  signUpText: {
    color: '#999'
  },
  signUpText2: {
    color: 'green'
  }
})

export default styles;
