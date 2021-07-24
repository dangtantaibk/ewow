/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Assets, TouchableOpacity} from 'react-native-ui-lib';
import _ from 'lodash';
import {Colors} from 'react-native-ui-lib';
import {ScrollView, ImageBackground} from 'react-native';
import {Alert} from 'react-native';

const ForYouReading = ({title}) => {
  return (
    <View marginT-30>
      <View row spread centerV marginB-20 marginH-15>
        <Text subheading blackColor>
          {title}
        </Text>

        <TouchableOpacity onPress={() => Alert.alert('Xem thêm')}>
          <Text subheading primaryColor700>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{marginBottom: 20}}
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {_.times(7, i => {
          return (
            <View key={i} width={100}>
              <ImageBackground
                source={Assets.images.cover7}
                style={{
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  width: 100,
                  height: 160,
                }}
              />
              <Text arthur marginT-15 marginB-5>
                Elon Musk
              </Text>
              <Text bookTitle>Ashlee Vance</Text>
            </View>
          );
        })}
      </ScrollView>

      <View height={1} backgroundColor={Colors.borderColor} marginH-30 />
    </View>
  );
};

export default ForYouReading;
