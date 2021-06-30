/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {AnimatedScanner, Colors, View} from 'react-native-ui-lib';

const AnimatedImageCustom = () => {
  return (
    <View flex>
      <AnimatedScanner
        backgroundColor={Colors.purple30}
        progress={98}
        duration={1600}
        containerStyle={{backgroundColor: Colors.violet50, height: 6}}
      />
    </View>
  );
};

export default AnimatedImageCustom;
