import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import IndexScreen from './screens/IndexScreen';
import SignUpScreen from './screens/SignUpScreen';
import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();


export default function App() {
    
    const [fontsLoaded] = useFonts({
      'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
      'LOGO': require('./assets/fonts/Cinzel-Medium.ttf'),
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });

  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_bottom', 
        }}
      >        
        <Stack.Screen 
          name='Login' 
          options={{ headerShown: false }} 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name='Index'
          options={{ headerShown: false }}
          component={IndexScreen}
        />
        <Stack.Screen
          name='Signup'
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
