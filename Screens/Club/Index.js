import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const [clubes, setClubes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos (reemplaza con tu lógica de API)
    const clubesData = [
      {
        id: 1,
        nombre: 'Club Ejemplo 1',
        deportistas: [
          { id: 1, nombres: 'Juan', apellidos: 'Pérez' },
          { id: 2, nombres: 'María', apellidos: 'González' },
        ],
      },
      {
        id: 2,
        nombre: 'Club Ejemplo 2',
        deportistas: [
          { id: 3, nombres: 'Pedro', apellidos: 'López' },
          { id: 4, nombres: 'Ana', apellidos: 'García' },
        ],
      },
      // Agrega más clubes según sea necesario
    ];
    setClubes(clubesData);
    setLoading(false);
  }, []);

  const handleCrear = () => {
    navigation.navigate('CrearClub');
  };

  const handleEditar = (idClub) => {
    navigation.navigate('EditarClub', { idClub });
  };

  const handleDetalles = (idClub) => {
    navigation.navigate('DetallesClub', { idClub });
  };

  const handleEliminar = (idClub) => {
    navigation.navigate('EliminarClub', { idClub });
  };

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Listado de Clubes</Text>
      <TouchableOpacity style={styles.botonCrear} onPress={handleCrear}>
        <Text style={styles.botonTexto}>Crear</Text>
      </TouchableOpacity>
      <FlatList
        data={clubes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.club}>
            <Text style={styles.label}>Nombre del Club:</Text>
            <Text style={styles.value}>{item.nombre}</Text>
            <Text style={styles.label}>Deportistas:</Text>
            {item.deportistas.map((deportista, index) => (
              <Text key={index} style={styles.value}>
                {deportista.nombres} {deportista.apellidos}
              </Text>
            ))}
            <View style={styles.botonesContainer}>
              <TouchableOpacity
                style={styles.botonEditar}
                onPress={() => handleEditar(item.id)}
              >
                <Text style={styles.botonTexto}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botonDetalles}
                onPress={() => handleDetalles(item.id)}
              >
                <Text style={styles.botonTexto}>Detalles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botonEliminar}
                onPress={() => handleEliminar(item.id)}
              >
                <Text style={styles.botonTexto}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  botonCrear: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
  club: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  botonEditar: {
    backgroundColor: '#ffc107',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  botonDetalles: {
    backgroundColor: '#17a2b8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  botonEliminar: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default Index;