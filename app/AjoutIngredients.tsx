import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import { FlatList } from 'react-native';
import { addIngredient, getIngredientList } from '@/services/ingredients';
import { getSpecialiteList } from '@/services/specialiteService';
import { addPlat } from '@/services/platService';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

type AjoutIngredientScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AjoutIngredients'>;

const AjoutIngredients = () => {
const navigation = useNavigation<AjoutIngredientScreenNavigationProp>();
    
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ingImg: null as any,
  });


  useEffect(() => {
  }, []);



  const handleImagePick = async () => {
    // Demander la permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission refusée d'accéder à la galerie");
      return;
    }

    // Ouvrir la galerie
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images', // ✅ Nouvelle syntaxe pour éviter le warning
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setFormData((prev) => ({
        ...prev,
        ingImg: pickerResult.assets[0],
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Validation des champs obligatoires
      if (!formData.name || !formData.description ) {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
        return;
      }

      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      

      // Ajouter l'image si elle existe
      if (formData.ingImg) {
        // Correction pour le FormData avec l'image
        const imageUri = formData.ingImg.uri;
        const fileName = formData.ingImg.fileName || `image_${Date.now()}.jpg`;
        const fileType = formData.ingImg.mimeType || 'image/jpeg';

        data.append('ingImg', {
          uri: imageUri,
          name: fileName,
          type: fileType,
        } as any);
      }

      console.log('Données à envoyer:', {
        name: formData.name,
        description: formData.description,
        hasImage: !!formData.ingImg
      });

      const result = await addIngredient(data);
      Alert.alert('Succès', 'ingredient ajouté avec succès');
      
      // Reset du formulaire
      setFormData({
        name: '',
        description: '',
        ingImg: null,
      });
      
      navigation.navigate({
        name: navigation.getState().routes[navigation.getState().index - 1].name,
        params: { shouldRefresh: true },
        merge: true,
      } as any);
    } catch (error: any) {
      console.error("Erreur ajout ingredient", error);
      
      // Gestion plus détaillée des erreurs
      if (error.response) {
        // Erreur du serveur
        console.error('Réponse du serveur:', error.response.data);
        Alert.alert("Erreur serveur", `Code: ${error.response.status}\n${error.response.data?.message || 'Erreur inconnue'}`);
      } else if (error.request) {
        // Erreur réseau
        console.error('Erreur réseau:', error.request);
        Alert.alert("Erreur réseau", "Impossible de contacter le serveur. Vérifiez votre connexion internet et l'adresse du serveur.");
      } else {
        // Autre erreur
        Alert.alert("Erreur", error.message || "Erreur lors de l'ajout d'ingredient");
      }
    }
  };

  const getImageUrl = (imgName: string) => {
    return `http://192.168.1.121:9090/img/${imgName}`;
  };

return (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ajouter votre ingredients</Text>

      <TextInput
        placeholder="Nom de l'ingredient *"
        value={formData.name}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, name: text }))}
        style={styles.input}
      />

      <TextInput
        placeholder="Description *"
        value={formData.description}
        onChangeText={(text) => setFormData((prev) => ({ ...prev, description: text }))}
        style={styles.input}
        multiline
        numberOfLines={3}
      />

      <Text style={styles.sectionTitle}>Ingrédients</Text>

      {/* Ici tu peux ajouter ta section d'ingrédients directement */}
      {/* Par exemple : */}
      {/* 
      <View style={styles.ingredientsContainer}>
        {ingredients.map((ingredient, index) => (
          <View key={ingredient._id} style={styles.ingredientItem}>
            // Ton contenu d'ingrédient
          </View>
        ))}
      </View>
      */}

      <TouchableOpacity onPress={handleImagePick} style={styles.uploadBtn}>
        <Text>Sélectionner une image</Text>
      </TouchableOpacity>
      
      {formData.ingImg && (
        <Image source={{ uri: formData.ingImg.uri }} style={styles.imagePreview} />
      )}

      <View style={styles.buttonRow}>
        <Button title="Annuler" color="#c10037" onPress={() => navigation.goBack()} />
        <Button title="Ajouter" color="#00aa1c" onPress={handleSubmit} />
      </View>
    </ScrollView>
  </SafeAreaView>
);
  
};

export default AjoutIngredients;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10
  },
  sectionTitle: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  checkboxLabel: {
    marginLeft: 8
  },
  specialiteOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    borderRadius: 6
  },
  specialiteSelected: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  uploadBtn: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    borderRadius: 6
  },
  imagePreview: {
    marginTop: 10,
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  ingredientItem: {
    alignItems: 'center',
    margin: 5,
    width: '22%',
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  ingredientSelected: {
    backgroundColor: '#d1f5d3',
    borderColor: '#4CAF50',
  },
  ingredientImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  ingredientText: {
    fontSize: 12,
    textAlign: 'center',
  },
});