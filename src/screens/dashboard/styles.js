import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },

  distanceView: {
    position: 'absolute',
    top: 180,
    width: '20%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    zIndex: 4,
  },

  distanceTxt: {
    fontSize: 11, 
    color:"#999"
  },

  distanceValue: {
    fontSize: 12, 
    color:"#333"
  }
})

export default styles;
