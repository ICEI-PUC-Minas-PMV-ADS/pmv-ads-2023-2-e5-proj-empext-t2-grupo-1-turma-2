import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import Logo from "../../Components/Logo";
import { TextInput } from "react-native-paper";
import SaveButton from "../../Components/Buttons/Save";
import DeleteButton from "../../Components/Buttons/Delete";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import Nav from "../../Components/NavBar";


const EditarCliente = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");



  const atualizaPerfil = async () => {

    let user = {
      name: name,
      email: email,
      adress: placeholder,
      password: confirmedPassword,
      zipCode: zipCode,
      cell: cell
    };

    let encoderUser = JSON.stringify(user);
    console.log(encoderUser)
    
    

    
  }

   
return (
     <ScrollView  style={styles.fundo}>
        <Nav onPress={() => navigation.navigate("Clientes")} />
         <View style={styles.container}>  
        <Text style={styles.paragraph}>
        {'\n'}
       Editar Cliente
        </Text>
        

     <TextInput
          style={styles.input}
          label="Nome Cliente"
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
          right={<TextInput.Icon name="key" />}
        />

        <SaveButton
          text={"Salvar"}
          //onPress={MeuPerfil}
        />
        <Text></Text>
        <DeleteButton
          text={"Excluir Conta"}
          
          //onPress={MeuPerfil}
        />
        
        
      </View>
    </ScrollView>
  );
};

export default EditarCliente;