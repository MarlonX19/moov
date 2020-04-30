import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  distanceView: {
    width: '20%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  distanceTxt: {
    fontSize: 13,
    color: "#999"
  },

  distanceValue: {
    fontSize: 15,
    color: "#333"
  },

  bottomView: {
    height: 250,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 10,
  },

  btn: {
    height: 40,
    width: 140,
    backgroundColor: '#FA960F',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnText: {
    color: '#fff',
    letterSpacing: 0.5
  }
})

export default styles;
