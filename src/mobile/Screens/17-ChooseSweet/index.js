import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Nav from "../../Components/NavBar/index";
import { Ionicons } from '@expo/vector-icons'; // Importe os ícones que deseja usar
import Logo from '../../Components/Logo';
import Doces1 from '../../assets/icons/doces.png';
import Doces2 from '../../assets/icons/coxinhas.png';
import Doces3 from '../../assets/icons/copoes.png';
import Doces4 from '../../assets/icons/tortinhas.png';
import Doces5 from '../../assets/icons/salgados.png';
import Doces6 from '../../assets/icons/bebidas.png';
import { useNavigation } from '@react-navigation/native';

function ChooseSweet() {
  const navigation = useNavigation();

  

  return (
    <ScrollView>
    <Nav onPress={() => navigation.navigate("Gerencial")} />
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Botão 1 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
          <Image source={Doces1} style={styles.image}/>
          <Text style={styles.text}>Indispensáveis</Text>
        </TouchableOpacity>

        {/* Botão 2 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
        <Image source={Doces2} style={styles.image}/>
          <Text style={styles.text}>Coxinhas Doces</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Botão 3 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
        <Image source={Doces3} style={styles.image}/>
          <Text style={styles.text}>Copões</Text>
        </TouchableOpacity>

        {/* Botão 4 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
        <Image source={Doces4} style={styles.image}/>
          <Text style={styles.text}>Tortinhas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Botão 5 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
        <Image source={Doces5} style={styles.image}/>
          <Text style={styles.text}>Salgados</Text>
        </TouchableOpacity>

        {/* Botão 6 */}
        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('ExibeProdutos')}>
        <Image source={Doces6} style={styles.image}/>
          <Text style={styles.text}>Bebidas</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
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
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f2e8e3',
    margin: 10,
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
});

export default ChooseSweet;