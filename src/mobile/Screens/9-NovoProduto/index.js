import React from 'react';
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import Nav from "../../Components/NavBar/index";

import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import { useNavigation } from '@react-navigation/native'


function NovoProduto() {
  const navigation = useNavigation();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [linkFoto, setLinkFoto] = useState("");
  const [preco, setPreco] = useState("");


  const addProduto = async () => {
    console.log("enter in addProduto")
    
    let product = {
      name: titulo,
      description: descricao,
      category: categoria,
      quantity: quantidade,
      link: linkFoto,
      price: Number(preco)
    };

    let encoderProduct = JSON.stringify(product);
    console.log(encoderProduct)

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'https://backend-vq7d276ypa-uc.a.run.app'
    
    const endpoint = `${host}/api/v1/product`;

    console.log(endpoint);

    await fetch(endpoint,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderProduct
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      console.log(`Response: ${JSON.stringify(responseData)}`)
      navigation.navigate("GerenciaProdutos");
    })
    .catch( async (error) => {
      console.error(error);
    });

  }
  

  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <Nav onPress={() => navigation.navigate("Gerencial")} />
      <View style={styles.container}>
        <Statusbar />

        <Text style={styles.texttop}>Novo Produto</Text>      

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

      <TextInput
          style={styles.input}
          label="Categoria"
          value={categoria}
          autoCorrect={false}
          onChangeText={(text) => setCategoria(text)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"          
        />        

        <TextInput
          style={styles.input}
          label="Quantidade"
          value={quantidade}
          autoCorrect={false}
          onChangeText={(text) => setQuantidade(text)}                    
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"                    
        />

        <TextInput
          style={styles.input}
          label="Preço"
          value={preco}
          autoCorrect={false}
          onChangeText={(text) => setPreco(text)}                    
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"                    
        />
        
        {/* Botão Produtos Disponiveis */}
        <TouchableOpacity style={styles.button} onPress={addProduto}>          
          <Text style={styles.textbutton}>Incluir Novo Produto</Text>
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
    padding: 20,
    marginBottom: 30,
    borderRadius:30,    
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

export default NovoProduto;