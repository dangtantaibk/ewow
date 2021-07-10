/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Assets, Image, Button} from 'react-native-ui-lib';
import _ from 'lodash';
import {Colors} from 'react-native-ui-lib';
import {ScrollView, ImageBackground} from 'react-native';
import {StyleSheet} from 'react-native';

const TabAll = ({title}) => {
  return (
    <View flex padding-20>
      <Image
        style={StyleSheet.absoluteFillObject}
        overlayType="top"
        source={{
          uri: 'https://images.unsplash.com/photo-1553969923-bbf0cac2666b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        }}
      />
      <Text text40 white>
        Home
      </Text>
      <View absR marginR-20>
        <Button
          marginT-20
          round
          style={{width: 50}}
          size={Button.sizes.small}
          iconSource={Assets.icons.search}
          white
        />
      </View>
    </View>
  );
};

export default TabAll;
