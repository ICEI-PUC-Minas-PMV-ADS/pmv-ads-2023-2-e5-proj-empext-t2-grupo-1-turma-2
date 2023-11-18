import { useState, useEffect } from "react";
import Nav from "../../Components/NavBar/index";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PedidosCliente = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const moment = require("moment");

  
  const getParams = async () => {
    const user = await AsyncStorage.getItem("userData");
    console.log(user);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/order`;

    console.log(endpoint);

    let result = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    setData(result);
    setLoading(false);
  };

  const retorno = async () => {
    const user = await AsyncStorage.getItem('userData');
    console.log(user)
    if(JSON.parse(user).isRootUser){
      navigation.navigate("Gerencial");
    }else{
      navigation.navigate("ChooseSweet");
    }

  }

  const parseStatus = (statusId) => {
    switch (statusId) {
      case "0":
        return "Pedido Recebido";
      case "1":
        return "Em Preparo";
      case "2":
        return "Em rota de entrega";
      case "3":
        return "Entregue";
      case "4":
        return "Finalizado";
      case "5":
        return "Cancelado";
      default:
        return "Erro";
    }
  };

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView style={styles.background}>
      <Nav onPress={retorno} />
      <View style={styles.container}>
        <Logo
          onPress={() => {
            navigation.navigate("Sobre");
          }}
        />
        <Statusbar />

        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((item) => (
            <>
            <View style={styles.quadrado}>
              <Text style={styles.paragraph}> </Text>

              <Text style={styles.titulo}>Pedido Número:{item.id}</Text>
              <Text style={styles.detalhes}>
                Nome do Cliente: {item.user.name}
              </Text>
              <Text style={styles.detalhes}>
                Ultima atualizacao do Pedido: {moment(item.updatedAt).format("dd.mm.yyyy hh:MM:ss") }
              </Text>
              <Text style={styles.detalhes}>Endereço: {item.user.address}</Text>
              <Text style={styles.detalhes}>
                Forma de Pagamento: {item.paymentMethod}
              </Text>
              <Text style={styles.detalhes}>{item.productInfo}</Text>
              <Text style={styles.detalhes2}>
                Status: {parseStatus(item.orderStatus)}
              </Text>

              <View style={styles.containerbutton}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.buttonText}>Contato Loja</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText2}>Editar</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.paragraph}> </Text>

            </View>
                          <Text style={styles.paragraph}> </Text>
            </>
          ))
        )}
      <Text style={styles.paragraph}> </Text>

      </View>
    </ScrollView>
  );
};

export default PedidosCliente;
