import { Tabs } from 'expo-router';
import React from 'react';
import { Text, Platform, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();
    useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsConnected(!!token);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setIsConnected(false);
    router.replace('/login');
  };

  // Composant bouton personnalisé
  const CustomTabButton = (props: any) => {
    return (
      <TouchableOpacity
        {...props}
        onPress={isConnected ? handleLogout : props.onPress}
        delayLongPress={undefined} // on évite le null qui cause le bug
      >
        {props.children}
      </TouchableOpacity>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => <IconSymbol size={28} name="house.fill" color={focused ? '#c10037' : '#ccc'} />,
           tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? '#c10037' : '#ccc', fontSize: 12 }}>
            Acceuil
          </Text>
           ),
        }}
      />
      <Tabs.Screen
        name="plats"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="silverware-fork-knife" size={28} color={focused ? '#c10037' : '#ccc'} />
          ),
          tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? '#c10037' : '#ccc', fontSize: 12 }}>
            Plats
          </Text>
        ),
        }}
      />
      <Tabs.Screen
        name="Ingredients"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="carrot" size={28} color={focused ? '#c10037' : '#ccc'} />
          ),
          tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? '#c10037' : '#ccc', fontSize: 12 }}>
            Ingredients
          </Text>
        ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons name="phone" size={28} color={focused ? '#c10037' : '#ccc'} />
          ),
          tabBarLabel: ({ focused, color }) => (
          <Text style={{ color: focused ? '#c10037' : '#ccc', fontSize: 12 }}>
            Contact
          </Text>
           ),
        }}
      />
<Tabs.Screen
  name="login"
  options={{
    tabBarButton: (props) => <CustomTabButton {...props} />,
    tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons
        name={isConnected ? 'logout' : 'account-circle'} // <- Icône dynamique
        size={28}
        color={focused ? '#c10037' : '#ccc'}
      />
    ),
    tabBarLabel: ({ focused }) => (
      <Text style={{ color: focused ? '#c10037' : '#ccc', fontSize: 12 }}>
        {isConnected ? 'Se déconnecter' : 'Se connecter'}
      </Text>
    ),
  }}
/>


      
    </Tabs>
  );
}
