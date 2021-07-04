/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Card, Spacings, View, Image, Assets} from 'react-native-ui-lib';
import _ from 'lodash';
import {Colors} from 'react-native-ui-lib';
import {Alert, ScrollView} from 'react-native';

const CurrentReading = ({title}) => {
  const Page = ({children, style, ...others}) => {
    return <View {...others}>{children}</View>;
  };

  const onPagePress = index => {
    Alert.alert(index);
  };
  return (
    <View>
      <View centerV marginB-20>
        <Text subheading blackColor>
          Đang đọc
        </Text>
      </View>
      <ScrollView
        style={{height: 160, marginBottom: 20, paddingVertical: 10}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {_.times(4, i => {
          return (
            <Card
              key={i}
              width={100}
              style={{marginRight: 20}}
              backgroundColor={Colors.white}>
              <View padding-15>
                <Text text30 grey30>
                  {i}
                </Text>
              </View>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CurrentReading;
