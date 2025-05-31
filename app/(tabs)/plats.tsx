import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou autre pack d'icônes
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { getPlatList } from '../../services/platService'; // adapte selon ton chemin
import { Plat } from '../../models/plat';
import { useNavigation } from '@react-navigation/native'; // bien utiliser ce hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type PlatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Plats'>;

const Plats = () => {
  const [plats, setPlats] = useState<Plat[]>([]);
  const navigation = useNavigation<PlatScreenNavigationProp>();
  const [isConnected, setIsConnected] = useState(false);

  useFocusEffect(
    useCallback(() => {
      fetchPlats();
    }, [])
  );

    useEffect(() => {
    const checkUserConnection = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsConnected(true);
      }
    };

    checkUserConnection();
  }, []);

  const fetchPlats = async () => {
    try {
      const platsData = await getPlatList();
      setPlats(platsData);
    } catch (error) {
      console.error("Erreur lors du chargement des plats", error);
    }
  };

  const getPlatsImageUrl = (imgName: string) => {
    return `http://192.168.1.121:9090/img/${imgName}`;
  };

 return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('../../assets/images/plats.jpg')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      }>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Liste des plats</Text>
      <View style={styles.grid}>
        {plats.map((plat) => (
          <TouchableOpacity
            key={plat._id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/PlatsDetails', params: { _id: plat._id } })}>
            <Image
              source={{ uri: getPlatsImageUrl(plat.images) }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.platName}>{plat.name}</Text>
              <Text style={styles.description}>{plat.description}</Text>
              <Text style={styles.time}>🕒 {plat.timeOfCook}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
      {isConnected && (
        <TouchableOpacity 
          style={styles.floatingButton}
          onPress={() => router.push('/AjoutPlat')}>
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      )}
      </ParallaxScrollView>


  );
}

export default Plats;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  platName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    color: '#666',
    marginVertical: 4,
  },
  time: {
    marginTop: 4,
    fontSize: 12,
    color: '#555',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
    floatingButton: {
    position: 'absolute',
    top:30,
    bottom: 30,
    right: 20,
    backgroundColor: '#c10037',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 10,
  },
});

