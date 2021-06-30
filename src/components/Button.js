/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert} from 'react-native';
import {Button, View} from 'react-native-ui-lib';

const ButtonCustom = () => {
  return (
    <Button
      label={'Custom Icon Renderer'}
      outline
      onPress={() => Alert.alert('Custom icon renderer')}
      marginB-20
      iconSource={iconStyle => (
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: iconStyle[0].tintColor,
            borderRadius: 10,
            marginRight: iconStyle[0].marginRight,
          }}
        />
      )}
    />
  );
};

export default ButtonCustom;
