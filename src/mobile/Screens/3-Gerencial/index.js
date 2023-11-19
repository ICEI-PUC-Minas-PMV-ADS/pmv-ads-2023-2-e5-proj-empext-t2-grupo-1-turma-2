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
import MenuInferior from "../../Components/MenuInferior";

const Gerencial = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.background}>
      <Nav onPress={() => navigation.navigate("Login")} />
      <View style={styles.container}>

        <DefaultButton text={"Programa de Fidelidade"}  onPress={() => {navigation.navigate('MainFidelidade')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Produtos"}  onPress={() => {navigation.navigate('GerenciaProdutos')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Pedidos"}  onPress={() => {navigation.navigate('PedidosAdmin')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Clientes"}  onPress={() => {navigation.navigate('Clientes')}} />
        <Text style={styles.paragraph}> </Text>

      </View>
      <MenuInferior />

    </ScrollView>
  );
};

export default Gerencial;