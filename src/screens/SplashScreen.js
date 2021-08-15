/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';

const SplashScreen = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    console.log('initializing', initializing);
    if (initializing) {
      setInitializing(false);
      return null;
    }

    if (!user) {
      return setTimeout(() => {
        navigation.dispatch(
          StackActions.replace('LOGIN_SCREEN', {
            user: 'jane',
          }),
        );
      }, 1000);
    } else {
      return setTimeout(() => {
        navigation.dispatch(
          StackActions.replace('HOME_SCREEN', {
            user: 'jane',
          }),
        );
      }, 1000);
    }
  }, [user]);

  return (
    <LottieView
      source={require('../assets/animations/books.json')}
      autoPlay
      loop
    />
  );
};
export default SplashScreen;
