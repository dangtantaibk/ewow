/* eslint-disable eslint-comments/no-unlimited-disable */
import {Assets, Colors, Typography, Spacings, Incubator} from 'react-native-ui-lib'; // eslint-disable-line

Assets.loadAssetsGroup('icons', {
  buggerMenu: require('../assets/icons/e_bugger_menu.png'),
});

Assets.loadAssetsGroup('images', {
  avatar: require('../assets/images/avatar.png'),
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'},
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
  primaryColor: '#2364AA',
  secondaryColor: '#81C3D7',
  textColor: '##221D23',
  errorColor: '#E63B2E',
  successColor: '#ADC76F',
  warnColor: '##FF963C',
});

/* Components */
Incubator.TextField.defaultProps = {
  ...Incubator.TextField.defaultProps,
  preset: 'default',
};
