/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {
  ConnectionStatusBar,
  View,
  Text,
  Typography,
  Colors,
} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';

ConnectionStatusBar.registerGlobalOnConnectionLost(() => {
  // console.warn('what what?!? connection has been lost');
});

const ConnectionStatusBarScreen = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <View style={styles.container}>
      <ConnectionStatusBar
        onConnectionChange={isConnected => setIsConnected(isConnected)}
      />
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 10,
          ...Typography.text60,
          color: Colors.dark40,
        }}>
        Turn your wifi on/off to see the component in action
      </Text>
      <Text style={{...Typography.text40}}>
        {isConnected ? 'Connected! :)' : 'No connection :('}
      </Text>
    </View>
  );
};

export default ConnectionStatusBarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
});
