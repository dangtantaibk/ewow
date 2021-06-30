/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ChipsInput, Colors, View, Text, Typography} from 'react-native-ui-lib';
import {ScrollView, StyleSheet} from 'react-native';
import {useState} from 'react';

const ChipInputCustom = () => {
  const [tags, setTags] = useState([
    {label: 'Amit'},
    {label: 'Ethan', invalid: true},
  ]);
  const [tags1, setTags1] = useState(['Chips', 'Input']);
  const [tags2, setTags2] = useState(['Non', 'Removable', 'Tags']);
  const [tags3, setTags3] = useState(['Change', 'Typography']);

  const onTagPress = (tagIndex, markedTagIndex) => {
    this.customChipsInput.markTagIndex(
      tagIndex === markedTagIndex ? undefined : tagIndex,
    );
  };

  const renderCustomTag = (tag, index, shouldMarkToRemove) => {
    return (
      <View
        style={[
          styles.customTag,
          shouldMarkToRemove && {backgroundColor: Colors.purple70},
        ]}>
        <Text white>{tag.label}</Text>
      </View>
    );
  };

  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <View style={styles.container}>
        <Text text40 marginB-20>
          ChipsInput
        </Text>

        <ChipsInput
          containerStyle={{marginBottom: 25}}
          placeholder="Enter Tags"
          tags={tags2}
        />

        <ChipsInput
          containerStyle={{marginBottom: 25}}
          placeholder="Enter Tags"
          tags={tags}
          validationErrorMessage="error validation message"
        />

        <ChipsInput
          containerStyle={{marginBottom: 25}}
          placeholder="Editing disabled"
          tags={tags3}
          disableTagRemoval
          disableTagAdding
        />

        <ChipsInput
          ref={r => (this.customChipsInput = r)}
          containerStyle={{marginBottom: 25}}
          placeholder="With custom tags"
          tags={tags}
          renderTag={renderCustomTag}
          onCreateTag={value => ({label: value})}
          onTagPress={onTagPress}
          inputStyle={{...Typography.text60, color: Colors.blue30}}
        />

        <ChipsInput
          text60
          containerStyle={{marginBottom: 25}}
          placeholder="Enter Tags"
          tags={tags1}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  customTag: {
    backgroundColor: Colors.purple30,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 3,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default ChipInputCustom;
