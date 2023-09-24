import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import { TextInput } from "react-native-paper";
import Logo from "../Logo/index";
import Statusbar from "../StatusBar";
import NavBar from "../NavBar";
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