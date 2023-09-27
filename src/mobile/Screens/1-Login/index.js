import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import BasicButton from "../../Components/Buttons/Basic";
import { styles } from "./styles";


const Login = () => {

  const realizeLogin = () => {
    console.log("Login realizado com sucesso");
  }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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