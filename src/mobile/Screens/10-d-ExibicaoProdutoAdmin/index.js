import { ScrollView, View, Text, Image, FlatList, Alert } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import MenuInferior from "../../Components/MenuInferior";

const ExibeProdutosAdmin = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const retorno = async () => {

    if(cart != null){
      await AsyncStorage.setItem("cart", JSON.stringify(cart));
    }

    navigation.navigate("ChooseSweet");
  };


  const editCart = async (item) => {
    console.log(item);
    await AsyncStorage.setItem("item", JSON.stringify(item));
    navigation.navigate("EditaProduto");
  };

  const getParams = async () => {

    const category = await AsyncStorage.getItem('category');
    console.log(category);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://anadinizdoceria-back-ff0334c828d0.herokuapp.com";
    const port = "8080";

    const endpoint = `${host}/api/v1/product?category=${category}`;
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

  useEffect(() => {
    setLoading(true);
    getParams();
  }, []);

  return (
    <ScrollView>
     
     <Nav onPress={retorno} />

     

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
                  text={"Editar Produto"}
                  onPress={async () => await editCart(item)}
                />
              </View>
              <Text style={styles.paragraph}> </Text>
            </>
          ))
        )}

        <Text style={styles.paragraph}> </Text>
        <MenuInferior/>
    </View>
    </ScrollView>
  );
};

export default ExibeProdutosAdmin;
