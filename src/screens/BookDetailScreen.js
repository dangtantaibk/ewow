/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, Assets, Colors, Card} from 'react-native-ui-lib';
import {ScrollView} from 'react-native';
import DayOfWeek from '../components/DayOfWeek';
import HeaderBookDetail from '../components/HeaderBookDetail';
import CurrentReading from '../components/CurrentReading';
import HighlightsReading from '../components/HighlightsReading';
import ForYouReading from '../components/ForYouReading';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex backgroundColor={Colors.whiteColor}>
      <HeaderBookDetail
        title="Home"
        onPressMenu={() => {
          navigation.openDrawer();
        }}
        onPressSearch={() => {
          navigation.navigate('SEARCH_SCREEN');
        }}
      />
      <ScrollView contentContainerStyle={{paddingBottom: 15}}>
        <View
          margin-30
          paddingB-25
          style={{borderBottomColor: Colors.borderColor, borderBottomWidth: 1}}>
          <Card
            row
            marginB-20
            enableShadow={false}
            onPress={() => {}}
            useNative
            backgroundColor={Colors.white}
            activeOpacity={1}
            activeScale={1.04}>
            <View
              paddingH-10
              paddingV-20
              flex
              centerH
              backgroundColor={Colors.secondaryColor}
              borderRadius={10}>
              <Text titleB primaryColor marginB-5>
                Tiếp tục
              </Text>
              <Text title primaryColor>
                Common stocks and Uncommon profits
              </Text>
            </View>
          </Card>

          <View row spread paddingH-40>
            <DayOfWeek title={'T2'} />
            <DayOfWeek title={'T3'} />
            <DayOfWeek title={'T4'} />
            <DayOfWeek title={'T5'} />
            <DayOfWeek title={'T6'} />
            <DayOfWeek title={'T7'} />
            <DayOfWeek title={'T8'} />
          </View>
          <Button
            link
            title
            blackColor
            iconOnRight
            iconSource={Assets.icons.arrowRight}
            label="Tạo thói quen đọc sách"
            marginT-20
          />
        </View>
        <View>
          <CurrentReading />
          <HighlightsReading />
          <ForYouReading title={'Dành riêng cho bạn'} />
          <ForYouReading title={'Cập nhật mới'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
