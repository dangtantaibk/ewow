import {ThemeManager, Colors} from 'react-native-ui-lib';

// with plain object
ThemeManager.setComponentTheme('Card', {
  borderRadius: 8,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.12,
  shadowRadius: 8.3,

  elevation: 1,
});

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  if (props.square) {
    return {
      borderRadius: 0,
    };
  }
});
