/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Colors, Button, Assets} from 'react-native-ui-lib';
import {Alert} from 'react-native';

const Header = ({title}) => {
  return (
    <View useSafeArea row spread backgroundColor={Colors.primaryColor}>
      <View row height={59} marginH-15 center>
        <Button
          square
          onPress={() => Alert.alert('HOME')}
          iconSource={Assets.icons.buggerMenu}
          link
          color={Colors.whiteColor}
          width={20}
          height={16}
          label="Home"
          heading
        />
      </View>
      <View marginH-15 center>
        <Button
          onPress={() => Alert.alert('SEARCH')}
          marginB-20
          iconSource={Assets.icons.search}
          link
          color={Colors.whiteColor}
          width={24}
          height={24}
        />
      </View>
    </View>
  );
};

export default Header;
