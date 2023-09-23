import { useState, useEffect } from "react";
import { View, ScrollView, Text} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";


const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />
        
        <Text style={styles.paragraph}>
        {'\n'}
       Cadastro
        </Text>

        <Text style={styles.paragraph}>
        {'\n'}
        </Text>

        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) =>setName(name)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          borderRadius= "25"
        />

          <TextInput
          style={styles.input}
          label="Endereço"
          value={placeholder}
          onChangeText={(placeholder) =>setPlaceholder(placeholder)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
        />

         <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
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
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
        />

        <DefaultButton text={"Cadastrar"}  onPress={Registration} />
      </View>
    </ScrollView>
  );
};

export default Registration;
