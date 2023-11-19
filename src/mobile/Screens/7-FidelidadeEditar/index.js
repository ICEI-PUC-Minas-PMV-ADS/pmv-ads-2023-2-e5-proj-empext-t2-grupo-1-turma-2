import { useState, useEffect } from "react";

import { TextInput, Button } from "react-native-paper";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import Logo from "../../Components/Logo";
import Statusbar from "../../Components/StatusBar";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import SelectDropdown from "react-native-select-dropdown";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GoBack from '../../Components/Buttons/GoBack';


function FidelidadeEditar({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  const [id, setId] = useState(itemId); //id do programa de fidelidade
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkFoto, setLinkFoto] = useState("");
  const [listaParticipantes, setListaParticipantes] = useState("");
  const [isActive, setisActive] = useState("");

  const activeMethods = ["ATIVO", "INATIVO"];

  useEffect(async () => {
    console.log(otherParam);
    const list = JSON.parse(await AsyncStorage.getItem("programaFidelidade"));
    setId(list.id);
    setDescricao(list.description);
    setTitulo(list.name);
    setLinkFoto(list.link);
    setisActive(list.active ? "ATIVO" : "INATIVO");
  }, []);

  const editProgramaFidelidade = async () => {
    console.log("Editanto programa de fidelidade.");

    let prodprogramaFidelidade = {
      id: id,
      name: titulo,
      description: descricao,
      imageLink: linkFoto,
      active: isActive === "ATIVO",
    };

    let encoderFidelidade = JSON.stringify(prodprogramaFidelidade);
    console.log(encoderFidelidade);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    //const host = 'https://backend-vq7d276ypa-uc.a.run.app'

    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/promotion-campain/${id}`;

    console.log(endpoint);
    console.log(encoderFidelidade);

    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: encoderFidelidade,
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        navigation.navigate("MainFidelidade");
      })
      .catch(async (error) => {
        console.error(error);
      });
  };

  return (
    <ScrollView>
      <GoBack onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <Text style={styles.texttop}>
          Edição de Programa de Fidelidade
        </Text>

        <Text style={styles.paragraph}> </Text>

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

        <Text style={styles.paragraph}> </Text>

        <Text style={styles.detalhes2}>
          Status da campanha
        </Text>

        <SelectDropdown
          data={activeMethods}
          style={{
            width: "30%",
            height: 50,
            backgroundColor: "#FFF",
            borderRadius: 8,
            borderWidth: 1,
            borderColor: "#c05c63",
          }}
          buttonStyle={styles.dropdown1BtnStyle2}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          defaultButtonText={isActive}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            setisActive(selectedItem);
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Editar"} onPress={editProgramaFidelidade} />
        <Text style={styles.paragraph}> </Text>
      </View>
    </ScrollView>
  );
}



export default FidelidadeEditar;
