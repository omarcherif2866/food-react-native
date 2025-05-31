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
import { getIngredientList } from '@/services/ingredients';
import { getSpecialiteList } from '@/services/specialiteService';
import { addPlat } from '@/services/platService';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/type';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { router } from 'expo-router';


type AjoutPlatScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AjoutPlat'>;

const AjoutPlats = () => {
const navigation = useNavigation<AjoutPlatScreenNavigationProp>();
    
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    timeOfCook: '',
    withIngredients: [] as string[],
    specialite: '',
    image: null as any,
  });

  const [ingredients, setIngredients] = useState<any[]>([]);
  const [specialites, setSpecialites] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const fetchIngredients = async () => {
    try {
      return await getIngredientList();
    } catch (error) {
      console.error("Erreur ingrédients", error);
      return [];
    }
  };

  const fetchSpecialites = async () => {
    try {
      return await getSpecialiteList();
    } catch (error) {
      console.error("Erreur spécialités", error);
      return [];
    }
  };

  const fetchData = async () => {
    const ing = await fetchIngredients();
    const spec = await fetchSpecialites();
    setIngredients(ing);
    setSpecialites(spec);
  };

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => {
      const exists = prev.withIngredients.includes(id);
      return {
        ...prev,
        withIngredients: exists
          ? prev.withIngredients.filter(i => i !== id)
          : [...prev.withIngredients, id],
      };
    });
  };

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
        image: pickerResult.assets[0],
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Validation des champs obligatoires
      if (!formData.name || !formData.description || !formData.timeOfCook || !formData.specialite) {
        Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
        return;
      }

      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('timeOfCook', formData.timeOfCook);
      data.append('specialite', formData.specialite);
      
      // Ajouter les ingrédients - convertir le tableau en string
      if (formData.withIngredients.length > 0) {
        data.append('withIngredients', formData.withIngredients.join(','));
      }

      // Ajouter l'image si elle existe
      if (formData.image) {
        // Correction pour le FormData avec l'image
        const imageUri = formData.image.uri;
        const fileName = formData.image.fileName || `image_${Date.now()}.jpg`;
        const fileType = formData.image.mimeType || 'image/jpeg';

        data.append('images', {
          uri: imageUri,
          name: fileName,
          type: fileType,
        } as any);
      }

      console.log('Données à envoyer:', {
        name: formData.name,
        description: formData.description,
        timeOfCook: formData.timeOfCook,
        specialite: formData.specialite,
        withIngredients: formData.withIngredients,
        hasImage: !!formData.image
      });

      const result = await addPlat(data);
      Alert.alert('Succès', 'Plat ajouté avec succès');
      
      // Reset du formulaire
      setFormData({
        name: '',
        description: '',
        timeOfCook: '',
        specialite: '',
        withIngredients: [],
        image: null,
      });
      
      router.push('/(tabs)/plats');

    } catch (error: any) {
      console.error("Erreur ajout plat", error);
      
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
        Alert.alert("Erreur", error.message || "Erreur lors de l'ajout du plat");
      }
    }
  };

  const getImageUrl = (imgName: string) => {
    return `http://192.168.1.121:9090/img/${imgName}`;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={ingredients}
        keyExtractor={(item) => item._id}
        numColumns={4}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Ajouter votre Plat</Text>

            <TextInput
              placeholder="Nom du plat *"
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

            <TextInput
              placeholder="Temps de préparation (min) *"
              value={formData.timeOfCook}
              onChangeText={(text) => setFormData((prev) => ({ ...prev, timeOfCook: text }))}
              style={styles.input}
            />

            <Text style={styles.sectionTitle}>Ingrédients</Text>
          </>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.ingredientItem,
              formData.withIngredients.includes(item._id) && styles.ingredientSelected,
            ]}
            onPress={() => handleCheckboxChange(item._id)}
          >
            <Image source={{ uri: getImageUrl(item.ingImg) }} style={styles.ingredientImage} />
            <Text style={styles.ingredientText}>{item.name}</Text>

          </TouchableOpacity>
          
        )}
        
        ListFooterComponent={
          <>
            <Text style={{ textAlign: 'center', marginVertical: 10, color: '#c10037' }}>
            Si vous n'avez pas trouvé votre ingrédient,{' '}
            <Text
                style={{ color: '#007bff', fontWeight: 'bold' }}
                onPress={() => navigation.navigate('AjoutIngredients')}
            >
                vous pouvez les ajouter
            </Text>
            .
            </Text>

            <Text style={styles.sectionTitle}>Spécialité *</Text>
            {specialites.map((spec) => (
              <TouchableOpacity
                key={spec._id}
                style={[
                  styles.specialiteOption,
                  formData.specialite === spec._id && styles.specialiteSelected,
                ]}
                onPress={() => setFormData((prev) => ({ ...prev, specialite: spec._id }))}
              >
                <Text>{spec.name}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity onPress={handleImagePick} style={styles.uploadBtn}>
              <Text>Sélectionner une image</Text>
            </TouchableOpacity>
            {formData.image && (
              <Image source={{ uri: formData.image.uri }} style={styles.imagePreview} />
            )}

            <View style={styles.buttonRow}>
              <Button title="Annuler" color="#c10037" onPress={() => navigation.goBack()} />
              <Button title="Ajouter" color="#00aa1c" onPress={handleSubmit} />
            </View>
          </>
        }
      />
      
    </SafeAreaView>
    
  );
  
};

export default AjoutPlats;

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