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
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
  },

  iconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    justifyContent: 'space-evenly',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%', 
    height: 300, 
    alignSelf: 'center',
  },
  openButton: {
    backgroundColor: "black",
    borderRadius: 4,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'sans-serif-thin'
  },
  modalText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'sans-serif-thin'
  },

})

export default styles;

