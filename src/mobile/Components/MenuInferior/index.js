import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MeuPerfil from '../../Screens/21-MeuPerfil';
import PedidosCliente from '../../Screens/20-AcompanharPedido';
import ChooseSweet from '../../Screens/17-ChooseSweet';
import { styles } from "./styles";


const Tab = createBottomTabNavigator();

function MenuInferior() {
  return (
    
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#C05C63'}, // Define a cor de fundo da barra de navegação
      tabBarLabelStyle: {color: 'white'}, // Cor do ícone da guia ativa
      
    }}>
      <Tab.Screen name="Tela1" component={MeuPerfil} options={{
    tabBarLabel: 'Usuário',
    headerShown: false, // Ocultar o nome da guia na tela
    tabBarIcon: ({ color, size }) => (
    <Ionicons name="person-circle-outline" color={'white'} size={size} />
    ),
  }}/>
      
      <Tab.Screen name="Tela2" component={ChooseSweet} options={{
    tabBarLabel: 'Cardápio',
    headerShown: false, // Ocultar o nome da guia na tela
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="grid-outline" color={'white'} size={size} />
    ),
  }}/>

      <Tab.Screen name="Tela3" component={PedidosCliente} options={{
    tabBarLabel: 'Carrinho',
    headerShown: false, // Ocultar o nome da guia na tela
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="cart-outline" color={'white'} size={size} />
    ),
  }}/>
    </Tab.Navigator>
      
  );
}

export default MenuInferior;