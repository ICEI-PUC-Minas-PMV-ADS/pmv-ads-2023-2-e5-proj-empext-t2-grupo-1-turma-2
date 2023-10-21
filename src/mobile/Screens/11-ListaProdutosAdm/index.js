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
import { TextInput } from "react-native-paper";


function ListaProdutoAdm() {
  
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("MainFidelidade")} />
      <View style={styles.container}>
          <Statusbar />
          <Text style={styles.texttop}>Categoria X</Text>          
          <Text style={styles.texttop}></Text>    
          <TextInput style={styles.input}
          autoCorrect={false}
          label="Procurar"
          mode="outlined"
          activeOutlineColor="#C05C63"
          outlineColor="#C05C63"
          />      
          
          <View style={styles.boxProduto}>
            <View style={styles.produto}>
              <Image resizeMode="stretch" source={{/*caminho da imagem aqui*/}}  style={styles.img} />
            </View>            
              <View style={styles.boxText}>
                <Text >Titulo: </Text>
                <Text ></Text>
              </View>
              <View style={styles.boxText}>
                <Text >Descrição: </Text>
                <Text ></Text>
              </View>
              <View style={styles.boxText}>
                <Text >Quantidade: </Text>
                <Text ></Text>
              </View>
          </View>
      </View>
    </ScrollView>    
  );
}
  
export default ListaProdutoAdm;



