import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./Routes/MainNavigation";
import Login from './Screens/1-Login';
import MenuInferior from './Components/MenuInferior';
import Cadastro from './Screens/2-Cadastro';

export default function App() {
  return (
    <NavigationContainer>
    <Main/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

