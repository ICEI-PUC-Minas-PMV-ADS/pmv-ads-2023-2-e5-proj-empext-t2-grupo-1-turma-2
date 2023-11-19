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
  text: {
    marginTop: 5,
    color: "#000000",
    fontSize: 15,
  },
  texttop: {
    marginTop: 5,
    color: "#c05c63",
    fontWeight: "bold",
    fontSize: 15,
  },
  textbutton: {
    marginTop: 5,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: "#f2e8e3",
    marginBottom: 14,
  },
  inputtextarea: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 20,
    backgroundColor: "#f2e8e3",
    marginBottom: 14,
    padding: 30,
  },
  dropdown1BtnStyle: {
    width: "30%",
    height: 20,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c05c63",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "center", fontSize: 13 },
  dropdown1DropdownStyle: { backgroundColor: "#FFF" },
  dropdown1RowStyle: { backgroundColor: "#FFF", borderBottomColor: "#C5C5C5" },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "center", fontSize: 13 },

  dropdown1BtnStyle2: {
    width: "30%",
    height: 30,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#c05c63",
  },
});