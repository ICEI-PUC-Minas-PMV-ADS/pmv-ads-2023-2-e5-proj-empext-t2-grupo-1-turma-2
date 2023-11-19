import { useState, useEffect } from "react";
import { View, ScrollView, Text} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import GoBack from "../../Components/Buttons/GoBack";


const Cadastrar = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [zipCode, setZipCode] = useState("");

  let cadastraUsuario = async () => {
    console.log("enter in cadastraUsuario")
    let user = {
      name: name,
      email: email,
      address: placeholder,
      password: confirmedPassword,
      zipCode: zipCode,
      phone: cell
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser)

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = 'http://192.168.0.132'
    const port = '8080' 
    
    const endpoint = `${host}:${port}/api/v1/user`;

    console.log(endpoint);

    await fetch(endpoint,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: encoderUser
      }
    ).then((response) => 
      response.json()
    ).then(async (responseData) => {
      console.log(`Response: ${JSON.stringify(responseData)}`)
      navigation.navigate("Login");
    })
    .catch( async (error) => {
      console.error(error);
    });

  }

  const retorno = async () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <Nav onPress={retorno} />
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) =>setName(name)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          autoCompleteType='email'
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

          <TextInput
          style={styles.input}
          label="Endereço"
          value={placeholder}
          onChangeText={(placeholder) =>setPlaceholder(placeholder)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

        <TextInput
          style={styles.input}
          label="Cep"
          value={zipCode}
          onChangeText={(zipCode) => setZipCode(zipCode)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

         <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Confirmar a Senha"
          secureTextEntry={true}
          value={confirmedPassword}
          onChangeText={(confirmedPassword) =>
            setConfirmedPassword(confirmedPassword)
          }
          mode="outlined"
          activeOutlineColor="#c05c63"
          outlineColor="#c05c63"
        />

        <DefaultButton text={"Cadastrar"}  onPress={cadastraUsuario} />
      </View>
    </ScrollView>
  );
};

export default Cadastrar;
