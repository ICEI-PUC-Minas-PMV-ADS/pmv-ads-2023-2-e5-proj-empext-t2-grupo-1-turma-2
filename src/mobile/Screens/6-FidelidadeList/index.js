import { ScrollView, View, Text, Image, FlatList } from "react-native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../Components/Logo';
import Statusbar from "../../Components/StatusBar";


const FidelidadeList= () => {

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>
          <Statusbar />
          <Logo />
          <Text style={styles.texttop}>Programas</Text>          
          <Text style={styles.texttop}></Text>          
          
          <View style={styles.box}>
            <Image resizeMode="stretch" source={{ uri: 'https://imgur.com/fyDmo1A.png'  }} style={styles.img} />
            <Text style={styles.text_recipe}>Programa Cliente Recorrente</Text>
            <Text style={styles.text_recipe_secondary}>Quanto mais o cliente compra, maior o desconto</Text>              
          </View>            

        <Text style={styles.paragraph}> </Text>

        <DefaultButton
          text={"Editar"}
          onPress={() => navigation.navigate("FidelidadeEditar")}
        />
      </View>
      
      <Text style={styles.paragraph}> </Text>

      <View style={styles.container}>                  
           
           <View style={styles.box}>
             <Image resizeMode="stretch" source={{ uri: 'https://i.imgur.com/qjjR73R.png'  }} style={styles.img} />
             <Text style={styles.text_recipe}>Programa Cliente Recorrente</Text>
             <Text style={styles.text_recipe_secondary}>Quanto mais o cliente compra, maior o desconto</Text>              
           </View>            

       <Text style={styles.paragraph}> </Text>

       <DefaultButton
         text={"Editar"}
         onPress={() => navigation.navigate("FidelidadeEditar")}
       />
     </View>
     
    </ScrollView>
  );
};

export default FidelidadeList;




