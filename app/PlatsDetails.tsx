import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@/type';
import { Plat } from '@/models/plat';
import { getPlatById } from '@/services/platService';

type PlatDetailsRouteProp = RouteProp<RootStackParamList, 'PlatsDetails'>;

const PlatDetailsScreen = () => {
  const route = useRoute<PlatDetailsRouteProp>();
  const [plat, setPlat] = useState<Plat | null>(null);
  const [loading, setLoading] = useState(true);
  const { _id } = route.params;

  useEffect(() => {
    const fetchPlat = async () => {
      try {
        const platData = await getPlatById(_id);
        setPlat(platData);
      } catch (error) {
        console.error("Erreur lors du chargement du plat", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlat();
  }, [_id]);

  const getPlatsImageUrl = (imgName: string) => {
    return `http://192.168.1.121:9090/img/${imgName}`; // adapte si besoin
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#333" />
        <Text>Chargement du plat...</Text>
      </View>
    );
  }

  if (!plat) {
    return (
      <View style={styles.centered}>
        <Text>Plat non trouvé</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: getPlatsImageUrl(plat.images) }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.details}>
        <Text style={styles.title}>{plat.name}</Text>
        <Text style={styles.description}>{plat.description}</Text>
        <Text style={styles.time}>🕒 {plat.timeOfCook}</Text>
      </View>
    </ScrollView>
  );
};

export default PlatDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  details: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  time: {
    fontSize: 14,
    color: '#777',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
