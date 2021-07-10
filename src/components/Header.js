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

const Header = ({title, onPressMenu, onPressSearch, search, onPressGoBack}) => {
  const renderSearch = () => {
    return (
      <View row spread>
        <View height={59} flex width={'100%'} marginH-15 center>
          <Button
            borderRadius={10}
            style={{
              height: 44,
              width: '100%',
              justifyContent: 'flex-start',
              backgroundColor: Colors.primaryColor700,
            }}
            size={0}
            onPress={onPressMenu}
            iconSource={Assets.icons.search}
            iconStyle={{width: 24, height: 24}}
            color={Colors.primaryColor100}
            label={'Tìm sách, tác giả'}
            labelStyle={{marginLeft: 5}}
            title
          />
        </View>
        <TouchableOpacity onPress={onPressGoBack}>
          <View height={59} marginR-15 center>
            <Text title whiteColor>
              Huỷ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderHome = () => {
    return (
      <View row spread>
        <View height={59} marginH-15 center>
          <Button
            square
            onPress={onPressMenu}
            iconSource={Assets.icons.buggerMenu}
            link
            color={Colors.whiteColor}
            width={20}
            height={16}
            label={title}
            heading
          />
        </View>
        <View height={59} marginH-15 center>
          <Button
            onPress={onPressSearch}
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
  return (
    <View useSafeArea backgroundColor={Colors.primaryColor}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
      />
      {search ? renderSearch() : renderHome()}
    </View>
  );
};

export default Header;
