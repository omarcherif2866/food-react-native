import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ou autre pack d'icônes
import ParallaxScrollView from '@/components/ParallaxScrollView';

import { useNavigation } from '@react-navigation/native'; // bien utiliser ce hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { Ingredient } from '@/models/ingredients';
import { getIngredientList } from '@/services/ingredients';
type IngredientsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Ingredients'>;

const Ingredients = () => {
  const [ingredients, setIngredient] = useState<Ingredient[]>([]);
  const navigation = useNavigation<IngredientsScreenNavigationProp>();

  useFocusEffect(
    useCallback(() => {
      fetchIngredients();
    }, [])
  );

  const fetchIngredients = async () => {
    try {
      const ingredientsData = await getIngredientList();
      setIngredient(ingredientsData);
    } catch (error) {
      console.error("Erreur lors du chargement des Ingredients", error);
    }
  };

  const getIngredientsImageUrl = (imgName: string) => {
    return `http://192.168.1.121:9090/img/${imgName}`;
  };

 return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('../../assets/images/ingredient.jpg')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      }>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Liste des ingredients</Text>
      <View style={styles.grid}>
        {ingredients.map((ingredient) => (
          <TouchableOpacity
            key={ingredient._id}
            style={styles.card}
            >
            <Image
              source={{ uri: getIngredientsImageUrl(ingredient.ingImg) }}
              style={styles.image}
            />
            <View style={styles.cardContent}>
              <Text style={styles.platName}>{ingredient.name}</Text>
              <Text style={styles.description}>{ingredient.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

      </ParallaxScrollView>


  );
}

export default Ingredients;

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

});

