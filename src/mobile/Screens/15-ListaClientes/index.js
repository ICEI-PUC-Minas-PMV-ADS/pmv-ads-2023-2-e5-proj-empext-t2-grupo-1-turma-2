import { useState } from "react";
import Nav from "../../Components/NavBar/index";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Clientes = () => {
  const navigation = useNavigation();

  const EspacoCliente = () => {
    const nomeCliente = 'Nome do Cliente';
    const endereco = 'Rua A, 123, Bairro, Cidade - MG';
  
    return (
      <View style={styles.quadrado}>
        <Text style={styles.titulo}>{nomeCliente}</Text>
        <Text style={styles.detalhes}>Endereço: {endereco}</Text>

        <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>Contato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('EditarCliente')}}>
        <Text style={styles.buttonText2}>Editar</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  };
  

  return (
    <ScrollView style={styles.background}>
      <Nav onPress={() => navigation.navigate("Gerencial")} />
      <View style={styles.container}>
        <Statusbar />

    <EspacoCliente/>


      </View>
    </ScrollView>


  );
};

export default Clientes;