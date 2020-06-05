import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';

// import { Container } from './styles';

import AuthContext from '../contexts/auth';

function CustomDrawerContent(props) {
  const [userData, setUserData] = useState(null);

  const { user } = useContext(AuthContext);
  console.log(user)


  return (
    <DrawerContentScrollView {...props}>
      <View style={{ paddingLeft: 10, justifyContent: 'center', alignItems: 'flex-start', height: 200, borderBottomWidth: 0.4, borderBottomColor: '#ddd' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{ uri: user.avatar_path }} style={{ width: 80, height: 80, borderRadius: 30, marginRight: 10 }} />
          <StarRating
            disabled={false}
            maxStars={5}
            rating={5}
            starSize={25}
            fullStarColor={'#FA960F'}
            selectedStar={(rating) => { }}
          />
        </View>
        <Text style={{ color: '#525151', fontWeight: '700', fontSize: 20, fontFamily: 'sans-serif-thin' }}>{user?.first_name + ' ' + user?.last_name}</Text>
        <Text style={{ color: '#999', fontFamily: 'sans-serif-thin' }}>{user?.email}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;