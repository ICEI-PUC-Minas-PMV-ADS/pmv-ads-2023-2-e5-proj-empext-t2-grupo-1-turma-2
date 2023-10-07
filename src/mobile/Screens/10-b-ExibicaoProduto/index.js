import { ScrollView, View, Text, Image, FlatList } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const ExibeProdutos = () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const retorno = async () => {
    const user = await AsyncStorage.getItem('userData');

    if(JSON.parse(user).isRootUser
){
      navigation.navigate("GerenciaProdutos");
    }else{
      navigation.navigate("ChooseSweet");
    }

  }

  const getParams = async () => {
    
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'http://192.168.0.132'
    const port = '8080' 
    
    
    const endpoint = `${host}:${port}/api/v1/product`;

    let result = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
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
        {isLoading ? <Text>Loading...</Text> : (
          data.map((item) =>
            <View style={styles.box}>
              <Text style={styles.text_recipe}>{item.name}</Text>
              <Text style={styles.text_recipe_secondary}>{item.description}</Text>
              <Text style={styles.text_recipe_secondary}> Categoria: {item.category}</Text>
              <Text style={styles.text_recipe_secondary}> Quantidade: {item.quantity}</Text>
              <Text style={styles.text_recipe_secondary}> Preco:  R${item.price}</Text>
              <Image resizeMode="stretch" source={{ uri: item.link }} style={styles.img} />
            </View>
          )
        )}

        <Text style={styles.paragraph}> </Text>

        <DefaultButton
          text={"Adicionar Produtos"}
          onPress={() => navigation.navigate("NovoProduto")}
        />
      </View>
    </ScrollView>
  );
};

export default ExibeProdutos;




