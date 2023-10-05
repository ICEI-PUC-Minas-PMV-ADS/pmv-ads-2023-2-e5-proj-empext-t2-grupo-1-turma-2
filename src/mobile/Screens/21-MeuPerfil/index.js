import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import Logo from "../../Components/Logo";
import { TextInput } from "react-native-paper";
import SaveButton from "../../Components/Buttons/Save";
import DeleteButton from "../../Components/Buttons/Delete";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';


const MeuPerfil = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");

   
return (
     <ScrollView>
         <View style={styles.container}>
          <Logo />
        
        <Text style={styles.paragraph}>
        {'\n'}
       Meu Perfil
        </Text>
        <p></p>

     <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) =>setName(name)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
         style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

         <TextInput
          style={styles.input}
          label="Endereço"
          value={placeholder}
          onChangeText={(placeholder) =>setPlaceholder(placeholder)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          right={<TextInput.Icon icon="square-edit-outline" />}
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
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          backGroundColor="#f2e8e3"
          left={<TextInput.Icon name="key" />}
        />

       
        <SaveButton
          text={"Salvar"}
          onPress={MeuPerfil}
        />
        <p></p>

        <DeleteButton
          text={"Excluir Conta"}
          onPress={MeuPerfil}
        />
          <p></p>
        
      </View>
    </ScrollView>
  );
};

export default MeuPerfil;