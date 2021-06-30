/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Checkbox, Colors, View, Text, Assets} from 'react-native-ui-lib';
import {useState} from 'react';

const CheckboxCustom = () => {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(true);
  const [value6, setValue6] = useState(true);
  const [value5, setValue5] = useState(true);
  return (
    <View useSafeArea flex>
      <View flex padding-20>
        <View flex center>
          <Checkbox
            value={value1}
            onValueChange={v => setValue1(v)}
            style={{marginBottom: 20}}
          />
          <Checkbox
            value={value6}
            label={'With label'}
            color={Colors.green20}
            onValueChange={v => setValue6(v)}
            containerStyle={{marginBottom: 20, marginLeft: 75}}
          />
          <Checkbox
            value={value2}
            onValueChange={v => setValue2(v)}
            borderRadius={2}
            size={30}
            color={Colors.purple30}
            selectedIcon={Assets.icons.x}
            style={{marginBottom: 20}}
          />
          <Checkbox
            value={value3}
            onValueChange={v => setValue3(v)}
            borderRadius={5}
            size={18}
            color={Colors.dark10}
            iconColor={Colors.green10}
            style={{marginBottom: 20}}
          />
          <View row marginB-20>
            <Text text70 centerV>
              Disabled:{' '}
            </Text>
            <Checkbox
              disabled
              value={value5}
              onValueChange={v => setValue5(v)}
              style={{marginRight: 10}}
            />
            <Checkbox
              disabled
              value={!value5}
              onValueChange={v => setValue5(v)}
              iconColor={Colors.green10}
            />
          </View>
        </View>
        <Text text40 dark10>
          Checkbox
        </Text>
      </View>
    </View>
  );
};

export default CheckboxCustom;
