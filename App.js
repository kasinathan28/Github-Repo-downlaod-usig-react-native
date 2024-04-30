import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Index from './screens/IndexScreen';

// Create a native stack navigator
const Stack = createNativeStackNavigator();

// Define your navigation stack
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          options={{ headerShown: false }} 
          component={LoginScreen} 
        />
        <Stack.Screen 
        name='Index'
        options={{headerShown:false}}
        component={Index}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
