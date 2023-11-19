import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import TelaNovoProduto from '../9-NovoProduto'
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import GoBack from '../../Components/Buttons/GoBack';

function GerenciaProdutos() {
  const navigation = useNavigation();

  const novoProduto = () => {
    console.log("Inserir novo Produto");
    navigation.navigate('NovoProduto');
  }

  const produtosDisponiveis = () => {
    console.log("Listar produtos disponíveis");
    navigation.navigate('ChooseSweet');

  }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <GoBack onPress={() => navigation.navigate("Gerencial")} />

      <View style={styles.container}>
        <Statusbar />
        <Text style={styles.texttop}>Produtos        
        </Text>      
        
        <View style={styles.row}>

          {/* Botão Incluir Produto */}
          <TouchableOpacity style={styles.button} onPress={novoProduto}>          
            <Text style={styles.text}>Incluir Produto</Text>
          </TouchableOpacity>        
        </View>

        <View style={styles.row}>
          {/* Botão Produtos Disponiveis */}
          <TouchableOpacity style={styles.button} onPress={produtosDisponiveis}>          
            <Text style={styles.text}>Produtos Disponíveis</Text>
          </TouchableOpacity>      
        </View>        
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#c05c63',
    margin: 30,
    padding: 15,
    marginBottom: 10,
    borderRadius:30,    
  },
  text:{
    
    color:'#ffffff',
    fontWeight:'bold',
    fontSize:15,

  },
  texttop:{
    marginTop:5,
    color:'#c05c63',
    fontWeight:'bold',
    fontSize:15,

  },
});

export default GerenciaProdutos;