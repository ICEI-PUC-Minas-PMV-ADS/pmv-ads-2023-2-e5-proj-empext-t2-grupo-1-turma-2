import { ScrollView, View, Text, Image, FlatList } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import MenuInferior from "../../Components/MenuInferior";
import SelectDropdown from "react-native-select-dropdown";
import { v4 as uuid } from "uuid";

const NewCarrinho = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [totalWithPercentage, setTotalWithPercentage] = useState(0);
  const [tax, setTax] = useState(0);

  const paymentMethods = [
    "Cartão de crédito",
    "Cartão de débito",
    "PIX",
    "Dinheiro",
  ];

  const retorno = async () => {
    navigation.navigate("ExibeProdutos");
  };

  const closeOrder = async () => {
    let orderId = Math.floor(Math.random() * 1000);
    let orderItems = [];
    for (const element of cart) {
      orderItems.push({
        productId: element.id,
        orderItenId: orderId,
        productDesc: element.description,
        imageLink: element.link,
        price: element.price,
        productQuantity: element.quantity,
      });
    }

    let order = {
      id: orderId,
      operacao: "Novo",
      serverResponseMessage: "202",
      userId: user.id,
      dataHoraPedido: null,
      formaPagamento: selectedPaymentMethod,
      statusPedido: "0",
      valorTotalPedido: totalWithPercentage,
      clientMail: user.email,
      itensDoPedido: orderItems,
    };

    let encoderOrder = JSON.stringify(order);
    console.log(encoderOrder);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/order`;

    console.log(endpoint);

    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: encoderOrder,
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        console.log(`Response: ${JSON.stringify(responseData)}`);
        navigation.navigate("Pedidos");
      })
      .catch(async (error) => {
        console.error(error);
        navigation.navigate("Pedidos");

      });
  };

  const getParams = async () => {
    const user = await AsyncStorage.getItem("userData");
    const cart = await AsyncStorage.getItem("cart");
    console.log(JSON.parse(user));
    setUser(JSON.parse(user));
    setCart(JSON.parse(cart));
    setLoading(false);

    let totalValue = 0;
    let totalItems = 0;

    console.log(cart);

    JSON.parse(cart).forEach((element) => {
      totalValue += element.price * element.quantity;
      totalItems += element.quantity;
    });

    let tax = (totalValue * 20) / 100;
    let totalWithPercentage = totalValue + (totalValue * 20) / 100;

    setTotalItems(totalItems);
    setTotalValue(totalValue);
    setTotalWithPercentage(totalWithPercentage);
    setTax(tax);
  };

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView>
      <Nav onPress={retorno} />

      <View style={styles.container}>
        <Text style={styles.titulo}> Resumo do Pedido</Text>
      </View>

      <Text style={styles.paragraph}> </Text>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.titulo}>Resumo de Itens</Text>
          <Text style={styles.paragraph}> </Text>

          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            cart.map((item, index) => (
              <>
                <Text id={index} style={styles.subtitulo}>{item.name}</Text>

                <Text style={styles.text_recipe_secondary}>
                  {" "}
                  Quantidade Selecionada: {item.quantity}
                </Text>
                <Text style={styles.text_recipe_secondary}>
                  {" "}
                  Valor:{" "}
                  {(item.price * Number(item.quantity)).toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </Text>
                <Text style={styles.paragraph}> </Text>
                <Image
                  resizeMode="stretch"
                  source={{ uri: item.link }}
                  style={styles.img}
                />
                <Text style={styles.paragraph}> </Text>

                <Text style={styles.paragraph}> </Text>
              </>
            ))
          )}
        </View>

        <Text style={styles.paragraph}> </Text>

        <View style={styles.box}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <Text style={styles.titulo}> Endereço de Entrega</Text>

              <Text style={styles.text_recipe_secondary}>user.address</Text>

              <Text style={styles.paragraph}> </Text>
            </>
          )}
        </View>

        <Text style={styles.paragraph}> </Text>

        <View style={styles.box}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <Text style={styles.titulo}> Resumo de Valores</Text>

              <Text style={styles.text_recipe_secondary}>
                Subtotal:{" "}
                {totalValue.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>

              <Text style={styles.text_recipe_secondary}>
                Taxa de entrega:{" "}
                {tax.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>

              <Text style={styles.text_recipe_secondary}>
                Total:{" "}
                {totalWithPercentage.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Text>

              <Text style={styles.paragraph}> </Text>
            </>
          )}
        </View>

        <Text style={styles.paragraph}> </Text>

        <View style={styles.box}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <Text style={styles.titulo}> Metodo de pagamento</Text>

              <SelectDropdown
                data={paymentMethods}
                style={styles.input}
                defaultButtonText={"Selecione o método de pagamento"}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  setSelectedPaymentMethod(selectedItem);
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
            </>
          )}
        </View>
        <Text style={styles.paragraph}> </Text>

        <DefaultButton text={"Confirmar o Pedido"} onPress={closeOrder} />

        <Text style={styles.paragraph}> </Text>
      </View>
      {/* <View>
        <MenuInferior />
      </View> */}
    </ScrollView>
  );
};

export default NewCarrinho;
