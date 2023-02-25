import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './screens/HomeScreen';
import LoansScreen from './screens/LoansScreen';
import ShipsScreen from './screens/ShipsScreen';
import LoginScreen from './screens/LoginScreens/LoginScreen';
import SignInScreen from './screens/LoginScreens/SignInScreen';
import SignUpScreen from './screens/LoginScreens/SignUpScreen';

import { useEffect, useState } from 'react';

const Drawer = createDrawerNavigator();

export default function App() {
  const [token, setToken] = useState({});

  useEffect(() => {
    retrieveData()
  }, [])

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem('@storage_Key', token);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('@storage_Key');

      if (token !== null) {
        setToken(token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    Object.entries(token).length === 0
      ?
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Login'>
          <Drawer.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
          <Drawer.Screen name='SignIn' options={{headerShown: false}}>
            {() => <SignInScreen storeData={storeData} />}
          </Drawer.Screen>
          <Drawer.Screen name='SignUp' options={{ headerShown: false }}>
            {() => <SignUpScreen storeData={storeData} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
      :
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home'>
            {() => <HomeScreen token={token} />}
          </Drawer.Screen>
          <Drawer.Screen name='Loans'>
            {() => <LoansScreen token={token} />}
          </Drawer.Screen>
          <Drawer.Screen name='Ships' component={ShipsScreen} />
          <Drawer.Screen name='Logout'>
            {() => {
              useEffect(() => {
                storeData('');
              }, [])
            }}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}