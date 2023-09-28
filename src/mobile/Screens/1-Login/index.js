import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const host = 'http://192.168.0.32'
    const port = '8080' 
    
    const endpoint = `${host}:${port}/api/v1/user/login`;

    console.log(endpoint);

    await fetch(endpoint,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderUser
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      console.log(JSON.stringify(responseData))

      let response = responseData
      console.log(`Response: ${JSON.stringify(responseData)}`)


      await AsyncStorage.setItem('userData', JSON.stringify(responseData));
      
      if(response.isRootUser){
        navigation.navigate("Gerencial");
      }else{
        navigation.navigate("ChooseSweet");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  }


  const moveToCadastro = () => {
    console.log("acess to moveToCadastro")
    navigation.navigate('Cadastro')
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"
          left={<TextInput.Icon name="account" />}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
          label="Senha"
          value={senha}
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#FFFFFF"
          outlineColor="#FFFFFF"
          left={<TextInput.Icon name="key" />}
        />
       
        <DefaultButton text={"Entrar"} 
        onPress={realizeLogin} />

        <Text style={styles.paragraph}>
            {'\n'}
        </Text>

         <TouchableOpacity style={styles.password}>
          <Text style={styles.password}> Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text> Não tem conta? </Text>
          <Text
            style={styles.registerText}
            onPress={moveToCadastro}
          >
          Cadastre-se aqui!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;