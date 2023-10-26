import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img:{ width: 150, height: 150,alignContent:'center'},
  text_recipe: { fontSize: 15, fontWeight: 'bold' },
  text_recipe_secondary: { fontSize: 11 },
  box: { alignItems: 'center' },

  texttop:{
    marginTop:5,
    color:'#c05c63',
    fontWeight:'bold',
    fontSize:15,

  },
  containerbutton: {
    flexDirection: "row", // Define o layout da "View" como uma linha horizontal
    justifyContent: "space-between", // Distribui os botões igualmente no espaço disponível
    marginTop: 10,
  },

  button: {
    backgroundColor: "#eddacf",
    padding: 5,
    borderRadius: 8,
    flex: 0.2, // Para que ambos os botões ocupem a mesma largura
    marginHorizontal: 8, // Espaçamento horizontal entre os botões
  },
  button1: {
    backgroundColor: "#c05c63",
    padding: 20,
    borderRadius: 8,
    flex: 1, // Para que ambos os botões ocupem a mesma largura
    marginHorizontal: 8, // Espaçamento horizontal entre os botões
  },
  
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight:"bold",
  },

  buttonText2: {
    color: "#c05c63",
    textAlign: "center",
    fontWeight:"bold",
  },

});