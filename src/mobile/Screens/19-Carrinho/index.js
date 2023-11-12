import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Logo from "../../Components/Logo";
import { TextInput } from "react-native-paper";
import SaveButton from "../../Components/Buttons/Save";
import DeleteButton from "../../Components/Buttons/Delete";
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';


const Carrinho = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [cell, setCell] = useState("");
  const [isSelected, setSelected] = useState(false)

   
return (
     <ScrollView style={{backgroundColor:'white'}}>
         <View style={styles.container}>
          <Logo onPress={() => {navigation.navigate('Sobre')}}/>
        
        <Text style={styles.paragraph}>
        {'\n'}
       Carrinho
        </Text>
        

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
          label="Data - Hora Pedido"
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
          label="Forma de Pagamento"
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
          label="Itens + Qualidade"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#eaeaea"
          outlineColor="#eaeaea"
          backGroundColor="#f2e8e3"
          right={<TextInput.Icon name="key" />}
        />
        
        <CheckBox
               title = "Presente"
               checkdIcon="check"
               unchekedIcon = "square-o"
               checkedColor = "green"
               uncheckedColor = "red"
               checked = {isSelected}    
               onPress= {() =>setSelected(!isSelected)}  
        />
       
        <SaveButton
          text={"Enviar Pedido"}
          onPress={MeuPerfil}
        />
        <Text></Text>

        <DeleteButton
          text={"Contato Loja"}
          onPress={MeuPerfil}
        />
        
        
      </View>
    </ScrollView>
  );
};

export default Carrinho;