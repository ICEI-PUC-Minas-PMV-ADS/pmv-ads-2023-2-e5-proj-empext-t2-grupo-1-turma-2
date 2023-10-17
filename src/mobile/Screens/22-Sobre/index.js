import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
<p></p>
Ana Diniz não tinha conhecimento de confeitaria mas tinha persistência, dedicação e vontade de aprender. Seguiu fazendo cursos e aperfeiçoando suas técnicas. Durante 4 anos utilizou a área gourmet do seu pai como sua cozinha.
<p></p>
Desde então sua vida e de sua família estão engajadas nesse projeto e, em 2020, abriu sua loja física, alterou o nome de Ana Diniz Brownies para Ana Diniz Doceria e especializou-se em adoçar vidas através de momentos e experiências únicas.
<p></p>
        Política de privacidade
        <p></p>
        Política de termos e condições
        <p></p>
        Política de entrega
        <p></p>
        Política de trocas e devoluções
        
        </Text>
       
       <Text style={styles.footer}>
        {'\n'}
      Entre em contato
<p></p>
      <MaterialCommunityIcons name="instagram" size={24} color="#c05c63" />

      <Ionicons name="logo-whatsapp" size={24} color="#c05c63" />
       {'\n'}     
     
      Copyright 2023 ©Ana Diniz Doceira
     
        </Text>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f2e8e3',
    margin: 5,
    padding: 15,
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
  }
});

export default Sobre;