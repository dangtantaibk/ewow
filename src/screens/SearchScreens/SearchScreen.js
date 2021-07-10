/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Colors, TabController, Text, Assets} from 'react-native-ui-lib';
import {ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import _ from 'lodash';

const TABS = [
  'Home',
  'Posts',
  'Reviews',
  'Videos',
  'Photos',
  'Events',
  'About',
  'Community',
  'Groups',
  'Offers',
];

import TabAll from './TabAll';
import TabBook from './TabBook';
import TabArthur from './TabArthur';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [key, setKey] = useState(Date.now());
  const [asCarousel, setAsCarousel] = useState(true);
  const [centerSelected, setCenterSelected] = useState(false);
  const [fewItems, setFewItems] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const generateTabItems = () => {
    let items = _.chain(TABS)
      .take(fewItems ? 3 : TABS.length)
      .map(tab => ({label: tab, key: tab}))
      .value();

    return items;
  };
  const [items, setItems] = useState([]);

  const renderLoadingPage = () => {
    return (
      <View flex center>
        <ActivityIndicator size="large" />
        <Text text60L marginT-10>
          Loading
        </Text>
      </View>
    );
  };
  const renderTabPages = () => {
    const Container = asCarousel ? TabController.PageCarousel : View;
    const containerProps = asCarousel ? {} : {flex: true};
    return (
      <Container {...containerProps}>
        <TabController.TabPage index={0}>
          <TabAll />
        </TabController.TabPage>
        <TabController.TabPage index={1}>
          <TabBook />
        </TabController.TabPage>
        <TabController.TabPage
          index={2}
          lazy
          lazyLoadTime={1500}
          renderLoading={renderLoadingPage}>
          <TabArthur />
        </TabController.TabPage>
      </Container>
    );
  };

  const onChangeIndex = selectedIndex => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <View flex backgroundColor={Colors.whiteColor}>
      <Header
        search
        onPressGoBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 15, flex: 1}}>
        <View flex>
          <TabController
            key={key}
            asCarousel={asCarousel}
            selectedIndex={selectedIndex}
            onChangeIndex={onChangeIndex}
            items={items}>
            <TabController.TabBar
              // items={items}
              key={key}
              // uppercase
              // indicatorStyle={{backgroundColor: 'green', height: 3}}
              // labelColor={'green'}
              // selectedLabelColor={'red'}
              // labelStyle={{fontSize: 20}}
              // iconColor={'green'}
              // selectedIconColor={'blue'}
              enableShadow
              activeBackgroundColor={Colors.primaryColor}
              centerSelected={centerSelected}>
              {/* {this.renderTabItems()} */}
            </TabController.TabBar>
            {renderTabPages()}
          </TabController>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
  },
  selectedLabelStyle: {
    fontSize: 16,
  },
});
