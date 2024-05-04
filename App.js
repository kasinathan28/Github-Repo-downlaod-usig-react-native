import React, { useEffect } from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import IndexScreen from './screens/IndexScreen';
import SignUpScreen from './screens/SignUpScreen';
import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import OnBoard1 from './screens/OnBoard1';
import OnBoard2 from './screens/OnBoard2';


const Stack = createNativeStackNavigator();

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
export default function App() {
    
  const [fontsLoaded, error] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'LOGO': require('./assets/fonts/Cinzel-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Bergato': require('./assets/fonts/Bergato.ttf'),
  });

  useEffect(() => {
    if (error) {
      console.error('Error loading fonts:', error);
    }
  }, [error]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
     <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>        
  <Stack.Screen 
    name='OnBoard1' 
    component={OnBoard1} 
    options={{
      animation: 'fade', 
    }}
  />
  <Stack.Screen 
    name='OnBoard2' 
    component={OnBoard2} 
    options={{
      animation: 'slide_from_bottom',
    }}
  />
  <Stack.Screen 
    name='Login' 
    component={LoginScreen} 
    options={{
      animation: 'slide_from_left', 
    }}
  />
  <Stack.Screen 
    name='Index'
    component={IndexScreen}
    options={{
      animation: 'slide_from_right', 
    }}
  />
  <Stack.Screen
    name='Signup'
    component={SignUpScreen}
    options={{
      animation: 'flip_y', 
    }}
  />
</Stack.Navigator>

    </NavigationContainer>
  );
}
