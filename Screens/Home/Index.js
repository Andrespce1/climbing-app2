// Screens/Home/Index.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.customContainer}>
        <Text style={styles.title}>ESCALADA DEPORTIVA DE IMBABURA</Text>
      </View>
      <View style={styles.carouselContainer}>
        {/* Elementos de texto de prueba en lugar de imágenes */}
        <Text style={styles.carouselText}>Contenido 1</Text>
        <Text style={styles.carouselText}>Contenido 2</Text>
        <Text style={styles.carouselText}>Contenido 3</Text>
        <Text style={styles.carouselText}>Contenido 4</Text>
        <Text style={styles.carouselText}>Contenido 5</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  carouselContainer: {
    flexDirection: 'column', // Cambiado a columna para mostrar texto
    paddingVertical: 20,
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  carouselText: {
    fontSize: 18,
    marginVertical: 10, // Espaciado vertical entre textos
    color: '#555',
  },
});

export default Index;

