import React from 'react';
import { View } from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from 'react-native-ui-kitten';
import {
  Button,
  Tab,
  TabView,
  Text,
} from 'react-native-ui-kitten';
import {
  SignInForm3,
  SignInForm4,
} from '../../components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';
// import {
//   imageSignIn5Bg,
//   ImageSource,
// } from '@src/assets/images';

const imageSignIn5Bg = require('../../assets/images/image-background-sign-in-5.jpg');


const TAB_INDEX_EMAIL: number = 0;
const TAB_INDEX_SMS: number = 1;


class SignIn5Component extends React.Component {


  state = {
    selectedTabIndex: 0,
    emailFormData: undefined,
    smsFormData: undefined,
    username: '',
    password: '',
  };

  onUsernameInputTextChange = username => {
    this.setState({username});
  };

  onPasswordInputTextChange = password => {
    this.setState({password});
  };


   backgroundImage = imageSignIn5Bg;

   onSignInButtonPress = () => {
    const { selectedTabIndex } = this.state;

    const formValue = this.getSelectedFormData();

    switch (selectedTabIndex) {
      case TAB_INDEX_EMAIL:
        //this.props.onSignInEmailPress(formValue );
        this.props.onSignInEmailPress({
          email: this.state.username,
          password: this.state.password,
        });
        break;
      case TAB_INDEX_SMS:
        this.props.onSignInSMSPress(formValue );
        break;
    }
  };

   onSignUpButtonPress = () => {
    this.props.onSignUpPress();
  };

   onTabSelect = (selectedTabIndex) => {
    this.setState({ selectedTabIndex });
  };

   onEmailFormDataChange = (emailFormData) => {
    this.setState({ emailFormData });
  };

   onSMSFormDataChange = (smsFormData) => {
    this.setState({ smsFormData });
  };

   getSelectedFormData = () => {
    const { selectedTabIndex, emailFormData, smsFormData } = this.state;

    switch (selectedTabIndex) {
      case TAB_INDEX_EMAIL:
        return emailFormData;
      case TAB_INDEX_SMS:
        return smsFormData;
    }
  };

   render() {
    const { themedStyle } = this.props;
    const signInButtonEnabled = !!this.getSelectedFormData();

    return (
      <ScrollableAvoidKeyboard>
        <ImageOverlay
          style={themedStyle.container}
          source={this.backgroundImage}>
          <View style={themedStyle.headerContainer}>
            <Text
              style={themedStyle.helloLabel}>
              Sign In
            </Text>
            <Text
              style={themedStyle.signInLabel}
              category='s1'>
              Sign in to your account with Email or SMS
            </Text>
          </View>
          {this.props.errorMsg && (
            <View style={themedStyle.msgContainer}>
              <Text style={{color: 'red'}}>{this.props.errorMsg}</Text>
            </View>
          )}
          <TabView
            tabBarStyle={themedStyle.tabBar}
            indicatorStyle={themedStyle.tabViewIndicator}
            selectedIndex={this.state.selectedTabIndex}
            onSelect={this.onTabSelect}>
            <Tab
              titleStyle={themedStyle.tabTitle}
              title='EMAIL'>
              <SignInForm3
                style={themedStyle.tabContentContainer}
                //onDataChange={this.onEmailFormDataChange}
                onUsernameInputTextChange={this.onUsernameInputTextChange}
                onPasswordInputTextChange={this.onPasswordInputTextChange}
                email={this.state.username}
                password={this.state.password}
              />
            </Tab>
            <Tab
              titleStyle={themedStyle.tabTitle}
              title='SMS'>
              <View>
                <SignInForm4
                  style={themedStyle.tabContentContainer}
                  onDataChange={this.onSMSFormDataChange}
                />
                <Text
                  style={themedStyle.smsCaptionLabel}
                  appearance='hint'>
                  within a minute you should receive
                  an SMS with the code
                </Text>
              </View>
            </Tab>
          </TabView>
          <Button
            style={themedStyle.signInButton}
            //textStyle={textStyle.button}
            size='giant'
            //disabled={!signInButtonEnabled}
            onPress={this.onSignInButtonPress}>
            SIGN IN
          </Button>
          <Button
            style={themedStyle.signUpButton}
            textStyle={themedStyle.signUpText}
            appearance='ghost'
            activeOpacity={0.75}
            onPress={this.onSignUpButtonPress}>
            Don't have an account? Sign Up
          </Button>
        </ImageOverlay>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignIn5 = withStyles(SignIn5Component, (theme) => ({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    paddingHorizontal: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContentContainer: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
  tabViewIndicator: {
    backgroundColor: theme['background-basic-color-1'],
  },
  tabTitle: {
    color: 'white',
    ...textStyle.label,
  },
  helloLabel: {
    fontSize: 26,
    lineHeight: 32,
    color: 'white',
    ...textStyle.headline,
  },
  signInLabel: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
    ...textStyle.subtitle,
  },
  smsCaptionLabel: {
    textAlign: 'center',
    paddingHorizontal: 32,
    color: 'white',
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
  },
  signUpText: {
    color: 'white',
    ...textStyle.subtitle,
  },
  msgContainer: {
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center"
  }
}));

