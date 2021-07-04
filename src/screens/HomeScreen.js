import React from 'react';
import {View, Text, Button, Assets, Colors, Card} from 'react-native-ui-lib';
import {Alert} from 'react-native';
import DayOfWeek from '../components/DayOfWeek';
import CarouselCustom from '../components/Avatar';
import Header from '../components/Header';
import CurrentReading from '../components/CurrentReading';

const HomeScreen = () => (
  <View flex backgroundColor={Colors.whiteColor}>
    <Header title="Home" />

    <View
      margin-30
      paddingB-25
      style={{borderBottomColor: '#EEEDF2', borderBottomWidth: 1}}>
      <Card
        custom1
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
    </View>
  </View>
);

export default HomeScreen;
