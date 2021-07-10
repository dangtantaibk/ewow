/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Assets, TouchableOpacity} from 'react-native-ui-lib';
import _ from 'lodash';
import {Colors} from 'react-native-ui-lib';
import {ScrollView, ImageBackground} from 'react-native';
import {Alert} from 'react-native';

const HighlightsReading = ({title}) => {
  return (
    <View marginT-30>
      <View row spread centerV marginB-20 marginH-15>
        <Text subheading blackColor>
          Nổi bật
        </Text>

        <TouchableOpacity onPress={() => Alert.alert('Xem thêm')}>
          <Text subheading primaryColor700>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{height: 180, marginBottom: 20}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {_.times(7, i => {
          return (
            <View width={100} height={160}>
              <ImageBackground
                source={Assets.images.cover1}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  width: 100,
                  height: 160,
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View height={1} backgroundColor={Colors.borderColor} marginH-30 />
    </View>
  );
};

export default HighlightsReading;
