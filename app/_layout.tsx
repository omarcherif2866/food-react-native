import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Masquer les headers par défaut
      }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="signup" 
        options={{ 
          headerShown: false,
          presentation: 'card' // Optionnel : pour une transition plus fluide
        }} 
      />
      <Stack.Screen name="AjoutPlat" options={{ headerShown: false }} />
      <Stack.Screen name="AjoutIngredients" options={{ headerShown: false }} />
    </Stack>
  );
}