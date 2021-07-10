/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Colors,
  Button,
  Assets,
  TouchableOpacity,
} from 'react-native-ui-lib';
import {StatusBar} from 'react-native';

const Header = ({title, onPressMenu}) => {
  const renderHome = () => {
    return (
      <View height={389}>
        <View marginH-15>
          <Button
            square
            onPress={onPressMenu}
            iconSource={Assets.icons.buggerMenu}
            link
            color={Colors.whiteColor}
            width={20}
            height={16}
            heading
          />
        </View>
      </View>
    );
  };
  return (
    <View useSafeArea backgroundColor={Colors.primaryColor}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      {renderHome()}
    </View>
  );
};

export default Header;
