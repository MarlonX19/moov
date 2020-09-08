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
  }

})


export default styles;
