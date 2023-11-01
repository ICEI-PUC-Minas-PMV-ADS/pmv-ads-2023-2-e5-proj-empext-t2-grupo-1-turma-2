import React from 'react';
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";


function FidelidadeMovo() {
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkFoto, setLinkFoto] = useState("");


  const addProgramaFidelidade = async () => {
    console.log("Adicionando novo programa de fidelidade.")
    
    let obj = {
      name: titulo,
      description: descricao,
      imageLink: linkFoto
    };

    let encoderFidelidade = JSON.stringify(obj);
    console.log(encoderFidelidade);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    //const host = 'https://backend-vq7d276ypa-uc.a.run.app'
    const host = 'http://192.168.0.32'

    const port = '8080' 
    
    const endpoint = `${host}:${port}/api/v1/promotion-campain`;

    console.log(endpoint);

    await fetch(endpoint,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderFidelidade
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      console.log(JSON.stringify(responseData))

      let response = responseData
      console.log(`Response: ${JSON.stringify(responseData)}`)
r      
      navigation.navigate("MainFidelidade");
    })
    .catch((error) => {
      console.error(error);
    });


  }
  

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <Nav onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>
        <Statusbar />
        <Logo />        
        <Text style={styles.texttop}>Novo Programa de Fidelidade</Text>      

        <TextInput
          style={styles.input}
          label="Título"
          value={titulo}
          autoCorrect={false}
          onChangeText={(text) => setTitulo(text)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"          
        />

        <TextInput
          style={styles.inputtextarea}
          label="Descrição"
          value={descricao}
          autoCorrect={false}
          onChangeText={(text) => setDescricao(text)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"          
        />


        <TextInput
          style={styles.input}
          label="linkFoto"
          value={linkFoto}
          autoCorrect={false}
          onChangeText={(text) => setLinkFoto(text)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"          
        />  
      
        {/* Botão Produtos Disponiveis */}
        <TouchableOpacity style={styles.button} onPress={addProgramaFidelidade}>          
          <Text style={styles.textbutton}>Criar novo programa</Text>
        </TouchableOpacity>      
      

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
    padding: 30,
    marginBottom: 30,
    borderRadius:20,    
  },
  buttonanexaimg: {    
    backgroundColor:'#f2e8e3',    
    margin: 10,
    padding: 10,
    marginBottom: 15,
    borderRadius:20,    
  },
  text:{
    marginTop:5,
    color:'#000000',    
    fontSize:15,
  },
  texttop:{
    marginTop:5,
    color:'#c05c63',
    fontWeight:'bold',
    fontSize:15,

  },
  textbutton:{
    marginTop:5,
    color:'#ffffff',    
    fontSize:15,
    fontWeight:'bold',

  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: "#f2e8e3",
    marginBottom: 14,
  },
  inputtextarea: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: "#f2e8e3",
    marginBottom: 14,
    paddingBottom: 30,
  },
});

export default FidelidadeMovo;