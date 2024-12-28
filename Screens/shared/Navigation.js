// shared/navigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar todas las pantallas desde sus respectivas carpetas
// Bloque 
// import BloqueAgregarResultados from './Screens/Bloque/AgregarResultados';
// import BloqueAgregarResultadosFinales from './Screens/Bloque/AgregarResultadosFinales';
import BloqueIndex from './Screens/Bloque/Index';
// import BloqueMostrarPDFNuevaPagina from './Screens/Bloque/MostrarPDFNuevaPagina';
// import BloqueMostrarPDFNuevaPaginaC from './Screens/Bloque/MostrarPDFNuevaPaginaC';
// import BloqueTablaPosicionesClasificatoria from './Screens/Bloque/TablaPosicionesClasificatoria';
// import BloqueTablaPosicionesFinales from './Screens/Bloque/TablaPosicionesFinales';
// import BloqueTablaResultados from './Screens/Bloque/TablaResultados';
// import BloqueTablaResultadosFinales from './Screens/Bloque/TablaResultadosFinales'; // Corrige el nombre del archivo
// import BloqueVistaPDFListaResultados from './Screens/Bloque/VistaPDFListaResultados';
// import BloqueVistaPDFListaResultadosC from './Screens/Bloque/VistaPDFListaResultadosC';

// // Club
// import ClubCreate from './Screens/Club/Create';
// import ClubDelete from './Screens/Club/Delete';
// import ClubDetails from './Screens/Club/Details';
// import ClubEdit from './Screens/Club/Edit';
// import ClubIndex from './Screens/Club/Index';

// // Competencia
// import CompetenciaAgregarResultados from './Screens/Competencia/AgregarResultados';
// import CompetenciaCreate from './Screens/Competencia/Create';
// import CompetenciaDelete from './Screens/Competencia/Delete';
// import CompetenciaDetails from './Screens/Competencia/Details';
// import CompetenciaEdit from './Screens/Competencia/Edit';
// import CompetenciaIndex from './Screens/Competencia/Index';
// import CompetenciaResultados from './Screens/Competencia/Resultados';

// // Deportista
// import DeportistaCreate from './Screens/Deportista/Create';
// import DeportistaDelete from './Screens/Deportista/Delete';
// import DeportistaDetails from './Screens/Deportista/Details';
// import DeportistaEdit from './Screens/Deportista/Edit';
// import DeportistaIndex from './Screens/Deportista/Index';

// // DetalleCompetencia
// import DetalleCompetenciaCreate from './Screens/DetalleCompetencia/Create';
// import DetalleCompetenciaDelete from './Screens/DetalleCompetencia/Delete';
// import DetalleCompetenciaDetails from './Screens/DetalleCompetencia/Details';
// import DetalleCompetenciaEdit from './Screens/DetalleCompetencia/Edit';
// import DetalleCompetenciaIndex from './Screens/DetalleCompetencia/Index';
// import DetalleCompetenciaMostrarPDFNuevaPagina from './Screens/DetalleCompetencia/MostrarPDFNuevaPagina';
// import DetalleCompetenciaMostrarPDFNuevaPaginaFinal from './Screens/DetalleCompetencia/MostrarPDFNuevaPaginaFinal';
// import DetalleCompetenciaResultados from './Screens/DetalleCompetencia/resultados';
// import DetalleCompetenciaVistaPDFListaResultados from './Screens/DetalleCompetencia/VistaPDFListaResultados';
// import DetalleCompetenciaVistaPDFListaResultadosFinales from './Screens/DetalleCompetencia/VistaPDFListaResultadosFinales';

// // Dificultad
// import DificultadCompetencialnfo from './Screens/Dificultad/_CompetenciaInfo';
// import DificultadCreate from './Screens/Dificultad/Create';
// import DificultadFinales from './Screens/Dificultad/Finales';
// import DificultadIndex from './Screens/Dificultad/index';
// import DificultadMostrarPDFNuevaPagina from '/Screens/Dificultad/MostrarPDFNuevaPagina';
// import DificultadMostrarPDFNuevaPaginaClas from '/Screens/Dificultad/MostrarPDFNuevaPaginaClas';
// import DificultadVistaPDFListaResultados from '/Screens/Dificultad/VistaPDFListaResultados';
// import DificultadVistaPDFListaResultadosClas from '/Screens/Dificultad/VistaPDFListaResultadosClas';

// // Entrenador
// import EntrenadorCreate from './Screens/Entrenador/Create';
// import EntrenadorDelete from './Screens/Entrenador/Delete';
// import EntrenadorDetails from './Screens/Entrenador/Details';
// import EntrenadorEdit from './Screens/Entrenador/Edit';
// import EntrenadorIndex from './Screens/Entrenador/Index';

// Home
import HomeIndex from '../Screens/Home/index';
// import HomeCompetencias from './Screens/Home/Competencias';
// import HomeResultados from './Screens/Home/Resultados';

// // Juez
// import JuezCreate from './Screens/Juez/Create';
// import JuezDelete from './Screens/Juez/Delete';
// import JuezDetails from './Screens/Juez/Details';
// import JuezEdit from './Screens/Juez/Edit';
// import JuezIndex from './Screens/Juez/Index';

// // PuntajeBloques
// import PuntajeBloquesCreate from './Screens/PuntajeBloques/Create';
// import PuntajeBloquesDelete from './Screens/PuntajeBloques/Delete';
// import PuntajeBloquesDetails from './Screens/PuntajeBloques/Details';
// import PuntajeBloquesEdit from './Screens/PuntajeBloques/Edit';
// import PuntajeBloquesIndex from './Screens/PuntajeBloques/Index';

// // Sede
// import SedeCreate from './Screens/Sede/Create';
// import SedeDelete from './Screens/Sede/Delete';
// import SedeDetails from './Screens/Sede/Details';
// import SedeEdit from './Screens/Sede/Edit';
// import SedeIndex from './Screens/Sede/Index';

// // Usuario
// import UsuarioCreate from './Screens/Usuario/Create';
// import UsuarioDelete from './Screens/Usuario/Delete';
// import UsuarioDetails from './Screens/Usuario/Details';
// import UsuarioEdit from './Screens/Usuario/Edit';
// import UsuarioIndex from './Screens/Usuario/Index';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeIndex} />
      <Tab.Navigator name="Bloque" component={BloqueIndex} />
    </Tab.Navigator>
  )
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}
// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* Bloque */}
//         <Stack.Screen name="Bloque" component={BloqueIndex} />
//         <Stack.Screen name="Agregar Resultados" component={BloqueAgregarResultados} />
//         <Stack.Screen name="Agregar Resultados Finales" component={BloqueAgregarResultadosFinales} />
//         <Stack.Screen name="Mostrar PDF " component={BloqueMostrarPDFNuevaPagina} />
//         <Stack.Screen name="Mostrar PDF Clasificaciones" component={BloqueMostrarPDFNuevaPaginaC} />
//         <Stack.Screen name="Tabla Posiciones Clasificatoria" component={BloqueTablaPosicionesClasificatoria} />
//         <Stack.Screen name="Tabla Posiciones Finales" component={BloqueTablaPosicionesFinales} />
//         <Stack.Screen name="Tabla Resultados" component={BloqueTablaResultados} />
//         <Stack.Screen name="Tabla Resultados Finales" component={BloqueTablaResultadosFinales} />
//         <Stack.Screen name="Vista PDF Lista Resultados" component={BloqueVistaPDFListaResultados} />
//         <Stack.Screen name="Vista PDF Lista Resultados Clasificaciones" component={BloqueVistaPDFListaResultadosC} />

//         {/* Club */}
//         <Stack.Screen name="Club" component={ClubIndex} />
//         <Stack.Screen name="Crear Club" component={ClubCreate} />
//         <Stack.Screen name="Eliminar Club" component={ClubDelete} />
//         <Stack.Screen name="Detalles Del Club" component={ClubDetails} />
//         <Stack.Screen name="Editar Club" component={ClubEdit} />

//         {/* Competencia */}
//         <Stack.Screen name="Competencia" component={CompetenciaIndex} />
//         <Stack.Screen name="Agregar Resultados" component={CompetenciaAgregarResultados} />
//         <Stack.Screen name="Crear Competencia" component={CompetenciaCreate} />
//         <Stack.Screen name="Eliminar Competencia" component={CompetenciaDelete} />
//         <Stack.Screen name="Detalles Competencia" component={CompetenciaDetails} />
//         <Stack.Screen name="Editar Competencia" component={CompetenciaEdit} />
//         <Stack.Screen name="Resultados De La Competencia" component={CompetenciaResultados} />

//         {/* Deportista */}
//         <Stack.Screen name="Deportista" component={DeportistaIndex} />
//         <Stack.Screen name="Crear Deportista" component={DeportistaCreate} />
//         <Stack.Screen name="Eliminar Deportista" component={DeportistaDelete} />
//         <Stack.Screen name="Detalles Deportista" component={DeportistaDetails} />
//         <Stack.Screen name="Editar Deportista" component={DeportistaEdit} />

//         {/* Detalle Competencia */}
//         <Stack.Screen name="Detalle Competencia" component={DetalleCompetenciaIndex} />
//         <Stack.Screen name="Crear Detalle Competencia" component={DetalleCompetenciaCreate} />
//         <Stack.Screen name="Eliminar Detalle Competencia" component={DetalleCompetenciaDelete} />
//         <Stack.Screen name="Detalles Detalle Competencia" component={DetalleCompetenciaDetails} />
//         <Stack.Screen name="Editar Detalle Competencia" component={DetalleCompetenciaEdit} />
//         <Stack.Screen name="Mostrar PDF Detalle Competencia" component={DetalleCompetenciaMostrarPDFNuevaPagina} />
//         <Stack.Screen name="Mostrar PDF Detalle Competencia Final" component={DetalleCompetenciaMostrarPDFNuevaPaginaFinal} />
//         <Stack.Screen name="Resultados Detalle Competencia" component={DetalleCompetenciaResultados} />
//         <Stack.Screen name="Vista PDF Lista Detalle Competencia  Resultados" component={DetalleCompetenciaVistaPDFListaResultados} />
//         <Stack.Screen name="Vista PDF Lista Detalle Competencia  Resultados Finales" component={DetalleCompetenciaVistaPDFListaResultadosFinales} />

//         {/* Dificultad */}
//         <Stack.Screen name="Informacion Dificultad" component={DificultadCompetencialnfo} />
//         <Stack.Screen name="Crear Dificultad" component={DificultadCreate} />
//         <Stack.Screen name="Dificultad Finales" component={DificultadFinales} />
//         <Stack.Screen name="Dificultad" component={DificultadIndex} />
//         <Stack.Screen name="Mostrar PDF Dificultad" component={DificultadMostrarPDFNuevaPagina} />
//         <Stack.Screen name="Mostrar PDF Dificultad Clasificatoria" component={DificultadMostrarPDFNuevaPaginaClas} />
//         <Stack.Screen name="Vista PDF Dificultad Lista Resultados" component={DificultadVistaPDFListaResultados} />
//         <Stack.Screen name="Vista PDF Dificultad Lista Resultados Classificatoria" component={DificultadVistaPDFListaResultadosClas} />

//         {/* Entrenador */}
//         <Stack.Screen name="Entrenador" component={EntrenadorIndex} />
//         <Stack.Screen name="Crear Entrenador" component={EntrenadorCreate} />
//         <Stack.Screen name="Eliminar Entrenador" component={EntrenadorDelete} />
//         <Stack.Screen name="Detalles Entrenador" component={EntrenadorDetails} />
//         <Stack.Screen name="Editar Entrenador" component={EntrenadorEdit} />

//         {/* Home */}
//         <Stack.Screen name="Home" component={HomeIndex} />
//         <Stack.Screen name="Competencias" component={HomeCompetencias} />
//         <Stack.Screen name="Resultados" component={HomeResultados} />

//         {/* Juez */}
//         <Stack.Screen name="Juez Index" component={JuezIndex} />
//         <Stack.Screen name="Juez Create" component={JuezCreate} />
//         <Stack.Screen name="Juez Delete" component={JuezDelete} />
//         <Stack.Screen name="Juez Details" component={JuezDetails} />
//         <Stack.Screen name="Juez Edit" component={JuezEdit} />

//         {/* Puntaje Bloques */}
//         <Stack.Screen name="Puntaje Bloques" component={PuntajeBloquesIndex} />
//         <Stack.Screen name="Crear Puntaje Bloques" component={PuntajeBloquesCreate} />
//         <Stack.Screen name="Eliminar Puntaje Bloques" component={PuntajeBloquesDelete} />
//         <Stack.Screen name="Detalles Puntaje Bloques" component={PuntajeBloquesDetails} />
//         <Stack.Screen name="Editar Puntaje Bloques" component={PuntajeBloquesEdit} />

//         {/* Sede */}
//         <Stack.Screen name="Sede" component={SedeIndex} />
//         <Stack.Screen name="Crear Sede" component={SedeCreate} />
//         <Stack.Screen name="Eliminar Sede" component={SedeDelete} />
//         <Stack.Screen name="Detalles Sede" component={SedeDetails} />
//         <Stack.Screen name="Editar Sede" component={SedeEdit} />

//         {/* Usuario */}
//         <Stack.Screen name="Usuario" component={UsuarioIndex} />
//         <Stack.Screen name="Crear Usuario" component={UsuarioCreate} />
//         <Stack.Screen name="Eliminar Usuario" component={UsuarioDelete} />
//         <Stack.Screen name="Detalles Usuario" component={UsuarioDetails} />
//         <Stack.Screen name="Editar Usuario" component={UsuarioEdit} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// export default AppNavigator;

