import React from 'react';
import {View, ViewProps} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon,
  Input,
} from 'react-native-ui-kitten';
import {textStyle, ValidationInput} from '../../common';
// import {
//   EmailIconFill,
//   LockIconFill,
// } from '@src/assets/icons';
import {EmailValidator, PasswordValidator} from '../../../core/validators';

class SignInForm3Component extends React.Component {
  isValid = value => {
    const {email, password} = value;

    return email !== undefined && password !== undefined;
  };

  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  renderEmailIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="email" />;
  };

  renderLockIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="lock" />;
  };

  render() {
    const {
      style,
      themedStyle,
      theme,
      email,
      password,
      onUsernameInputTextChange,
      onPasswordInputTextChange,
      ...restProps
    } = this.props;

    return (
      <View {...restProps} style={[themedStyle.container, style]}>
        {/* <ValidationInput
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          placeholder='Email'
          icon={EmailIconFill}
          validator={EmailValidator}
          onChangeText={this.onEmailInputTextChange}
        /> */}

        <Input
          style={themedStyle.emailInput}
          textStyle={textStyle.paragraph}
          placeholder="Email"
          icon={this.renderEmailIconFill}
          autoCapitalize="none"
          status={email && this.getStatus(EmailValidator(email))}
          value={email}
          onChangeText={onUsernameInputTextChange}
        />

        {/* <ValidationInput
          style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          placeholder='Password'
          secureTextEntry={true}
          icon={LockIconFill}
          validator={PasswordValidator}
          onChangeText={this.onPasswordInputTextChange}
        /> */}
        <Input
          style={themedStyle.passwordInput}
          textStyle={textStyle.paragraph}
          placeholder="Password"
          secureTextEntry={true}
          icon={this.renderLockIconFill}
          value={password}
          onChangeText={onPasswordInputTextChange}
        />
      </View>
    );
  }
}

export const SignInForm3 = withStyles(
  SignInForm3Component,
  (theme: ThemeType) => ({
    container: {},
    emailInput: {},
    passwordInput: {
      marginTop: 16,
    },
  }),
);
