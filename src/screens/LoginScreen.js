/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Colors, Button, Image} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import {Assets} from 'react-native-ui-lib';
import {Dimensions} from 'react-native';
import {ImageBackground} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View flex backgroundColor={Colors.loginBackgroundColor}>
      <View height={200} center>
        <Text whiteColor heading>
          LOGO
        </Text>
      </View>

      <View flex style={{position: 'absolute', bottom: 0, right: 0}}>
        <ImageBackground
          source={Assets.images.backgroundLogin}
          style={{width: windowWidth, height: windowHeight - 200}}>
          <View center paddingT-30>
            <Text loginText blackColor>
              Đăng nhập để bắt đầu
            </Text>

            <View marginT-52 width={300} height={64}>
              <Button
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

            <View marginT-36 width={300} height={64}>
              <Button
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
          </View>

          <View flex style={{position: 'absolute', bottom: 0, right: 0}}>
            <ImageBackground
              source={Assets.images.termBackground}
              style={{
                width: windowWidth,
                height: 140,
              }}>
              <ImageBackground
                source={Assets.images.termBackgroundEx}
                style={{
                  width: windowWidth,
                  height: 140,
                }}>
                <View center height={140}>
                  <Text title whiteColor>
                    Điều khoản và Điều kiện
                  </Text>
                </View>
              </ImageBackground>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default LoginScreen;
