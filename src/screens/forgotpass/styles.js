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
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold'
  },

  inputsView: {
    backgroundColor: '#fff',
    elevation: 0.5,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 50,

  },

  input: {
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    borderRadius: 30,
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

  forgotPass: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  forgotPassText: {
    color: 'grey'
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
