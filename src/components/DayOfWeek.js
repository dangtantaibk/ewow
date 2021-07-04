/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Colors} from 'react-native-ui-lib';

const DayOfWeek = ({title}) => {
  return (
    <View row>
      <View
        width={24}
        height={24}
        borderRadius={12}
        center
        style={{borderColor: Colors.thirdColor, borderWidth: 1}}>
        <Text text greyColor>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default DayOfWeek;
