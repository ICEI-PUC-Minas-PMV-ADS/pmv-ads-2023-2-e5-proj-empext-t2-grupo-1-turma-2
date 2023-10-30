import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import BasicButton from "../../Components/Buttons/Basic";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cabecalho from "../Cabecalho";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const realizeLogin = async () => {
    let user = {
      email: email,
      password: senha,
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser)

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'http://192.168.0.132'
    const port = '8080' 
    
    const endpoint = `${host}:${port}/api/v1/user/login`;

    console.log(endpoint);


    try{

      let result = await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: encoderUser
      });
      result = await result.json();
      console.log(result);

      await AsyncStorage.setItem('userData', JSON.stringify(result));
      
      if(result.isRootUser){
        navigation.navigate("Gerencial");
      }else{
        navigation.navigate("ChooseSweet");
      }
    }catch(error){
      console.log(error)
      Alert.alert("Erro", "Usuário ou senha incorretos");
    }r

  }


  const moveToCadastro = () => {
    console.log("acess to moveToCadastro")
    navigation.navigate('Cadastro')
  }


  return (
    <View style={styles.container}>
    <View style={styles.logo}>
      <Logo />
    </View>

    <View style={styles.inputs}>
    <TextInput style={styles.input}
      label="E-mail"
      value={email}
      autoCorrect={false}
      onChangeText={(text) => setEmail(text)}
      mode="outlined"
      activeOutlineColor="#C05C63"
      outlineColor="#fff"
    />

    <TextInput style={styles.input}
      autoCorrect={false}
      onChangeText={(text) => setSenha(text)}
      label="Senha"
      value={senha}
      secureTextEntry={true}
      mode="outlined"
      activeOutlineColor="#C05C63"
      outlineColor="#fff"
    />
    <BasicButton text={"Entrar"} 
    onPress={realizeLogin} />
    </View>

    <View>
    <TouchableOpacity>
      <Text style={styles.links}
        onPress={() => navigation.navigate("RecuperarSenha")}
      >
      Esqueci minha senha</Text>
    </TouchableOpacity>

    <TouchableOpacity>
      <Text style={styles.links}
        onPress={() => navigation.navigate("Cadastro")}
      >
      Cadastre-se</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default Login;