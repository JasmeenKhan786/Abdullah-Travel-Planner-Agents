import React from 'react';
import Request from '../Screens/requestScreen';
import ForgotPassword from '../Screens/forgotPassword';
import HomeScreen from '../Screens/HomeScreen';
import Loading from '../Screens/loading';
import Login from '../Screens/loginScreen';
import RequestDetail from '../Screens/requestDetail';
import Signup from '../Screens/signup';
import { createStackNavigator } from '@react-navigation/stack';


const Stack1 = createStackNavigator();

function MainStack() {
  return (
    <Stack1.Navigator>
      <Stack1.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack1.Screen
        name="RequestScreen"
        component={Request}
        options={{ headerShown: false }}
      />
       <Stack1.Screen
        name="RequestDetail"
        component={RequestDetail}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: true, headerTintColor: 'white',
        headerStyle: { backgroundColor: 'rgba(206,141,110,1)' },}}
      />
    </Stack1.Navigator>
  );
}
export default MainStack;
