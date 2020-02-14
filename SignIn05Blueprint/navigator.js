import {createStackNavigator} from 'react-navigation-stack';

import {SignIn5Container} from './screens/signIn5/signIn5.container';

import Home from './screens/';

export default SignIn05BlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn5: {screen: SignIn5Container},
  },
  {
    initialRouteName: 'Home',
  },
);
