import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  topView: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA960F'
  },

  topText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold'
  },

  inputsView: {
    backgroundColor: '#fff',
    paddingVertical: 20,
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
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: 150,
    borderBottomWidth: 0.6,
    borderBottomColor: '#999'
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
  },

  wrongPass: {
    textAlign: 'center',
    fontSize: 11,
    color: 'red',
    marginTop: 15
  },

  nextBtnTextStyle: {
    color: 'green',
    fontSize: 16,
  },

  previousBtnTextStyle: {
    color: 'red',
    fontSize: 16,
  },
})

export default styles;
