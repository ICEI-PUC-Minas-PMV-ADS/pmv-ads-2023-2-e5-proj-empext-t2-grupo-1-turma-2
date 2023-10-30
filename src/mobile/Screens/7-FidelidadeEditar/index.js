import React from 'react';
import { TextInput, Button } from "react-native-paper";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


function FidelidadeEditar({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  const [id, setId] = useState(itemId); //id do programa de fidelidade
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkFoto, setLinkFoto] = useState("");
  const [listaParticipantes, setListaParticipantes] = useState("");

  useEffect(async () => {
    console.log(otherParam)
    const list = JSON.parse(await AsyncStorage.getItem('programaFidelidade'));
    setId(list.id)
    setDescricao(list.description)
    setTitulo(list.name)  
    setLinkFoto(list.link)
  }, []); 

  const deleteProgramaFidelidade = async () => {
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'https://backend-vq7d276ypa-uc.a.run.app'

    const port = '8080'

    const endpoint = `${host}:${port}/api/v1/promotion-campain/${id}`;

    // await fetch(endpoint,{
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    //   }
    // ).then((response) => 
    //   response.json()
    // ).then(async (responseData) => {
    //   navigation.navigate("MainFidelidade");
    // })
    // .catch( async (error) => {
    //   console.error(error);
    // });

  }

  const editProgramaFidelidade = async () => {
    console.log("Editanto programa de fidelidade.")

    let prodprogramaFidelidade = {
      id: id,
      name: titulo,
      description: descricao,
      imageLink: linkFoto,
    };

    let encoderFidelidade = JSON.stringify(prodprogramaFidelidade);
    console.log(encoderFidelidade)

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'https://backend-vq7d276ypa-uc.a.run.app'

    const port = '8080'

    const endpoint = `${host}:${port}/api/v1/promotion-campain/${id}`;

    console.log(endpoint);
    console.log(encoderFidelidade);

    await fetch(endpoint,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderFidelidade
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      navigation.navigate("MainFidelidade");
    })
    .catch( async (error) => {
      console.error(error);
    });

  }


  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>
        <Statusbar />
        <Logo />
        <Text style={styles.texttop}>Editar Programa de Fidelidade de ID {JSON.stringify(itemId)}</Text>

        <TextInput
          style={styles.input}
          label="Título"
          value={titulo}
          autoCorrect={false}
          onChangeText={(text) => setTitulo(text)}
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"
        />

        <TextInput
          style={styles.inputtextarea}
          label="Descrição"
          value={descricao}
          autoCorrect={false}
          onChangeText={(text) => setDescricao(text)}
          numberOfLines={4}
          multiline
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"
        />


        <TextInput
          style={styles.input}
          label="linkFoto"
          value={linkFoto}
          autoCorrect={false}
          onChangeText={(text) => setLinkFoto(text)}
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"
        />


        <View style={styles.row}>

          {/* Botão Criar novo Programa */}
          <TouchableOpacity style={styles.button} onPress={editProgramaFidelidade}>
            <Text style={styles.text}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          {/* Botão Proglamas Disponiveis */}
          <TouchableOpacity style={styles.button} onPress={deleteProgramaFidelidade}>
            <Text style={styles.text}>Excluir</Text>
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
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#c05c63',
    margin: 30,
    padding: 30,
    marginBottom: 30,
    borderRadius: 20,
  },
  buttonanexaimg: {
    backgroundColor: '#f2e8e3',
    margin: 10,
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
    color: '#000000',
    fontSize: 15,
  },
  texttop: {
    marginTop: 5,
    color: '#c05c63',
    fontWeight: 'bold',
    fontSize: 15,

  },
  textbutton: {
    marginTop: 5,
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',

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

export default FidelidadeEditar;