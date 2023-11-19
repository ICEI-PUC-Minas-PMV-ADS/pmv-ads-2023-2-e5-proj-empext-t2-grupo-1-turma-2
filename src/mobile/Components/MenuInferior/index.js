import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const MenuInferior = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("MeuPerfil")}}>
      <Ionicons name="person-circle-outline" color={'white'} size={20} />
      
        <Text style={styles.label}>Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("ChooseSweet")}}>
      <Ionicons name="grid-outline" color={'white'} size={20} />
        <Text style={styles.label}>Produtos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => {navigation.navigate("PedidosCliente")}}>
      <Ionicons name="receipt-outline" color={'white'} size={20} />
        <Text style={styles.label}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Ionicons name="cart-outline" color={'white'} size={20}  onPress={() => {navigation.navigate("NewCarrinho")}}/>
        <Text style={styles.label}>Carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Ionicons name="document-outline" color={'white'} size={20}  onPress={() => {navigation.navigate("PedidosCliente")}}/>
        <Text style={styles.label}>Pedidos</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C05C63',
    padding: 5,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
});

export default MenuInferior;