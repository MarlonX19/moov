import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70,
  },

  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#fff',
  },

  avatarText: {
    fontSize: 25,
    color: '#696969',
  },

  contactView:{
    width: '100%',
    height: 200,
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  callButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#696969',
  },


  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'sans-serif-thin'
  },

  rateView: {
    marginBottom: 20,
  }

})


export default styles;
