/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Carousel, Spacings, Page, Text, Colors} from 'react-native-ui-lib';
import {useState} from 'react';
import _ from 'lodash';
import {Alert} from 'react-native';

const CarouselCustom = () => {
  const onPagePress = index => {
    if (this.carousel && this.carousel.current) {
      this.carousel.current.goToPage(index, true);
    }
  };

  return (
    <Carousel
      key={5}
      ref={this.carousel}
      //loop
      autoplay={true}
      onChangePage={currentPage => Alert.alert(currentPage)}
      pageWidth={300}
      itemSpacings={Spacings.s3}
      containerMarginHorizontal={Spacings.s2}
      initialPage={2}
      containerStyle={{height: 160}}
      pageControlPosition={Carousel.pageControlPositions.UNDER}
      pageControlProps={{onPagePress: onPagePress, limitShownPages: true}}
      // showCounter
      allowAccessibleLayout>
      {_.map([...Array(5)], (item, index) => (
        <Text margin-15>{'CARD '}</Text>
      ))}
    </Carousel>
  );
};

export default CarouselCustom;
