import React, { useState } from 'react';
import { Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchBox = (props) => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const { onLocationSelected } = props;


    async function handleLocationSelected (data, { geometry }) {
        console.log('geometry')
        const { location: { lat: latitude, lng: longitude } } = geometry;
        setDestination({ 'latitude': latitude, 'longitude': longitude, 'title': data.structured_formatting.main_text })
    }

    function sayName(res){
        console.log(res)
    }
 
         return  <GooglePlacesAutocomplete
                 placeholder={'Onde precisa entregar algo?'}
                 placeholderTextColor="#333"
                 fetchDetails={true}
                 onPress={onLocationSelected}
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
            >
                <Text style={{ position: 'relative', marginTop: -50}}>Ola mundo</Text>
            </GooglePlacesAutocomplete>
     
 }
 
 export default SearchBox;