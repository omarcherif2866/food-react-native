// src/components/Login/login.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { signin } from '@/services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');
const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

const login: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<any>();

  
  const handleChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    return (
      usernamePattern.test(form.username) && form.password.trim().length > 0
    );
  };

const handleSubmit = async () => {
  setSubmitted(true);
  if (!validate()) return;

  try {
    const user = await signin(form.username, form.password);
    console.log('User reçu:', user);

    await AsyncStorage.setItem('token', user.token);
    await AsyncStorage.setItem('user', JSON.stringify(user));
    await AsyncStorage.setItem('login', user.username);
    await AsyncStorage.setItem('id', user.id.toString());

    console.log('Connexion réussie, on redirige...');
    Alert.alert('Succès', 'Connexion réussie !');
    setTimeout(() => {
    router.push('/(tabs)/plats');
    }, 300);

  } catch (err: any) {
    if (err.response?.status === 401) {
      setError('Mot de passe ou nom d\'utilisateur incorrect.');
    } else if (err.response?.status === 404) {
      setError('Utilisateur non trouvé.');
    } else {
      setError('Erreur interne.');
    }
  }
};

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00C896" />
      <LinearGradient
        colors={['#2196F3', '#c10037', '#2196F3']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.container}
      >
        {/* Decorative Elements */}
        <View style={styles.decorativeContainer}>
          <View style={[styles.atom, styles.atom1]} />
          <View style={[styles.atom, styles.atom2]} />
          <View style={[styles.atom, styles.atom3]} />
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle, styles.circle2]} />
        </View>

        {/* Main Content */}
        <View style={styles.contentContainer}>


          {/* Login Form */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>Se connecter</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#B0BEC5"
                value={form.username}
                onChangeText={(text) => handleChange('username', text)}
              />
              {submitted && !form.username && (
                <Text style={styles.errorText}>Nom d'utilisateur requis</Text>
              )}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#B0BEC5"
                secureTextEntry
                value={form.password}
                onChangeText={(text) => handleChange('password', text)}
              />
              {submitted && !form.password && (
                <Text style={styles.errorText}>Mot de passe requis</Text>
              )}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}

            <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text style={styles.linkText}>
                Créer un nouveau compte ?  <Text style={styles.linkTextBold}>S'inscrire</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.linkText}>
                 <Text style={styles.linkTextBold}>Mot de passe oublié ?</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  decorativeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  atom: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  atom1: {
    top: 60,
    left: 50,
    transform: [{ rotate: '15deg' }],
  },
  atom2: {
    top: 120,
    right: 40,
    transform: [{ rotate: '-30deg' }],
  },
  atom3: {
    bottom: 200,
    left: 30,
    transform: [{ rotate: '45deg' }],
  },
  circle: {
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  circle1: {
    width: 100,
    height: 100,
    top: 200,
    right: 20,
  },
  circle2: {
    width: 60,
    height: 60,
    bottom: 300,
    right: 60,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 32,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'rgba(236, 240, 241, 0.8)',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#2C3E50',
    borderWidth: 1,
    borderColor: 'rgba(189, 195, 199, 0.3)',
  },
  loginButton: {
    backgroundColor: '#c10037',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 24,
    shadowColor: '#c10037',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: '#7F8C8D',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 12,
  },
  linkTextBold: {
    color: '#c10037',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },

});