import { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
} from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import BasicButton from "../../Components/Buttons/Basic";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cabecalho from "../Cabecalho";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const recuperaSenha = async () => {
    console.log("Recuperando conta...");

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "https://anadinizdoceria-back-ff0334c828d0.herokuapp.com";
    const port = "8080";

    if (email == "" || email == null) {
      Alert.alert("Erro", "Digite um e-mail válido");
    }

    const endpoint = `${host}/api/v1/user/recovery-password/${email}`;

    console.log(endpoint);

    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (responseData) => {
        Alert.alert(
          "Sucesso",
          "Um e-mail foi enviado para a sua conta com a nova senha!"
        );
      })
      .catch(async (error) => {
        console.error(error);
      });
  };

  const realizeLogin = async () => {
    let user = {
      email: email,
      password: senha,
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser);

    const host = "https://anadinizdoceria-back-ff0334c828d0.herokuapp.com";
    const port = "8080";

    const endpoint = `${host}/api/v1/user/login`;

    console.log(endpoint);
    console.log(encoderUser);

    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: encoderUser,
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        console.log(`Response: ${JSON.stringify(responseData)}`);
        const result = responseData;
        await AsyncStorage.setItem("userData", JSON.stringify(result));

        if (result.isRootUser) {
          navigation.navigate("Gerencial");
        } else {
          navigation.navigate("ChooseSweet");
        }
      })
      .catch(async (error) => {
        console.log(error);
        Alert.alert("Erro", "Usuário ou senha incorretos");
      });
  };

  const moveToCadastro = () => {
    console.log("acess to moveToCadastro");
    navigation.navigate("Cadastro");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#fff"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(text) => setSenha(text)}
          label="Senha"
          value={senha}
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#fff"
        />
        <BasicButton text={"Entrar"} onPress={realizeLogin} />
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.links} onPress={() => recuperaSenha()}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={styles.links}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Cadastre-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
