import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Input, Icon
} from 'react-native-ui-kitten';
import {
  textStyle,
  ValidationInput,
} from '../../../../SignIn04Blueprint/components/common';
import {
  PhoneNumberValidator,
  SMSCodeValidator,
} from '../../../../SignIn04Blueprint/core/validators';
// import {
//   LockIconFill,
//   PhoneIconFill,
// } from '@src/assets/icons';



class SignInForm4Component extends React.Component{

   state = {
    phone: undefined,
    code: undefined,
  };

   componentDidUpdate(prevProps, prevState) {
    const oldFormValid = this.isValid(prevState);
    const newFormValid = this.isValid(this.state);

    const isStateChanged = this.state !== prevState;
    const becomeValid = !oldFormValid && newFormValid;
    const becomeInvalid = oldFormValid && !newFormValid;
    const remainValid = oldFormValid && newFormValid;

    if (becomeValid) {
      this.props.onDataChange(this.state);
    } else if (becomeInvalid) {
      this.props.onDataChange(undefined);
    } else if (isStateChanged && remainValid) {
      this.props.onDataChange(this.state);
    }
  }

  //  onPhoneInputTextChange = (phone) => {
  //   this.setState({ phone });
  // };

  //  onCodeInputTextChange = (code) => {
  //   this.setState({ code });
  // };

   isValid = (value) => {
    const { phone, code } = value;

    return phone !== undefined
      && code !== undefined;
  };

   
  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  renderPhoneIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name='phone'/>
  };

  renderLockIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="lock" />;
  };

   render() {
    const { style, themedStyle, theme, phone, password, onPhoneInputTextChange, onPasswordInputTextChange, ...restProps } = this.props;

    return (
      <View
        {...restProps}
        style={[themedStyle.container, style]}>
        <Input
          style={themedStyle.phoneInput}
          textStyle={textStyle.paragraph}
          placeholder='Phone Number'
          autoCapitalize="none"
          icon={this.renderPhoneIconFill}

          status={phone && this.getStatus(PhoneNumberValidator(phone))}
          value={phone}
          onChangeText={onPhoneInputTextChange}
        />
        <Input
        style={themedStyle.codeInput}
          textStyle={textStyle.paragraph}
          placeholder='SMS Code'
          secureTextEntry={true}
          icon={this.renderLockIconFill}

          //status={password && this.getStatus(SMSCodeValidator(password))}
          value={password}
          onChangeText={onPasswordInputTextChange}
        />

      </View>
    );
  }
}

export const SignInForm4 = withStyles(SignInForm4Component, (theme) => ({
  container: {},
  phoneInput: {},
  codeInput: {
    marginTop: 16,
  },
}));
