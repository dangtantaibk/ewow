/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button, View, Image, Assets} from 'react-native-ui-lib';
import _ from 'lodash';
import {Colors} from 'react-native-ui-lib';
import {ScrollView, ImageBackground} from 'react-native';

const CurrentReading = ({title}) => {
  return (
    <View>
      <View centerV marginB-20 marginH-15>
        <Text subheading blackColor>
          Đang đọc
        </Text>
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
                source={Assets.images.cover2}
                style={{
                  resizeMode: 'cover',
                  justifyContent: 'center',
                  width: 100,
                  height: 160,
                }}>
                <View
                  center
                  abs
                  style={{
                    top: 3,
                    right: 0,
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}>
                  <ImageBackground
                    source={Assets.icons.readingPercent}
                    style={{
                      flex: 1,
                      resizeMode: 'cover',
                      justifyContent: 'center',
                      width: 40,
                      height: 46,
                      alignContent: 'center',
                    }}>
                    <Text
                      style={{position: 'absolute', top: 5, right: 10}}
                      miniText
                      blackColor>
                      35%
                    </Text>
                  </ImageBackground>
                </View>
              </ImageBackground>
            </View>
          );
        })}
      </ScrollView>

      <View row center marginB-20 marginH-15>
        <Image source={Assets.icons.medal} width={72} height={71} />
        <View marginL-11>
          <Text title blackColor marginB-11>
            Thử thách đọc sách 2021
          </Text>
          <View width={87} height={27}>
            <Button
              style={{height: 27}}
              size={1}
              outline
              borderRadius={10}
              blackColor
              label="Tham gia"
              title
              outlineColor={Colors.blackColor}
            />
          </View>
        </View>
      </View>

      <View
        height={1}
        backgroundColor={Colors.borderColor}
        marginH-30
        marginT-30
      />
    </View>
  );
};

export default CurrentReading;
