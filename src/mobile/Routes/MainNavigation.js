import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/1-Login/index";
import Cadastro from "../Screens/2-Cadastro/index";
import ChooseSweet from "../Screens/17-ChooseSweet/index";
import Cabecalho from "../Screens/Cabecalho/index";

//Telas Administrativas de Produtos
import Produtos from "../Screens/8-Produtos/index";
import NovoProduto from "../Screens/9-NovoProduto/index";


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="ChooseSweet"
        component={ChooseSweet}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Cabecalho"
        component={Cabecalho}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Produtos"
        component={Produtos}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="NovoProduto"
        component={NovoProduto}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};

export default Main;
