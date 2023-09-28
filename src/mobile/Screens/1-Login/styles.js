import { StyleSheet } from "react-native";

export const styles2 = StyleSheet.create({
  background: {
    backgroundColor: "#f2e8e3"
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 14,
    
  },
  button: {
    width: 263,
    height: 50,
    backgroundColor: "#C05C63",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    borderRadius: 25,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C05C63",
  },
  register: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  registerText: {
    color: "#C05C63",
    fontWeight: "bold",
    margin:10
  },
  text: {
    fontSize: 16,
  },
});

export const styles = StyleSheet.create({

  container:{
    height: "100%",
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