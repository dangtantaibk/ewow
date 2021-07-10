import {ThemeManager, Colors} from 'react-native-ui-lib';

// with a dynamic function
ThemeManager.setComponentTheme('Button', (props, context) => {
  if (props.square) {
    return {
      borderRadius: 0,
    };
  }
});

ThemeManager.setComponentTheme('Card', (props, context) => {
  if (props.book) {
    return {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 1,
      marginRight: 10,
    };
  }

  return {
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8.3,
    elevation: 1,
  };
});
