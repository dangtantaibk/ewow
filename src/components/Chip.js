/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert} from 'react-native';
import {Text, Colors, View, Chip, Image} from 'react-native-ui-lib';
import {Assets, Spacings, Typography} from 'react-native-ui-lib';

const ChipCustom = () => {
  return (
    <View flex>
      <Text marginT-20 marginB-10 text70BO>
        Custom
      </Text>
      <View center row>
        <Chip
          label={'Chip'}
          labelStyle={{color: Colors.green20}}
          iconSource={Assets.icons.checkmark}
          iconProps={{tintColor: Colors.green20}}
          containerStyle={{borderColor: Colors.green20}}
        />
        <Chip
          iconSource={Assets.icons.checkmark}
          label={'Chip'}
          labelStyle={{color: Colors.white}}
          containerStyle={{
            borderColor: Colors.green20,
            backgroundColor: Colors.green20,
            marginLeft: Spacings.s3,
          }}
        />
        <Chip
          resetSpacings
          borderRadius={22}
          label={'Chip'}
          labelStyle={{
            color: Colors.red20,
            marginHorizontal: Spacings.s3,
            ...Typography.text70BO,
          }}
          iconStyle={{width: 16, height: 16}}
          iconColor={Colors.black}
          avatarProps={{source: Assets.images.avatar, size: 28}}
          onDismiss={() => Alert.alert('onDismiss')}
          dismissIconStyle={{width: 10, height: 10, marginRight: Spacings.s3}}
          dismissColor={Colors.red20}
          containerStyle={{
            borderColor: Colors.red20,
            borderBottomRightRadius: 0,
            marginLeft: Spacings.s3,
          }}
        />
        <Chip
          resetSpacings
          label={'Chip'}
          labelStyle={{marginRight: Spacings.s1}}
          badgeProps={{
            label: '44',
            backgroundColor: Colors.white,
            borderWidth: 2,
            borderColor: Colors.black,
            labelStyle: {color: Colors.black},
          }}
          containerStyle={{
            borderWidth: 0,
            marginLeft: Spacings.s3,
          }}
        />
      </View>
      <View center row marginT-10>
        <Chip
          rightElement={
            <Image
              tintColor={Colors.yellow30}
              source={Assets.icons.x}
              width={24}
              height={24}
            />
          }
          label={'Chip'}
        />
        <Chip
          marginL-s3
          rightElement={
            <Image
              tintColor={Colors.green20}
              source={Assets.icons.x}
              width={20}
              height={20}
            />
          }
          leftElement={
            <Image
              tintColor={Colors.green20}
              source={Assets.icons.x}
              width={20}
              height={20}
            />
          }
          label={'Chip'}
        />
        <Chip
          marginL-s3
          leftElement={
            <View center row marginL-s1>
              <Image tintColor={Colors.blue30} source={Assets.icons.x} />
              <Image
                tintColor={Colors.blue30}
                source={Assets.icons.x}
                width={20}
                height={20}
              />
              <Image
                tintColor={Colors.blue30}
                source={Assets.icons.x}
                width={24}
                height={24}
              />
            </View>
          }
          label={'Chip'}
        />
        <Chip
          marginL-s3
          paddingR-s2
          rightIconSource={Assets.icons.x}
          rightElement={
            <Image
              tintColor={Colors.red30}
              source={Assets.icons.x}
              width={20}
              height={20}
            />
          }
          label={'Chip'}
        />
      </View>
    </View>
  );
};

export default ChipCustom;
