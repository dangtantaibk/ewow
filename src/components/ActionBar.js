import React from 'react';
import {Alert} from 'react-native';
import {View, ActionBar} from 'react-native-ui-lib';

const ActionBarCustom = () => {
  return (
    <View flex>
      <ActionBar
        actions={[
          {label: 'Delete', onPress: () => Alert.alert('delete'), red30: true},
          {label: 'Replace Photo', onPress: () => Alert.alert('replace photo')},
          {label: 'Edit', onPress: () => Alert.alert('edit')},
        ]}
      />
    </View>
  );
};

export default ActionBarCustom;
