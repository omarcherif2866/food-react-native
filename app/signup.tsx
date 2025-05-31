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
import { signup } from '@/services/auth';
import { router } from 'expo-router';
import { useLayoutEffect } from 'react'; // à ajouter avec les autres imports
import TabLayout from './(tabs)/_layout';

const { width, height } = Dimensions.get('window');
const usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

const SignupScreen: React.FC = () => {
  const [form, setForm] = useState({ username: '', password: '', email: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Se connecter",
    });
  }, [navigation]);

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
    const user = await signup(form.username, form.email, form.password);
    console.log('Utilisateur créé:', user);

    Alert.alert('Succès', 'Compte créé !');
    router.push('/(tabs)/login');
  } catch (err: any) {
    console.error('Erreur signup complète:', err?.response?.data || err.message || err);

    if (err.response?.status === 400 || err.response?.status === 409) {
      setError(err.response.data.message);
    } else {
      setError('Erreur interne: ' + (err.response?.data?.message || err.message || 'Erreur inconnue'));
    }
  }
};


  return (
    <>
      <StatusBar hidden={true} />
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
            <Text style={styles.title}>S'inscrire</Text>

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
                placeholder="Email"
                placeholderTextColor="#B0BEC5"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
              />
              {submitted && !form.email && (
                <Text style={styles.errorText}>Email requis</Text>
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
              <Text style={styles.loginButtonText}>S'inscrire</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(tabs)/login')}>
              <Text style={styles.linkText}>
                J'ai déja un compte ?  <Text style={styles.linkTextBold}>Se connecter</Text>
              </Text>
            </TouchableOpacity>


          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default SignupScreen;

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