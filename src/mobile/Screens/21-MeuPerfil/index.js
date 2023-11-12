import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import Logo from "../../Components/Logo";
import { TextInput } from "react-native-paper";
import SaveButton from "../../Components/Buttons/Save";
import DeleteButton from "../../Components/Buttons/Delete";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import MenuInferior from "../../Components/MenuInferior";


const MeuPerfil = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");

   
return (
  <View style={styles.container}>
     <ScrollView style={{backgroundColor:'white', flex: 1 }}>
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Logo onPress={() => {navigation.navigate('Sobre')}}/>
          
        <Text style={styles.paragraph}>
        {'\n'}
       Meu Perfil
        </Text>
        </View>

     <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) =>setName(name)}
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
          onChangeText={(placeholder) =>setPlaceholder(placeholder)}
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

       
        <SaveButton
          text={"Salvar"}
          onPress={MeuPerfil}
        />
        <Text></Text>

        <DeleteButton
          text={"Excluir Conta"}
          onPress={MeuPerfil}
        />
         
         </ScrollView>        
      
      
    
        <MenuInferior />
        </View>

   
  );
};

export default MeuPerfil;