import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { showMessage } from 'react-native-flash-message';

import Header from '../../components/Header';

import { BASE_URL } from '../../../constants';

import AuthContext from '../../contexts/auth';

import styles from './styles';

function Update(props) {
  const { forUpdate } = props.route.params;
  const [newPic, setNewPic] = useState('');

  const { user, updateUserPhoto } = useContext(AuthContext);


  useEffect(() => {
    if (user?.avatar_path) {
      setNewPic(`${BASE_URL}/files/${user.avatar_path}`)
    }
  }, [])

  function handleChooseNewPic() {
    ImagePicker.openPicker({
      width: 350,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      setNewPic(image.path);
      handleNewProfilePhoto(image.path);
    })
      .catch(error => {
        console.log(error);
        showMessage({
          message: "Erro ao escolher foto!",
          type: "warning",
        });
      })
  }

  async function handleNewProfilePhoto(uri) {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];

    let formData = new FormData();

    formData.append("userphoto", {
      uri,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
    formData.append("id", user.id);

    const res = await updateUserPhoto(formData);

    if(res.message === 'updated') {
      showMessage({
        message: "Foto atualizada!",
        type: "success",
      });
    } else {
      showMessage({
        message: "Erro ao atualizar foto!",
        type: "warning",
      });
    }
  }


  if (forUpdate === 'image') {
    return (
      <View style={styles.container}>
        <Header head='Atualizar' navigation={props.navigation} />
        <View style={{ width: '100%', height: 180}}>
          <Image source={{ uri: newPic}} style={{ width: '100%', height: '100%'}} />
        </View>
        <Image
          source={{ uri: newPic }}
          style={styles.imageView} />
        <TouchableOpacity
          onPress={() => handleChooseNewPic()}
          style={styles.updateButton}
        >
          <Text style={styles.updateTxt}>Alterar foto</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View>
      <Header head='Atualizar' navigation={props.navigation} />
      <Text>UPDATE</Text>
    </View>
  )
}

export default Update;
