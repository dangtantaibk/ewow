import React, {useState} from 'react';
import {Alert} from 'react-native';
import {View, ActionSheet} from 'react-native-ui-lib';

const ActionSheetCustom = () => {
  const [showCustom, setShowCustom] = useState(true);
  return (
    <View flex>
      <ActionSheet
        title={'Title'}
        message={'Message of action sheet'}
        cancelButtonIndex={3}
        destructiveButtonIndex={0}
        useNativeIOS={false}
        options={[
          {label: 'option 1', onPress: () => Alert.alert('option 1')},
          {label: 'option 2', onPress: () => Alert.alert('option 2')},
          {label: 'option 3', onPress: () => Alert.alert('option 3')},
          {label: 'cancel', onPress: () => Alert.alert('cancel')},
        ]}
        visible={showCustom}
        onDismiss={() => setShowCustom(false)}
      />
    </View>
  );
};

export default ActionSheetCustom;
