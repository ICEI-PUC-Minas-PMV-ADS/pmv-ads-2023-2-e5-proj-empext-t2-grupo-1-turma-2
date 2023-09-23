import { View } from "react-native";
import Login from "../mobile/Screens/Login";
import Cadastro from "../mobile/Screens/Cadastro";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Main from "./src/Routes/MainNavigation";
;

export default function App() {
  return (
    <NavigationContainer>
    <Main />
    </NavigationContainer>
  );
}