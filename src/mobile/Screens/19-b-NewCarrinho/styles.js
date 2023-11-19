import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  img: { 
    width: 150, 
    height: 150 
  },
  text_recipe: { 
    fontSize: 15, 
    fontWeight: "bold" 
  },
  text_recipe_secondary: {
    fontSize: 11,
    marginTop: 10,
    marginLeft: 11,
    marginRight: 11,
    alignItem: "center",
  },
  box: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2e8e3",
    width: 350,
    //height:200,
    borderRadius: 20,
  },
  tituloPrincipal: {
    fontWeight: "bold",
    color: "#c05c63",
    fontSize: 20,
  },
  titulo: {
    fontWeight: "bold",
    color: "#c05c63",
    fontSize: 16,
  },
  input:{
    height: 50,
    fontSize: 14,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  subtitulo: {
    fontWeight: "bold",
    color: "#c05c63",
    fontSize: 11,
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
