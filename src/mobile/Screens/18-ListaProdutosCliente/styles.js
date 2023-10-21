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
  input:{
    width:"80%",
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 14,
  },
  boxProduto:{
    width:"75%",
  },
  produto:{
    borderRadius: 10,
    backgroundColor:'#f2e8e3',
    alignItems:'center',
    justifyContent:'center'}
});