import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignIn5} from './signIn5.component';
import {connect} from 'react-redux';
import * as emailAuthActions from '../../redux/actions';

export class _SignIn5Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignIn5Container';

  onSignInEmailPress = data => {
    this.props.navigation.goBack();
  };

  onSignInSMSPress = data => {
    this.props.navigation.goBack();
  };

  onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 5',
    });
  };

  render() {
    return (
      <SignIn5
        onSignInEmailPress={this.props.login}
        onSignInSMSPress={this.onSignInSMSPress}
        onSignUpPress={this.onSignUpPress}
        errorMsg={this.props.signInErrors}
      />
    );
  }
}

const mapStateToProps = state => ({
  signInErrors: state.SignIn05Blueprint.errors.SignIn,
});

const mapDispatchToProps = {
  login: emailAuthActions.login
}

export const SignIn5Container =  connect(
  mapStateToProps,
  mapDispatchToProps,
)(_SignIn5Container);