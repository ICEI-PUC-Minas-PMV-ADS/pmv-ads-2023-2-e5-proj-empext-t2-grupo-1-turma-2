import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background:{
    backgroundColor:"#ffffff",
    
  },
  
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent:'center',
    marginTop:150,
    marginBottom: 230,
  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
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