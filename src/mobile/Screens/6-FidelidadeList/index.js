import { ScrollView, View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";
import GoBack from "../../Components/Buttons/GoBack";


const FidelidadeList = () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getParams = async () => {

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    //const host = 'https://backend-vq7d276ypa-uc.a.run.app'
    const host = 'http://192.168.0.132'
    const port = '8080'

    const endpoint = `${host}:${port}/api/v1/promotion-campain`;

    console.log(endpoint)
    let result = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    result = await result.json();

    console.log(result)
    setData(result);
    setLoading(false);
  };

  const deleteProgramaFidelidade = async (id) => {
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    //const host = 'https://backend-vq7d276ypa-uc.a.run.app'

    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/promotion-campain/${id}`;

    await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (responseData) => {
        navigation.navigate("MainFidelidade");
      })
      .catch(async (error) => {
        console.error(error);
        navigation.navigate("MainFidelidade");
      });
  };

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);


  const editProgramaFidelidade = async (item) => {
    console.log("Editanto programa de fidelidade.")

    let prodprogramaFidelidade = {
      id: item.id,
      name: item.title,
      description: item.description,
      link: item.imageLink,
    };

    await AsyncStorage.setItem('programaFidelidade', JSON.stringify(prodprogramaFidelidade));

    navigation.navigate("FidelidadeEditar", { itemId: item.id });
  }

  return (
    <ScrollView>
      <GoBack onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>

        <Statusbar />
        <Logo />
        <Text style={styles.texttop}>Programas</Text>
        <Text style={styles.texttop}></Text>

        {isLoading ? <Text>Loading...</Text> : (
          data.map((item) =>
            <View style={styles.box}>
              <Text style={styles.paragraph}> </Text>
              <Image resizeMode="stretch" source={{ uri: item.imageLink }} style={styles.img} />
              <Text style={styles.text_recipe}>{item.title}</Text>
              <Text style={styles.text_recipe_secondary}>{item.description}</Text>
              <Text style={styles.text_recipe_secondary}> Status: {item.active? "ATIVO": "INATIVO"}</Text>

              <View style={styles.containerbutton} >
                <TouchableOpacity style={styles.button} onPress={() => editProgramaFidelidade(item)}>
                  <Text style={styles.buttonText2}>Editar</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerbutton} >
                <TouchableOpacity style={styles.button} onPress={() => deleteProgramaFidelidade(item.id)}>
                  <Text style={styles.buttonText2}>Apagar</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.paragraph}> </Text>

            </View>
          )
        )}
      </View>

    </ScrollView>
  );
};

export default FidelidadeList;




