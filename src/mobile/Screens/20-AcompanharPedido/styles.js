import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    backgroundColor:"#ffffff",
    flex:1,
  },
  
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10,
    marginBottom: 50,
  },

  quadrado: {
    padding: 20,
    backgroundColor:'#f2e8e3',
    width: 350,
    //height:200,
    borderRadius:20,
  },

  quadrado_vazio: {
    padding: 20,
    backgroundColor:'#f2e8e3',
    width: 350,
    height:200,
    borderRadius:20,
    marginBottom: 150
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

  containerButton: {
    flex: 1,   
  },
  buttonArea: {
    justifyContent: "center",
    width: 263,
    height: 50,
    backgroundColor: "#c05c63",
    alignItems: "center",
    borderRadius: 25,
  },
  textButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff"
  },


  detalhes2: {
    fontSize:14,
    marginVertical: 20,
    fontWeight:'bold',
    textAlign:'center',
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
    marginTop: 10,
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
  dropdown1BtnStyle: {
    width: '30%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c05c63',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'center', fontSize: 13},
  dropdown1DropdownStyle: {backgroundColor: '#FFF'},
  dropdown1RowStyle: {backgroundColor: '#FFF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'center', fontSize: 13},


  dropdown1BtnStyle2: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c05c63',
  }
});