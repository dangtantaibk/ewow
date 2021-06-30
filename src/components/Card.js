/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card, View, Assets, Colors} from 'react-native-ui-lib';
import {useState} from 'react';

const CardCustom = () => {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(true);
  return (
    <View row marginV-10>
      <Card
        height={120}
        flex
        selected={selected1}
        onPress={() => setSelected1(!selected1)}
        activeOpacity={1}
        marginR-20>
        <Card.Section
          imageSource={Assets.images.avatar}
          imageStyle={{height: '100%'}}
        />
      </Card>
      <Card
        height={120}
        flex
        selected={selected2}
        onPress={() => setSelected2(!selected2)}
        activeOpacity={1}
        selectionOptions={{
          color: Colors.grey10,
          indicatorSize: 25,
          borderWidth: 3,
        }}>
        <Card.Section
          bg-white
          content={[
            {text: 'You’re Invited!', text70: true, grey10: true},
            {text: 'join now', text90: true, grey50: true},
          ]}
          style={{padding: 20}}
        />
        <Card.Section
          imageSource={Assets.images.avatar}
          imageStyle={{height: '100%'}}
        />
      </Card>
    </View>
  );
};

export default CardCustom;
