import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  topCard: {
    flex: 2,
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingVertical: 20
  },

  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#ddd',
  },

  imageText: {
    fontSize: 17,
    color: '#FA960F'
  },

  inputs: {
    paddingHorizontal: 30,
    paddingBottom: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: '#ddd',

  },

  inputsTxt: {
    fontSize: 17
  },

  bottomCard: {
    flex: 2,
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginVertical: 5
  },

  phoneText: {
    fontSize: 16,
    color: 'black'
  },

  phoneValue: {
    fontSize: 15,
    color: 'grey'
  },

  fieldsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
})


export default styles;
