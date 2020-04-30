import React, { useState } from 'react';
import { Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchBox = (props) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const { onLocation } = props;

 
         return  <GooglePlacesAutocomplete
                 placeholder={props.direction == 'from' ? 'De onde?' : 'Para onde?'}
                 placeholderTextColor="#333"
                 fetchDetails={true}
                 onPress={onLocation}
                 query={{
                     key: 'AIzaSyBxrHIlkzVvQLoQuRHBI-46AMuJm5GyffA',
                     language: 'pt'
                 }}
                 textInputProps={{
                     onFocus: () => { setIsSearchFocused(true) },
                     onBlur: () => { setIsSearchFocused(false) },
                     autoCapitalize: 'none',
                     autoCorrect: false
                 }}
                 enablePoweredByContainer={false}
                 listViewDisplayed={isSearchFocused}
                 styles={{
                     container: {
                         position: 'absolute',
                         top: Platform.select({ ios: props.direction == 'from' ? 60 : 120, android: props.direction == 'from' ? 70 : 120 }),
                         width: '100%',
                         zIndex:  props.direction == 'from' ? 6 : 5
                     },
                     textInputContainer: {
                         flex: 1,
                         backgroundColor: 'transparent',
                         height: 50,
                         marginHorizontal: 20,
                         borderTopWidth: 0,
                         borderBottomWidth: 0,
                     },
                     textInput: {
                         height: 45,
                         margin: 0,
                         borderRadius: 0,
                         paddingTop: 0,
                         paddingBottom: 0,
                         paddingLeft: 15,
                         paddingRight: 15,
                         marginTop: 0,
                         marginBottom: 0,
                         marginLeft: 0,
                         marginRight: 0,
                         elevation: 8,
                         shadowColor: "#000",
                         shadowOpacity: 0.1,
                         shadowOffset: {x: 0, y: 0},
                         shadowRadius: 15,
                         borderRadius: 4,
                         borderWidth: 0.6,
                         borderColor: "#ddd",
                         fontSize: 16
                     },
                     listView: {
                         borderWidth: 0.6,
                         borderColor: "#ddd",
                         borderRadius: 4,
                         backgroundColor: "#fcf8f0",
                         marginHorizontal: 20,
                         elevation: 5,
                         shadowColor: "#000",
                         shadowOpacity: 0.1,
                         shadowOffset: {x: 0, y: 0},
                         shadowRadius: 10,
                         marginTop: 0
                     },
                     description: {
                         fontSize: 15,
                         color: '#454545'
                     },
                     row: {
                         padding: 10,
                         height: 45
                     }
                   
                 }}
            >
            </GooglePlacesAutocomplete>
     
 }
 
 export default SearchBox;