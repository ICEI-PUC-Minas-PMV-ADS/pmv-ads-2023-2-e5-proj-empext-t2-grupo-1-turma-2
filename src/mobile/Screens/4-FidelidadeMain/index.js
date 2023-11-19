import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import GoBack from '../../Components/Buttons/GoBack';

function MainFidelidade() {
  const navigation = useNavigation();

  const novoFidelidade = () => {
    console.log("Inserir novo programa de fidelidade");
    navigation.navigate('FidelidadeNovo');
  }

  const fidelidadeDisponiveis = () => {
    console.log("Listar programas de fidelidade");
    navigation.navigate('FidelidadeList');

  }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <GoBack onPress={() => navigation.navigate("Gerencial")} />
      <View style={styles.container}>
        <Statusbar />
        <Logo />
        <Text style={styles.texttop}>Programa de Fidelidade </Text>              
        <View style={styles.row}>

          {/* Botão Criar novo Programa */}
          <TouchableOpacity style={styles.button} onPress={novoFidelidade}>          
            <Text style={styles.text}>Criar Novo Programa</Text>
          </TouchableOpacity>        
        </View>

        <View style={styles.row}>
          {/* Botão Proglamas Disponiveis */}
          <TouchableOpacity style={styles.button} onPress={fidelidadeDisponiveis}>          
            <Text style={styles.text}>Programas</Text>
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

export default MainFidelidade;