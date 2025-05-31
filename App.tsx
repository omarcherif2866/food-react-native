// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'; // adapte ce chemin selon ton dossier réel
import Plats from './app/(tabs)/plats';
import { RootStackParamList } from './type';
import AjoutPlats from './app/AjoutPlat';

import Ingredients from './app/(tabs)/Ingredients';
import AjoutIngredients from './app/AjoutIngredients';
import SignupScreen from './app/signup';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AjoutPlat" component={AjoutPlats} />
        <Stack.Screen name="Ingredients" component={Ingredients} />
        <Stack.Screen name="AjoutIngredients" component={AjoutIngredients} />
        <Stack.Screen name="Plats" component={Plats} />
        
<Stack.Screen
  name="signup"
  component={SignupScreen}

/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
