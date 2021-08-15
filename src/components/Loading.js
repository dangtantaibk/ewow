/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native-ui-lib';
import LottieView from 'lottie-react-native';
import {Modal} from 'react-native';

const Loading = ({visible}) => {
  return (
    <Modal animationType="none" transparent={true} visible={visible}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
        <LottieView
          source={require('../assets/animations/books.json')}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};

export default Loading;
