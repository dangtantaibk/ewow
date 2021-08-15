/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Colors, Button, Image} from 'react-native-ui-lib';
import {useNavigation, StackActions} from '@react-navigation/native';
import {Assets, LoaderScreen} from 'react-native-ui-lib';
import {Dimensions, Platform, Modal} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import Loading from '../components/Loading';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const home = () => {
    navigation.dispatch(
      StackActions.replace('HOME_SCREEN', {
        user: 'jane',
      }),
    );
  };

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('idToken', idToken);
    setLoading(true);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('googleCredential', googleCredential);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(a => {
        console.log('credential', a);
        home();
      })
      .catch(e => {
        console.log('error', e);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    setLoading(true);

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(facebookCredential)
      .finally(() => {
        setLoading(false);
      });
  }

  async function onAppleButtonPress() {
    // Start the sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw 'Apple Sign-In failed - no identify token returned';
    }

    setLoading(true);
    // Create a Firebase credential from the response
    const {identityToken, nonce} = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce,
    );

    // Sign the user in with the credential
    return auth()
      .signInWithCredential(appleCredential)
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <View flex backgroundColor={Colors.loginBackgroundColor}>
      <Loading visible={loading} />
      <View height={200} center>
        <Image
          marginT-50
          source={Assets.icons.appIcon}
          width={100}
          height={100}
        />
      </View>

      <View flex>
        <View row height={50} backgroundColor={Colors.whiteColor}>
          <View
            style={{position: 'absolute', top: 0, left: 0}}
            width={50}
            height={50}
            backgroundColor={Colors.loginBackgroundColor}
          />
          <View
            width={100}
            height={100}
            borderRadius={50}
            backgroundColor={Colors.whiteColor}
          />
          <View />
        </View>
        <View flex centerH paddingT-10 backgroundColor={Colors.whiteColor}>
          <Text loginText blackColor>
            Đăng nhập để bắt đầu
          </Text>

          <View marginT-52 width={300} height={64}>
            <Button
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }
              size={1}
              enableShadow
              shadow
              borderRadius={50}
              style={{
                shadowColor: Colors.blackColor,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.12,
                shadowRadius: 8.3,
                elevation: 1,
                height: 64,
              }}
              backgroundColor={Colors.whiteColor}>
              <Image source={Assets.icons.googleIcon} />
              <Text marginL-10 googleColor>
                Tiếp tục với Google
              </Text>
            </Button>
          </View>

          <View marginT-36 width={300} height={64}>
            <Button
              onPress={() =>
                onFacebookButtonPress().then(() =>
                  console.log('Signed in with Facebook!'),
                )
              }
              size={1}
              enableShadow
              shadow
              borderRadius={50}
              style={{
                shadowColor: Colors.fbBackgroundColor,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.12,
                shadowRadius: 8.3,
                elevation: 1,
                height: 64,
              }}
              backgroundColor={Colors.fbBackgroundColor}>
              <Image source={Assets.icons.fbIcon} />
              <Text marginL-10 whiteColor>
                Tiếp tục với Facebook
              </Text>
            </Button>
          </View>

          {Platform.OS === 'ios' && (
            <View marginT-36 width={300} height={64}>
              <Button
                onPress={() =>
                  onAppleButtonPress().then(() =>
                    console.log('Apple sign-in complete!'),
                  )
                }
                size={1}
                enableShadow
                shadow
                borderRadius={50}
                style={{
                  shadowColor: Colors.blackColor,
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.12,
                  shadowRadius: 8.3,
                  elevation: 1,
                  height: 64,
                }}
                backgroundColor={Colors.blackColor}>
                <Image source={Assets.icons.appleLogo} />
                <Text marginL-10 whiteColor>
                  Tiếp tục với Apple ID
                </Text>
              </Button>
            </View>
          )}
        </View>
      </View>
      <View bottom height={140}>
        <View center height={140} backgroundColor={Colors.primaryColor}>
          <View
            style={{position: 'absolute', top: 0, right: 0}}
            row
            height={50}
            width={windowWidth}
            backgroundColor={Colors.primaryColor}>
            <View
              style={{position: 'absolute', top: 0, right: 0}}
              width={50}
              height={50}
              backgroundColor={Colors.whiteColor}
            />
            <View
              style={{position: 'absolute', top: 0, right: 0}}
              width={100}
              height={100}
              borderRadius={50}
              backgroundColor={Colors.primaryColor}
            />
          </View>

          <Text title whiteColor>
            Điều khoản và Điều kiện
          </Text>
        </View>

        <Image
          source={Assets.images.termBackgroundEx}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: windowWidth,
            height: 140,
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
