import { ScrollView, View, Text, Image, FlatList, Alert } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import MenuInferior from "../../Components/MenuInferior";

const ExibeProdutos = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAdmin, setAdmin] = useState(false);

  const retorno = async () => {
    const user = await AsyncStorage.getItem("userData");

    if(cart != null){
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
    }


    if (JSON.parse(user).isRootUser) {
      navigation.navigate("GerenciaProdutos");
    } else {
      navigation.navigate("ChooseSweet");
    }
  };

  const closeOrder = async () => {
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)

    navigation.navigate("NewCarrinho")
  }

  const addItemToCart = async (item) => {
    console.log(item);
    console.log(typeof cart);

    let repeated = false;

    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      link: item.link,
      quantity: 1,
    };

    for (const element of cart) {
      if (element.id === product.id) {
        element.quantity += 1;
        repeated = true;
      }
    }

    if (!repeated) {
      cart.push(product);
    }

    await AsyncStorage.setItem("cart", JSON.stringify(cart));
    Alert.alert("Sucesso", "Produto adicionado ao carrinho");
    console.log(cart);
  };

  const getParams = async () => {

    const category = await AsyncStorage.getItem('category');
    const newCart = await AsyncStorage.getItem('cart');

    setCart(JSON.parse(newCart));
    console.log(category, cart);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://anadinizdoceria-back-ff0334c828d0.herokuapp.com";
    const port = "8080";

    const endpoint = `${host}/api/v1/product?category=${category}`;

    console.log(endpoint);
    console.log(cart);

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

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView>
     

      <View style={styles.container}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          data.map((item) => (
            <>
              <View key={item.name} style={styles.box}>
                <Text style={styles.titulo}>{item.name}</Text>
                <Text style={styles.text_recipe_secondary}>
                  {item.description}
                </Text>
                <Text style={styles.text_recipe_secondary}>
                  {" "}
                  {item.category}
                </Text>
                <Text style={styles.text_recipe_secondary}>
                  {" "}
                  Quantidade: 1 unidade (Disponível {
                    item.quantity
                  } Unidades){" "}
                </Text>
                <Text style={styles.text_recipe_secondary}>
                  {" "}
                  PRECO:{" "}
                  {item.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Text>
                <Text style={styles.paragraph}> </Text>
                <Image
                  resizeMode="stretch"
                  source={{ uri: item.link }}
                  style={styles.img}
                />
                <Text style={styles.paragraph}> </Text>

                <DefaultButton
                  text={"Adicionar ao Carrinho"}
                  onPress={async () => await addItemToCart(item)}
                />
              </View>
              <Text style={styles.paragraph}> </Text>
            </>
          ))
        )}
      <Text style={styles.paragraph}> </Text>

        {!isAdmin ? (
          <DefaultButton
            text={"Fechar o Pedido"}
            onPress={closeOrder}
          />
        ) : (
          <DefaultButton
            text={"Adicionar Produtos ao Cardapio"}
            onPress={() => navigation.navigate("NovoProduto")}
          />
        )}

        <Text style={styles.paragraph}> </Text>
        <MenuInferior/>
    </View>
    </ScrollView>
  );
};

export default ExibeProdutos;
