/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import {AnimatedImage, Colors} from 'react-native-ui-lib';
import _ from 'lodash';

const SampleImages = [
  'https://static.pexels.com/photos/50721/pencils-crayons-colourful-rainbow-50721.jpeg',
  'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg',
];
const AnimatedImageCustom = () => {
  return (
    <ScrollView style={{flex: 1}}>
      {_.map(SampleImages, (image, index) => (
        <AnimatedImage
          containerStyle={{backgroundColor: Colors.blue50, marginBottom: 10}}
          style={{resizeMode: 'cover', height: 250}}
          source={{uri: image}}
          loader={<ActivityIndicator />}
          key={index}
          animationDuration={index === 0 ? 300 : 800}
        />
      ))}
    </ScrollView>
  );
};

export default AnimatedImageCustom;
