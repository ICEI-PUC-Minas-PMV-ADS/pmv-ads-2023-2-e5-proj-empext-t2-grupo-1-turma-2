import {
    View,
    ScrollView,
    Text,
  } from "react-native";
  import VariantButton from "../../Components/Buttons/Variant/index";
  import Statusbar from '../../Components/StatusBar/index';
  import Logo from "../../Components/Logo/index";
  import { styles } from "./styles";
  
  
  const ChooseSweet = () => {
    return (
      <ScrollView>
      <Statusbar />
        <View style={styles.container}>
          <Statusbar />
          <Logo/>
      
  
          <View style={styles.buttonArea}>
            <VariantButton
              text={"Indispensáveis"}
              onPress={() => console.log("Botão 'indispensaveis' clicado")}
            />
  
            <VariantButton
              text={"Coxinhas Doces"}
              onPress={() => console.log("Botão 'coxinhas doces' clicado")}
            />
          
            <VariantButton
              text={"Copões"}
              onPress={() => console.log("Botão 'copoes' clicado")}
            />
  
            <VariantButton
              text={"Tortinhas"}
              onPress={() => console.log("Botão 'tortinhas' clicado")}
            />
  
            <VariantButton
              text={"Salgados"}
              onPress={() => console.log("Botão 'salgados' clicado")}
            />
  
            <VariantButton
              text={"Bebidas"}
              onPress={() => console.log("Botão 'bebidas' clicado")}
            />
          </View>
        </View>
      </ScrollView>
      );
   };
  
  export default ChooseSweet;