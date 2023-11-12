import { useState, useEffect } from "react";
import Nav from "../../Components/NavBar/index";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Clientes = () => {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getParams = async () => {
    
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'http://192.168.0.132'
    const port = '8080' 
    
    
    const endpoint = `${host}:${port}/api/v1/user`;

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

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView style={styles.background}>
      <Nav onPress={() => navigation.navigate("Gerencial")} />
      <View style={styles.container}>
        <Statusbar />

        {isLoading ? <Text>Loading...</Text> : (
          data.map((item) =>
          <><View style={styles.quadrado}>
              <Text style={styles.titulo}>{item.name}</Text>
              <Text style={styles.detalhes}>Email: {item.email}</Text>
              <Text style={styles.detalhes}>Endereço: {item.address}</Text>
              <Text style={styles.detalhes}>CEP: {item.zipCode}</Text>

              <View style={styles.containerbutton}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText2}>Contato</Text>
                  <Text style={styles.detalhes}>{item.phone}</Text>
                </TouchableOpacity>
              </View>

            </View><Text style={styles.paragraph}> </Text></>

          )
        )}


      </View>
    </ScrollView>


  );
};

export default Clientes;