import { useState, useEffect } from "react";
import Nav from "../../Components/NavBar/index";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Text,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MenuInferior from "../../Components/MenuInferior";
import SelectDropdown from "react-native-select-dropdown";

const PedidosCliente = () => {
  console.disableYellowBox = true;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const moment = require("moment");
  const [status, setStatus] = useState("");
  const [statusPedidoSelecionado, setStatusPedidoSelecionado] = useState("");
  const [statusPedidoSelecionado2, setStatusPedidoSelecionado2] = useState("");

  const statusPedido = [
    "Pedido Recebido",
    "Em Preparo",
    "Em rota de entrega",
    "Entregue",
    "Finalizado",
    "Cancelado",
  ];

  const getParams = async () => {
    const user = await AsyncStorage.getItem("userData");
    console.log(user);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://backend-vq7d276ypa-uc.a.run.app";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/order?email=${
      JSON.parse(user).email
    }`;

    console.log(endpoint);

    let result = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.length);
    setStatus(result.length == 0 ? false : true);

    setData(result);
    setLoading(false);
  };

  const isRoot = async () => {
    const user = await AsyncStorage.getItem("userData");

    console.log(JSON.parse(user).isRootUser);

    if (JSON.parse(user).isRootUser) {
      return true;
    } else {
      return false;
    }
  };

  const retorno = async () => {
    const user = await AsyncStorage.getItem("userData");
    if (JSON.parse(user).isRootUser) {
      navigation.navigate("Gerencial");
    } else {
      navigation.navigate("ChooseSweet");
    }
  };

  const editaPedido = async (item) => {
    console.log("Editando pedido.");
    console.log(item);
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://backend-vq7d276ypa-uc.a.run.app";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/order/${
      item.id
    }/status/${parseNameToStatus(statusPedidoSelecionado2)}`;

    console.log(endpoint);

    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (responseData) => {})
      .catch(async (error) => {
        console.error(error);
      });
  };

  const contatoLoja = async () => {
    const cell = "5531998325314";
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=${cell}&text=Ola, gostaria de entrar em contato com a loja para falar sobre os meus pedidos!"`
    );
  };

  const buscaPedidos = async () => {
    const user = await AsyncStorage.getItem("userData");
    console.log(user);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://backend-vq7d276ypa-uc.a.run.app";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/order?email=${
      JSON.parse(user).email
    }&status=${parseNameToStatus(statusPedidoSelecionado)}`;

    console.log(endpoint);

    let result = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result.length);
    setStatus(result.length == 0 ? false : true);

    setData(result);
    setLoading(false);
  };

  const parseNameToStatus = (statusName) => {
    switch (statusName) {
      case "Pedido Recebido":
        return "0";
      case "Em Preparo":
        return "1";
      case "Em rota de entrega":
        return "2";
      case "Entregue":
        return "3";
      case "Finalizado":
        return "4";
      case "Cancelado":
        return "5";
      default:
        return "Erro";
    }
  };

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
        <Text style={styles.titulo}>Pedidos</Text>
        <Text style={styles.paragraph}> </Text>

        <SelectDropdown
          data={statusPedido}
          style={styles.dropdown}
          buttonStyle={styles.dropdown1BtnStyle2}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          defaultButtonText={"Selecione o status dos pedidos"}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            setStatusPedidoSelecionado(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />

        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Busca Pedidos"} onPress={buscaPedidos} />
        <Text style={styles.paragraph}> </Text>

        {isLoading ? (
          <Text>Loading...</Text>
        ) : status ? (
          data.map((item) => (
            <>
              <View style={styles.quadrado}>
                <Text style={styles.paragraph}> </Text>

                <Text style={styles.titulo}>Pedido Número: {item.id}</Text>
                <Text style={styles.detalhes}>
                  Nome do Cliente: {item.user.name}
                </Text>
                <Text style={styles.detalhes}>
                  Ultima atualização:{" "}
                  {moment(new Date(Date.parse(item.updatedAt))).format(
                    "DD/MM/YYYY HH:mm:ss"
                  )}
                </Text>
                <Text style={styles.detalhes}>
                  Endereço: {item.user.address}
                </Text>
                <Text style={styles.detalhes}>
                  Forma de Pagamento: {item.paymentMethod}
                </Text>
                <Text style={styles.detalhes}>
                  Valor Total do Pedido:{" "}
                  {item.totalValueOrder.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
                <Text style={styles.detalhes}>{item.productInfo}</Text>

                <Text style={styles.detalhes2}>
                  Status: {parseStatus(item.orderStatus)}
                </Text>

                <Text style={styles.paragraph}> </Text>
              </View>
              <Text style={styles.paragraph}> </Text>
            </>
          ))
        ) : (
          <View style={styles.quadrado_vazio}>
            <Text style={styles.paragraph}> </Text>
            <Text>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Você não possui pedidos
              </Text>
              <Text style={styles.paragraph}> </Text>
            </Text>
          </View>
        )}

        <Text style={styles.paragraph}> </Text>
      </View>

      <Text style={styles.paragraph}> </Text>

      <View style={{ alignContent: "center", alignItems: "center" }}>
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Entrar em Contato com a Loja"} onPress={() => contatoLoja()} />
        <Text style={styles.paragraph}> </Text>
      </View>

      <Text style={styles.paragraph}> </Text>

      <MenuInferior />
    </ScrollView>
  );
};

export default PedidosCliente;
