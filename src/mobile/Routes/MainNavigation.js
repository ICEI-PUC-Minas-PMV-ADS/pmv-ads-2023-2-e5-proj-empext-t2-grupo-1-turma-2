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

//Telas Administrativas do programa de fidelidade
import MainFidelidade from "../Screens/4-FidelidadeMain/index";
import FidelidadeNovo from "../Screens/5-FidelidadeNovo/index";
import FidelidadeList from "../Screens/6-FidelidadeList/index";
import FidelidadeEditar from "../Screens/7-FidelidadeEditar/index";

//Telas Administrativas de Pedidos
import Pedidos from "../Screens/13-Pedidos/index";

//Telas Administrativas Clientes
import Clientes from "../Screens/15-ListaClientes/index";
import EditarCliente from "../Screens/16-EditarCliente/index";

//Telas Cliente
import Sobre from "../Screens/22-Sobre/index";
import MeuPerfil from "../Screens/21-MeuPerfil/index";
import MenuInferior from "../Components/MenuInferior/index";

import ListaProdutoCliente from "../Screens/18-ListaProdutosCliente/index";
import PedidosCliente from "../Screens/20-AcompanharPedido/index";
import NewCarrinho from "../Screens/19-b-NewCarrinho/index";
import Carrinho from "../Screens/19-Carrinho/index";

import PedidosAdmin from "../Screens/20-AcompanharPedido-admin/index";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          header: () => null,
        }}
      />

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
        name="MainFidelidade"
        component={MainFidelidade}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="FidelidadeNovo"
        component={FidelidadeNovo}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="FidelidadeList"
        component={FidelidadeList}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="FidelidadeEditar"
        component={FidelidadeEditar}
        initialParams={{ itemId: 1 }}
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

      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Clientes"
        component={Clientes}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="EditarCliente"
        component={EditarCliente}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="MenuInferior"
        component={MenuInferior}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="ListaProdutoCliente"
        component={ListaProdutoCliente}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MeuPerfil"
        component={MeuPerfil}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="NewCarrinho"
        component={NewCarrinho}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="PedidosCliente"
        component={PedidosCliente}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="PedidosAdmin"
        component={PedidosAdmin}
        options={{
          header: () => null,
        }}
        />
    </Stack.Navigator>
  );
};

export default Main;
