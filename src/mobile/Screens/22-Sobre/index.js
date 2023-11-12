import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MenuInferior from '../../Components/MenuInferior';



const Sobre = () => {


 return (
    <View style={styles.container}>
      <Logo/>
    
    <Text style={styles.paragraph}>
        
       Sobre
        </Text>
      

       <View style={styles.row}>
        {/* Botão 1 */}
        <TouchableOpacity style={styles.button1}>
           <Text style={styles.text}>"A arte de viver momentos doces"</Text>
        </TouchableOpacity>
         </View>

         <Text>
        {'\n'}
A Ana Diniz Doceria surgiu no ano de 2016 com a Ana Diniz, que também é professora de inglês, fazendo brownies e doces para presentear seus alunos. Desde então, começou a receber encomendas e conquistou todos com suas experiências e gostosuras.
{'\n'} {'\n'}
Ana Diniz não tinha conhecimento de confeitaria mas tinha persistência, dedicação e vontade de aprender. Seguiu fazendo cursos e aperfeiçoando suas técnicas. Durante 4 anos utilizou a área gourmet do seu pai como sua cozinha.
{'\n'} {'\n'}
Desde então sua vida e de sua família estão engajadas nesse projeto e, em 2020, abriu sua loja física, alterou o nome de Ana Diniz Brownies para Ana Diniz Doceria e especializou-se em adoçar vidas através de momentos e experiências únicas.
{'\n'} {'\n'}
        Política de privacidade
        {'\n'}
        Política de termos e condições
        {'\n'}
        Política de entrega
        {'\n'}
        Política de trocas e devoluções
        
        </Text>
       
       <Text style={styles.footer}>
        {'\n'}
      Entre em contato
      {'\n'}{'\n'}
      <MaterialCommunityIcons name="instagram" size={24} color="#c05c63" 
      
      onPress={() =>
          Linking.openURL("https://www.instagram.com/anadinizdoceria")
       }
     />

      <Ionicons name="logo-whatsapp" size={24} color="#c05c63" 
           onPress={() =>
            Linking.openURL(
                  "https://api.whatsapp.com/send?phone=5531998325314&text=Oi"
                )
             }
          />
       {'\n'} {'\n'}   
     
      Copyright 2023 ©Ana Diniz Doceira
     
        </Text>
        <MenuInferior/>
        </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f2e8e3',
    margin: 5,
    padding: 30,
    borderRadius:20,
  },
  image: {
    width: 70, // Largura da imagem
    height: 70, // Altura da imagem
  },
  text:{
    marginTop:5,
    color:'#c05c63',
    fontWeight:'bold',
    fontSize:15,

  },
  paragraph: {
    fontSize: 16,
    color: "#C05C63",
    fontWeight: "bold",
  },
  footer:{textAlign: 'center'},
});

export default Sobre;