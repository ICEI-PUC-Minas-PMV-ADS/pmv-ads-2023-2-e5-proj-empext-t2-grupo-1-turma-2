import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Gerencial = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>

      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <DefaultButton text={"Programa de Fidelidade"}  onPress={() => {navigation.navigate('MainFidelidade')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Produtos"}  onPress={() => {navigation.navigate('GerenciaProdutos')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Tela Principal"}  onPress={() => {navigation.navigate('ChooseSweet')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Pedidos"}  onPress={() => {navigation.navigate('ChooseSweet')}} />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Clientes"}  onPress={() => {navigation.navigate('ChooseSweet')}} />
        <Text style={styles.paragraph}> </Text>

      </View>
    </ScrollView>
  );
};

export default Gerencial;