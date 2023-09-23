import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../../Components/Logo/index";
import Statusbar from "../../Components/StatusBar";
import NavBar from "../../Components/NavBar";
import { styles } from "./styles";


const Cabecalho = () => {
  return (
    <ScrollView>
    <NavBar />
    <View style={styles.container}>

           
    </View>
    </ScrollView>
  );

};
export default Cabecalho