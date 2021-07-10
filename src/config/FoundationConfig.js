/* eslint-disable eslint-comments/no-unlimited-disable */
import {Assets, Colors, Typography, Spacings, Incubator} from 'react-native-ui-lib'; // eslint-disable-line
import {Button} from 'react-native-ui-lib';
import {fontFamily} from '../assets/index';

Assets.loadAssetsGroup('icons', {
  buggerMenu: require('../assets/icons/e_bugger_menu.png'),
  search: require('../assets/icons/e_search.png'),
  arrowRight: require('../assets/icons/arrowRight.png'),
  readingPercent: require('../assets/icons/readingPercent.png'),
  medal: require('../assets/icons/medal.png'),
});

Assets.loadAssetsGroup('images', {
  avatar: require('../assets/images/avatar.png'),
  cover: require('../assets/images/cover.png'),
  cover1: require('../assets/images/cover-1.png'),
  cover2: require('../assets/images/cover-2.png'),
  cover3: require('../assets/images/cover-3.png'),
  cover4: require('../assets/images/cover-4.png'),
  cover5: require('../assets/images/cover-5.png'),
  cover6: require('../assets/images/cover-6.png'),
  cover7: require('../assets/images/cover-7.png'),
  cover8: require('../assets/images/cover-8.png'),
});

Typography.loadTypographies({
  heading: {fontSize: 18, fontWeight: '500', fontFamily: 'Montserrat'},
  subheading: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Montserrat',
    lineHeight: 17,
  },
  headingN: {fontSize: 18, fontWeight: '400', fontFamily: 'Montserrat'},
  title: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Montserrat',
  },
  titleB: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    fontFamily: 'Montserrat',
  },
  miniText: {
    fontSize: 9,
    fontWeight: '400',
    fontFamily: 'Montserrat',
  },
  bookTitle: {fontSize: 11, fontWeight: '300', fontFamily: 'Lato'},
  arthurText: {fontSize: 12, fontWeight: '400', fontFamily: 'Lato'},
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16,
  s3: 1,
  s2: 0,
});

/* Dark Mode Schemes */
Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
  },
  dark: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
  },
});

Colors.loadColors({
  primaryColor: '#153F85',
  primaryColor700: '#3077B1',
  primaryColor100: '#D1EFF7',
  secondaryColor: '#D1EFF7',
  thirdColor: '#4FD2B4',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
  blackColor: '#000000',
  whiteColor: '#FFFFFF',
  greyColor: '#6D6D6D',
  borderColor: '#EEEDF2',
});

/* Components */
Incubator.TextField.defaultProps = {
  ...Incubator.TextField.defaultProps,
  preset: 'default',
};
