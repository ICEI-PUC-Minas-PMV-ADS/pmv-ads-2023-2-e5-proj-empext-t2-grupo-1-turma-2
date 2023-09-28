import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/1-Login/index";
import Cadastro from "../Screens/2-Cadastro/index";
import ChooseSweet from "../Screens/17-ChooseSweet/index";
import Cabecalho from "../Screens/Cabecalho/index";

//Telas Administrativas de Produtos
import GerenciaProdutos from "../Screens/8-Produtos/index";
import NovoProduto from "../Screens/9-NovoProduto/index";
import Gerencial from "../Screens/3-Gerencial";
import ListaProdutos from "../Screens/10-Produtos/index";
import ExibeProdutos from "../Screens/10-b-ExibicaoProduto/index";
import Produtos from "../Screens/10-Produtos/index";
import ExibeProdutosCategoria from "../Screens/10-c-ExibicaoProdutoCategoria/index";

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
        name="Gerencial"
        component={Gerencial}
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
        name="GerenciaProdutos"
        component={GerenciaProdutos}
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
      
      <Stack.Screen
        name="ListaProdutos"
        component={ListaProdutos}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="ExibeProdutos"
        component={ExibeProdutos}
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
        name="ExibeProdutosCategoria"
        component={ExibeProdutosCategoria}
        options={{
          header: () => null,
        }}
      />

    </Stack.Navigator>
  );
};

export default Main;
