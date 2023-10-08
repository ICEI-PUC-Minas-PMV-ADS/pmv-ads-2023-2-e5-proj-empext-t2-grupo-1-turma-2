import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    backgroundColor:"#ffffff",
  },
  
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10,
  },

  quadrado: {
    padding: 20,
    backgroundColor:'#f2e8e3',
    width: 350,
    //height:200,
    borderRadius:20,
  },

  titulo:{
    fontWeight: 'bold',
    color:'#c05c63',
    fontSize:16,
  },

  detalhes: {
    fontSize:14,
    marginTop: 10,
  },

  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
  },
  containerbutton: {
    flexDirection: "row", // Define o layout da "View" como uma linha horizontal
    justifyContent: "space-between", // Distribui os botões igualmente no espaço disponível
    marginTop: 60,
  },

  button: {
    backgroundColor: "#eddacf",
    padding: 20,
    borderRadius: 8,
    flex: 1, // Para que ambos os botões ocupem a mesma largura
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

  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C05C63",
  },
  register: {
    flex: 1,
    flexDirection: 'row'
  },
  registerText: {
    color: "#C05C63",
    fontWeight: "bold",
  },
  password: {
    alignSelf: "flex-end",
    marginBottom: 7,
    paddingRight: 25
  },
  text: {
    fontSize: 16,
  },
});