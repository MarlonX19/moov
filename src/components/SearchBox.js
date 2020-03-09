import React, { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchBox = (props) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
 
         return  <GooglePlacesAutocomplete
                 placeholder={'Onde precisa entregar algo?'}
                 placeholderTextColor="#333"
                 onPress={(res) => props.handleLocationSearch(res)}
                 query={{
                     key: 'AIzaSyBhAwIwcJLk10RVN1eQIWGiESlcZZnFjcE',
                     language: 'pt'
                 }}
                 textInputProps={{
                     onFocus: () => { setIsSearchFocused(true) },
                     onBlur: () => { setIsSearchFocused(false) },
                     autoCapitalize: 'none',
                     autoCorrect: false
                 }}
                 fetchDetails
                 enablePoweredByContainer={false}
                 listViewDisplayed={isSearchFocused}
                 styles={{
                     container: {
                         position: 'absolute',
                         top: Platform.select({ ios: 60, android: 70 }),
                         width: '100%',
                         zIndex: 6,
                     },
                     textInputContainer: {
                         flex: 1,
                         backgroundColor: 'transparent',
                         height: 54,
                         marginHorizontal: 20,
                         borderTopWidth: 0,
                         borderBottomWidth: 0,
                     },
                     textInput: {
                         height: 50,
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
                         borderRadius: 25,
                         borderWidth: 0.6,
                         borderColor: "#ddd",
                         fontSize: 18
                     },
                     listView: {
                         borderWidth: 0.6,
                         borderColor: "#ddd",
                         borderRadius: 25,
                         backgroundColor: "#EEF2EB",
                         marginHorizontal: 20,
                         elevation: 5,
                         shadowColor: "#000",
                         shadowOpacity: 0.1,
                         shadowOffset: {x: 0, y: 0},
                         shadowRadius: 10,
                         marginTop: 0,
                     },
                     description: {
                         fontSize: 14,
                     },
                     row: {
                         padding: 10,
                         height: 45
                     }
                   
                 }}
            />
     
 }
 
 export default SearchBox;