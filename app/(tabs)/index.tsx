import { Specialite } from '@/models/specialite';
import { getPlatsBySpeciality } from '@/services/platService';
import { getSpecialiteList } from '@/services/specialiteService';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import  globalStyles  from '../../styles/global';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { LinearGradient } from 'expo-linear-gradient';

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
    return `http://192.168.1.121:9090/img/${imgName}`;
  };

  return (
        <ParallaxScrollView
        headerImage={
          <View style={styles.headerImage}>
            <LinearGradient
              colors={['#374B5C', '#C10037']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill} // le fond couvre tout
            />
            
            <Image
              source={require('../../assets/images/img/banner/banner-img-1.png')}
              style={[styles.bannerImg, styles.img1]}
            />
            <Image
              source={require('../../assets/images/img/banner/banner-img-2.png')}
              style={[styles.bannerImg, styles.img2]}
            />
            <Image
              source={require('../../assets/images/img/banner/banner-img-3.png')}
              style={[styles.bannerImg, styles.img3]}
            />
            <Image
              source={require('../../assets/images/img/banner/banner-img-4.png')}
              style={[styles.bannerImg, styles.img4]}
            />
    <View style={styles.container}>
      {/* Ombre simulée : image décalée, plus grande, plus floue avec opacity */}
      <Image
        source={require('../../assets/images/img/yummy_logo.png')}
        style={[styles.logoShadow]}
        blurRadius={10} // flou natif React Native
      />

      {/* Image normale par dessus */}
      <Image
        source={require('../../assets/images/img/yummy_logo.png')}
        style={styles.logo}
      />
    </View>
          </View>
        }
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      >

<ScrollView contentContainerStyle={[styles.container]}>
  <Text style={[styles.title]}>Les Spécialités</Text>

  {/* ✅ Wrap des spécialités */}
  <View style={styles.specialitesContainer}>
    {specialites.map((specialite) => (
      <TouchableOpacity
        key={specialite._id}
        onPress={() => showPlats(specialite)}
        style={styles.item}
      >
        <Image
          source={{ uri: getImageUrl(specialite.specImg) }}
          style={styles.image}
        />
        <Text style={[globalStyles.label, styles.label]}>{specialite.name}</Text>
      </TouchableOpacity>
    ))}
  </View>

  {/* ✅ Plats sélectionnés */}
  {selectedSpecialite?.plats && (
    <View>
      <Text style={[styles.subtitle]}>Plats disponibles</Text>
      {selectedSpecialite.plats.map((plat, index) => (
        <View key={plat._id ?? `plat-${index}`} style={styles.platItem}>
          <Image source={{ uri: getImageUrl(plat.images) }} style={styles.image} />
          <Text style={[globalStyles.label, styles.label]}>{plat.name}</Text>
          <Text>{plat.description}</Text>
        </View>
      ))}
    </View>
  )}
</ScrollView>

          </ParallaxScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  specialitesContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between', // espace entre les éléments
  gap: 11, // ou utilisez margin sur item si React Native ne supporte pas gap
  },
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 20, marginTop: 20, fontWeight: '600' },
  item: {
  width: '48%', // 2 éléments par ligne avec un petit espace
  marginBottom: 15,
  backgroundColor: '#fff',
  borderRadius: 8,
  overflow: 'hidden',
  alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, // rendu rond
    marginBottom: 8,
    resizeMode: 'cover', // coupe et centre l’image
    overflow: 'hidden', // cache ce qui déborde
    borderWidth: 2,
    borderColor: '#eee',
    // ombre (Android)
    elevation: 4,
    backgroundColor: '#fff', // utile si l’image est transparente
  },

  label: { fontSize: 16, marginTop: 8 },
  platItem: { marginBottom: 20, alignItems: 'center' },
  headerImage: {
    height: 300, // ou selon ton besoin
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImg: {
    position: 'absolute',
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
img1: {
  right: 30,
  top: 60,
  width: 170,
  height: 170,
  zIndex: 1,
},

img2: {
  top: 40,
  right: 150, // plus proche de img1
  width: 80,
  height: 80,
  zIndex: 3, // plus haut que img1
},
img3: {
  bottom: 50,
  right: 160,
  width: 80,
  height: 80,
  zIndex: 3,
},
img4: {
  bottom: 50,
  right: 20,
  width: 70,
  height: 70,
  zIndex: 3,
},
logo: {
  bottom: 20,
  right: 130,
  width: 180,
  height: 180,
  zIndex: 3,
  elevation: 15,
},
  logoShadow: {
    position: 'absolute',
    top: 5,  // léger décalage pour l'ombre
    left: 5,
    width: 180,
    height: 180,
    opacity: 0.5,
  },
});
