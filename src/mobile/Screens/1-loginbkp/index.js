import React from 'react';
import { useState } from "react";
import { TextInput, Button, List } from "react-native-paper";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";


function NovoProduto() {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={styles.container}>
        <Statusbar />
        <Logo />        
        <Text style={styles.texttop}>Novo Produto</Text>      

        <TextInput
          style={styles.input}
          label="Título"
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"          
        />

        <TextInput
          style={styles.inputtextarea}
          label="Descrição"
          numberOfLines={4}
          multiline
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"          
        />


        <View>
          <TouchableOpacity style={styles.buttonanexaimg }>          
    
            <Text style={styles.textbuttonImg }>Anexar Imagem</Text>
          </TouchableOpacity>    
        </View>  
        <TextInput
          style={styles.input}
          label="Categoria"
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"          
        />
        <TextInput
          style={styles.input}
          label="Quantidade"
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"          
        />
        <View>
          <TouchableOpacity style={styles.button}>          
            <Text style={styles.textbutton}>Salvar</Text>
          </TouchableOpacity>    
        </View>
        <View>
          <TouchableOpacity style={styles.button}>          
            <Text style={styles.textbutton}>Excluir</Text>
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
    backgroundColor:'#c05c63',
    margin: 30,
    padding: 30,
    marginBottom: 30,
    borderRadius:20,
  },
  
  buttonanexaimg: {  
    backgroundColor:'#f2e8e3', 
    margin: 30,
    padding: 30,
    marginBottom: 30,
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
  textbuttonImg:{
    marginTop:5,
    color:'#c05c63',    
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
    padding: 30,
  },
});

export default NovoProduto;