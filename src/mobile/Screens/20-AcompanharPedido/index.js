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

const PedidosCliente = () => {
  const navigation = useNavigation();

  const EspacoPedido = () => {
    const numeroPedido = 1;
    const nomeCliente = 'Nome do Cliente';
    const dataHoraPedido = '12:00 - 08/10/2023';
    const endereco = 'Rua A, 123, Bairro, Cidade - MG';
    const pagamento = 'Dinheiro';
    const itens = '1 x Mousse, 2 X Palha Italiana';
    const status = 'Em Andamento';
  
    return (
      <View style={styles.quadrado}>
        <Text style={styles.titulo}>Pedido Número:{numeroPedido}</Text>
        <Text style={styles.detalhes}>{nomeCliente}</Text>
        <Text style={styles.detalhes}>{dataHoraPedido}</Text>
        <Text style={styles.detalhes}>Endereço: {endereco}</Text>
        <Text style={styles.detalhes}>Forma de Pagamento: {pagamento}</Text>
        <Text style={styles.detalhes}>{itens}</Text>
        <Text style={styles.detalhes2}>Status: {status}</Text>

        <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>Contato Loja</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>Editar</Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  };
  

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        
      <Logo/>
        <Statusbar />

    <EspacoPedido/>


      </View>
    </ScrollView>


  );
};

export default PedidosCliente;