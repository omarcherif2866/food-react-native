import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { getSpecialiteList } from '../services/specialiteService';
import { getPlatsBySpeciality } from '../services/platService';
import { Specialite } from '../models/specialite';

const HomeScreen = () => {
  const [specialites, setSpecialites] = useState<Specialite[]>([]);
  const [selectedSpecialite, setSelectedSpecialite] = useState<Specialite | null>(null);

  useEffect(() => {
    fetchSpecialites();
  }, []);

  const fetchSpecialites = async () => {
    try {
      const data = await getSpecialiteList();
      setSpecialites(data);
    } catch (error) {
      console.error('Erreur chargement spécialités', error);
    }
  };

  const showPlats = async (specialite: Specialite) => {
    try {
      if (!specialite.plats || specialite.plats.length === 0) {
        const plats = await getPlatsBySpeciality(specialite._id);
        setSpecialites((prev) =>
          prev.map((s) => (s._id === specialite._id ? { ...s, plats } : s))
        );
        setSelectedSpecialite({ ...specialite, plats });
      } else {
        setSelectedSpecialite(specialite);
      }
    } catch (error) {
      console.error('Erreur chargement plats', error);
    }
  };

  const getImageUrl = (imgName: string) => {
    return `http://localhost:9090/img/${imgName}`;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Les Spécialités</Text>
      {specialites.map((specialite) => (
        <TouchableOpacity key={specialite._id} onPress={() => showPlats(specialite)} style={styles.item}>
          <Image
            source={{ uri: getImageUrl(specialite.specImg) }}
            style={styles.image}
          />
          <Text style={styles.label}>{specialite.name}</Text>
        </TouchableOpacity>
      ))}

      {selectedSpecialite?.plats && (
        <View>
          <Text style={styles.subtitle}>Plats disponibles</Text>
          {selectedSpecialite.plats.map((plat) => (
            <View key={plat._id} style={styles.platItem}>
              <Image source={{ uri: getImageUrl(plat.images) }} style={styles.image} />
              <Text style={styles.label}>{plat.name}</Text>
              <Text>{plat.description}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 20, marginTop: 20, fontWeight: '600' },
  item: { marginBottom: 12, alignItems: 'center' },
  image: { width: 150, height: 100, borderRadius: 8 },
  label: { fontSize: 16, marginTop: 8 },
  platItem: { marginBottom: 20, alignItems: 'center' }
});
