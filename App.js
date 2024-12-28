// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens'; // Importa enableScreens
import Navigation from './Screens/shared/Navigation'; // Importa el componente Navigation

// Habilita las pantallas nativas
enableScreens(); // Llama a enableScreens aquí

// Componente LoginScreen (puedes moverlo a otro archivo si lo prefieres)
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = () => {
    // Datos de prueba
    const emailPrueba = "usuario@ejemplo.com";
    const passwordPrueba = "contraseña123";

    // Simulación de inicio de sesión
    if (email === emailPrueba && password === passwordPrueba) {
      setMensaje('Autenticación exitosa');
      navigation.navigate('Home'); // Navegar a la pantalla Home
    } else {
      setMensaje('Error: Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.message}>{mensaje}</Text>
    </View>
  );
};

// Componente principal App
export default function App() {
  return (
    <Navigation /> // Utiliza el componente Navigation para manejar la navegación
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red'
  }
});


