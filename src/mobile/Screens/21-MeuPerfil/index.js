import { useState, useEffect } from "react";
import { View, ScrollView, Text, Alert } from "react-native";
import Logo from "../../Components/Logo";
import { TextInput } from "react-native-paper";
import SaveButton from "../../Components/Buttons/Save";
import DeleteButton from "../../Components/Buttons/Delete";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MenuInferior from "../../Components/MenuInferior";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MeuPerfil = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");
  const [user, setUser] = useState({});

  const getParams = async () => {
    const user = JSON.parse(await AsyncStorage.getItem("userData"));
    console.log(user);
    setUser(user);
    setName(user.name);
    setEmail(user.email);
    setCell(user.cellphone);
    setPlaceholder(user.adress);
  };

  useEffect(() => {
    getParams();
  }, []);

  const updateUser = async () => {

    if(!password){
      Alert.alert("Erro", "Senha não pode ser vazia! Insira a sua senha atual ou crie uma nova senha.");
      return false;
    }




    const userData = {
      name: name,
      email: email,
      phone: cell,
      address: placeholder,
      password: password,
    };

    let encoderUser = JSON.stringify(userData);
    console.log(encoderUser);

    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/user/${user.id}`;

    console.log(endpoint);

    await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: encoderUser,
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
        console.log(`Response: ${JSON.stringify(responseData)}`);
        navigation.navigate("Login");
      })
      .catch(async (error) => {
        console.error(error);
      });
  };

  const deslogaUser = async () => {
    await AsyncStorage.removeItem("userData");
    navigation.navigate("Login");
  }

  const deleteUser = async () => {
    // Para testar, trocar o IP para o IP LAN ou IPV4 da máquina que está rodando o backend
    const host = "http://192.168.0.132";
    const port = "8080";

    const endpoint = `${host}:${port}/api/v1/user/${user.id}`;

    console.log(endpoint);

    await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(async (responseData) => {
        Alert.alert("Sucesso", "Usuário deletado com sucesso!");
        console.log(`Response: ${JSON.stringify(responseData)}`);
        navigation.navigate("Login");
      })
      .catch(async (error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Logo
            onPress={() => {
              navigation.navigate("Sobre");
            }}
          />

          <Text style={styles.paragraph}>
            {"\n"}
            Meu Perfil
          </Text>
        </View>

        <Text style={styles.paragraph}> </Text>

        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="Endereço"
          value={placeholder}
          onChangeText={(placeholder) => setPlaceholder(placeholder)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          backGroundColor="#f2e8e3"
          right={<TextInput.Icon name="key" />}
        />

        <SaveButton text={"Salvar"} onPress={updateUser} />
        <Text></Text>

        <DeleteButton text={"Excluir Conta"} onPress={deleteUser} />
        <Text></Text>

        <SaveButton text={"Deslogar Usuario"} onPress={deslogaUser} />
      </ScrollView>

      <MenuInferior />
    </View>
  );
};

export default MeuPerfil;
