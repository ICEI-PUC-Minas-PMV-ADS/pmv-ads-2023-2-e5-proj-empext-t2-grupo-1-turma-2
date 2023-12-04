import { ScrollView, View, Text, Image, FlatList, Linking } from "react-native";
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
  console.disableYellowBox = true;

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
  const [totalPricePerItem, setTotalPricePerItem] = useState([]);

  const paymentMethods = [
    "Cartão de crédito",
    "Cartão de débito",
    "PIX",
    "Dinheiro",
  ];

  const quantityLimit = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ];

  const retorno = async () => {
    const user = await AsyncStorage.getItem('userData');
    if(JSON.parse(user).isRootUser){
      navigation.navigate("Gerencial");
    }else{
      navigation.navigate("ChooseSweet");
    }

  }


  const closeOrder = async () => {
    let orderItems = [];
    for (const element of cart) {
      orderItems.push({
        productId: element.id,
        quantity: element.quantity,
      });
    }

    let order = {
      emailUser: user.email,
      operation: "CRIACAO",
      createdAt: null,
      updatedAt: null,
      paymentMethod: selectedPaymentMethod,
      totalValueOrder: totalWithPercentage,
      itensDoPedido: orderItems,
    };

    let encoderOrder = JSON.stringify(order);
    console.log(encoderOrder);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://anadinizdoceria-back-ff0334c828d0.herokuapp.com";
    const port = "8080";

    const endpoint = `${host}/api/v1/order`;

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
        const msg = `Novo pedido criado com sucesso! `;
        
        console.log(`Response: ${JSON.stringify(responseData)}`);
        await AsyncStorage.setItem("cart", JSON.stringify([]));
        const cell = "5531994543201";
        // Linking.openURL(
        //   `https://api.whatsapp.com/send?phone=${cell}&text=${encoderOrder}`
        // );

        navigation.navigate("PedidosCliente");
      })
      .catch(async (error) => {
        console.error(error);
        navigation.navigate("PedidosCliente");
      });
  };

  const cleanCart = async () => {
    await AsyncStorage.setItem("cart", JSON.stringify([]));
    navigation.navigate("ExibeProdutos");
  }

  const getParams = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("userData"));
    const cart = JSON.parse(await AsyncStorage.getItem("cart"));
    console.log(user);

    let totalValue = 0;
    let totalItems = 0;

    let newPriceList = [];
    console.log(cart);

    cart.forEach((element) => {
      totalValue += element.price * element.quantity;
      totalItems += element.quantity;
    });

    let tax = (totalValue * 20) / 100;
    let totalWithPercentage = totalValue + (totalValue * 20) / 100;

    setTotalItems(totalItems);
    setTotalValue(totalValue);
    setTotalPricePerItem(newPriceList);
    setTotalWithPercentage(totalWithPercentage);
    setTax(tax);
    setUser(user);
    setCart(cart);
    setLoading(false);
  };

  const editCart = async (selectedItem, cartIndex) => {
    console.log("editCard", selectedItem, cartIndex);

    // teste_usuario@email.com
    let value = Number(selectedItem);

    console.log("cart after edit", cart);

    if (value == 0) {
      removeFromCart(item);
    } else {
      cart[cartIndex].quantity = value;
    }

    console.log("cart before edit", cart);

    let totalValue = 0;
    let totalItems = 0;

    cart.forEach((element) => {
      totalValue += element.price * element.quantity;
      totalItems += element.quantity;
    });

    let tax = (totalValue * 20) / 100;
    let totalWithPercentage = totalValue + (totalValue * 20) / 100;

    setTotalItems(totalItems);
    setTotalValue(totalValue);
    setTotalWithPercentage(totalWithPercentage);
    setTax(tax);

    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (index) => {
    cart.pop(index);
  };

  useEffect(async () => {
    await getParams();
  }, []);

  return (
    <ScrollView>
      <Nav onPress={retorno} />

      <View style={styles.container}>
        <Text style={styles.titulo}> Resumo do Pedido</Text>
      </View>

      <Text style={styles.paragraph}> </Text>

      <View style={styles.container}>
      <Text style={styles.paragraph}> </Text>

        <View style={styles.box}>
          <Text style={styles.titulo}>Itens</Text>
          <Text style={styles.paragraph}> </Text>

          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            cart.map((item, cartIndex) => (
              <>
              
                <Text style={styles.subtitulo}>{item.name}</Text>

                <Text style={styles.text_recipe_secondary}>
                  Quantidade Selecionada:
                </Text>
                <Text style={styles.paragraph}> </Text>

                <SelectDropdown
                  data={quantityLimit}
                  style={styles.dropdown}
                  buttonStyle={styles.dropdown1BtnStyle}
                  defaultButtonText={item.quantity}
                  buttonTextStyle={styles.dropdown1BtnTxtStyle}
                  dropdownIconPosition={"right"}
                  dropdownStyle={styles.dropdown1DropdownStyle}
                  rowStyle={styles.dropdown1RowStyle}
                  rowTextStyle={styles.dropdown1RowTxtStyle}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    console.log(selectedItem);
                    editCart(selectedItem, cartIndex);
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, inderx) => {
                    return item;
                  }}
                />

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

              <Text style={styles.text_recipe_secondary}>{user.adress}</Text>

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
              <Text style={styles.titulo}> Forma de pagamento</Text>

              <Text style={styles.paragraph}> </Text>

              <SelectDropdown
                data={paymentMethods}
                style={styles.dropdown}
                buttonStyle={styles.dropdown1BtnStyle2}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
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

        <DefaultButton text={"Limpar Carrinho"} onPress={cleanCart} />

        <Text style={styles.paragraph}> </Text>
        <MenuInferior />
      </View>
    </ScrollView>
  );
};

export default NewCarrinho;
