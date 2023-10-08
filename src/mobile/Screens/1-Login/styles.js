import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
  container:{
    width: vw(100),
    height: vh(105),
    backgroundColor: "#f2e8e3",
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
  },
  logo:{
  },
  inputs:{
    width: "50%"
  },
  input:{
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  links:{
      color: "#C05C63",
      fontWeight: "bold",
      alignSelf: "center"
    },
});