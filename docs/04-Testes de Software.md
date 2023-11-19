# Planos de Testes de Software

Os requisitos para realização dos testes de software são:

- Aplicativo disponível para utilizar em Android e IOS
- Smartphones (Android e/ou IOS), ou emulador Mobile.
- Conectividade de Internet para acesso ao aplicativo e às plataformas (APISs).

Por meio desse plano de testes serão verificados e validados os requisitos para garantir o bom funcionamento do programa junto ao usuário final. Nosso plano de teste de software tem como foco garantir a confiabilidade e segurança, identificando possíveis erros e falhas durante a sua confecção, ou mesmo depois.
 
### Casos de Testes
Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|Caso de teste 01     | CT 01 - Criar conta de usuário |
|-------|-------------------------
|Requisitos Associados | 	 RF-01 A aplicação deverá permitir a criação de um perfil de usuário.|
|Objetivo do teste| Verificar o sistema de cadastro de usuários |
|Passos |	1) Acessar a aplicação.	2) Clicar em cadastrar. 3) Preencher os campos obrigatórios. 4) Clicar em cadastrar .
|Critérios de êxito| O novo usuário deve ser cadastrado com sucesso. |

|Caso de teste 02     | CT 02 - Visualizar usuários cadastrados no sistema |
|-------|-------------------------
|Requisitos Associados | 	 RF-14 A aplicação deverá permitir que o administrador visualize a lista de clientes.|
|Objetivo do teste| Verificar se o sistema permite visualizar os usuários cadastrados na aplicação. |
|Passos |	1) Acessar a aplicação.	2) Clicar em menu gerencial. 3)Clicar em listar clientes.
|Critérios de êxito| O administrador poderá ver a lista de seus clientes. |

|Caso de teste 03     | CT 03 - Relatório de Compras. |
|-------|-------------------------
|Requisitos Associados | 	 RF-02 A aplicação deverá permitir que  administrador gerencie o relatório de compras.|
|Objetivo do teste|  Verificar se o admnistrador consegue gerenciar o relatório de compras. |
|Passos |	 1) Acessar a aplicação.	2) Clicar em menu gerencial. 3) Clicar em pedidos. 4) Clicar em listar pedidos. |
|Critérios de êxito| O relatório de compras gerado . |

|Caso de teste 04     | CT 04 - Alteração  dos dados de usuários |
|-------|-------------------------
|Requisitos Associados | 	 RF-03 A aplicação deverá permitir a alteração e exclusão dos dados de usuários.
|Objetivo do teste| Verificar se a funcionalidade de alteração e exclusão de dados do usuário esta  esta funcionando adequadamente |
|Passos |	1) Acessar a aplicação. 2) Preencher nome de usuário e senha. 3) Clicar em login. 4) Clicar no ícone usuário no canto inferior esquerdo. 5) Clicar em editar perfil. 6) Clicar em salvar. |
|Critérios de êxito|  As informações do usuário devem ser atualizadas.  |

|Caso de teste 05     | CT 05 - Exclusão  da conta usuário. |
|-------|-------------------------
|Requisitos Associados | 	 RF-15 A aplicação deverá permitir a exclusão de sua conta pelo usuário.|
|Objetivo do teste| Verificar se a funcionalidade  exclusão da conta esta funcionando adequadamente |
|Passos |	1) Acessar a aplicação. 2) Preencher nome de usuário e senha. 3) Clicar em login. 4) Clicar no ícone usuário no canto inferior esquerdo. 5) Clicar em excluir perfil. |
|Critérios de êxito|  Conta usuário excluída.  |

|Caso de teste 06    | CT 06 -  Cadastrar produto |
|-------|-------------------------
|Requisitos Associados | 	 RF-05 A aplicação deverá permitir o cadastro, edição e exclusão de produto.|
|Objetivo do teste| Verificar se a funcionalidade de cadastrar novo produto está funcionando adequadamente. |
|Passos |	1) Acessar a aplicação com o perfil administrador. 2)  Clicar em produtos. 3) Clicar em novo produto. 4) Preencher os campos. 5) Clicar em incluir novo produto.|
|Critérios de êxito| Produto cadastrado. |

|Caso de teste 07    | CT 07 -  Editar produto |
|-------|-------------------------
|Requisitos Associados | 	 RF-05 A aplicação deverá permitir o cadastro, edição e exclusão de produto.|
|Objetivo do teste| Verificar se a funcionalidade de editar produto está funcionando adequadamente. |
|Passos |	1) 1) Acessar a aplicação com o perfil administrador. 2)  Clicar em produtos. 3) Clicar produtos disponíveis. 4) Clicar no produto. 5) Clicar em editar produto.|
|Critérios de êxito| Produto editado. |

|Caso de teste 08    | CT 08 -  Excluir produto |
|-------|-------------------------
|Requisitos Associados | 	 RF-05 A aplicação deverá permitir o cadastro, edição e exclusão de produto.|
|Objetivo do teste| Verificar se a funcionalidade excluir produto está funcionando adequadamente. |
|Passos |	1) Acessar a aplicação com o perfil administrador. 2)  Clicar em produtos. 3) Clicar produtos disponíveis. 4) Clicar no produto. 5) Clicar em excluir produto.|
|Critérios de êxito| Produto excluído. |

|Caso de teste 09    | CT 09 - Pedido ordenado por ordem de chegada, local de entrega e prioridade. |
|-------|-------------------------
|Requisitos Associados | 	 RF-04 A aplicação deverá permitir que os pedidos sejam ordenados por ordem de chegada, local de entrega e prioridade.|
|Objetivo do teste| Verificar se a funcionalidade excluir produto está funcionando adequadamente.|
|Passos |	1) Acessar a aplicação com o perfil administrador. 2) Clicar em Pedidos 3) Clicar em Listar pedidos.|
|Critérios de êxito| Lista com pedidos atualizados na ordem de chegada, local e prioridade . |

|Caso de teste 10    | CT 10 - Busca de produtos. |
|-------|-------------------------
|Requisitos Associados | 	 RF-06 A aplicação deverá permitir  a busca de produtos por categorias.|
|Objetivo do teste| Verificar se a funcionalidade buscar produto está funcionando adequadamente.|
|Passos |	1) Acessar a aplicação. 2) Clicar em produtos 3) Clicar em categoria de produtos.|
|Critérios de êxito| Produtos da categoria escolhida apresentados . |

|Caso de teste 11    | CT 11 - Estoque de Produtos. |
|-------|-------------------------
|Requisitos Associados | 	 RF-09 A aplicação deverá permitir a a visualização da quantidade de produtos em estoque.
|Objetivo do teste| Verificar se a funcionalidade gerencia de estoque de produtos está funcionando adequadamente. |
|Passos |	1) Acessar a aplicação no modo admnistrador. 2) Clicar em produtos 3) Clicar em quantidade de  produtos.|
|Critérios de êxito| Quantidade de produto disponível atualizada . |


|Caso de teste 12     | CT 12 -  Fazer Pedido |
|-------|-------------------------
|Requisitos Associados | 	 RF-10 - A aplicação deverá permitir que os usuários possam fazer pedidos.
|Objetivo do teste| Verificar se o cliente consegue fazer o pedido corretamente. |
|Passos |	1) Acessar a aplicação. 2) Clicar em produtos. 3) Escolher seu produto. 4) Adicionar no carrinho. 5) Clicar em enviar pedido.    |
|Critérios de êxito| Pedido enviado. |

|Caso de teste 13     | CT 13 -  Formas de Pagamento |
|-------|-------------------------
|Requisitos Associados | 	 RF-10 - A aplicação deverá permitir que os usuários escolham as formas de pagamento disponíveis. |
|Passos |	1) Acessar a aplicação. 2) Clicar em produtos. 3) Escolher seu produto. 4) Adicionar no carrinho. 5) Escolher forma de pagamento.   |
|Critérios de êxito| Forma de pagamento escolhida disponível. |

|Caso de teste 14     | CT 14 -  Taxa de entrega |
|-------|-------------------------
|Requisitos Associados | 	 RF-12- A aplicação deverá informar aos usuários os valores das taxas de entrega de acordo com sua localidade. |
|Passos |	1) Acessar a aplicação. 2) Clicar em produtos. 3) Escolher seu produto. 4) Adicionar no carrinho. 5) Visualizar taxa de entrega.   |
|Critérios de êxito| Taxa de entrega correta. |

|Caso de teste 15     | CT 15 -  Fidelização de clientes |
|-------|-------------------------
|Requisitos Associados | 	 RF-13- A aplicação deverá fidelizar os clientes mais frequentes oferecendo benefícios e vantagens. |
|Passos |	1) Acessar a aplicação no modo administrador. 2) Clicar em  programa de fidelidade. |
|Critérios de êxito| Clientes fidelidade corretos. |

|Caso de teste 16      | CT 16  - Compatibilidade com Sistema Android e IOS. |
|-------|-------------------------
|Requisitos Associados | 	 RNF-01 - A aplicação deverá ser compativel com Android e IOS.
|Objetivo do teste| Verificar a compatibilidade com sistemas operacionais diferentes. |
|Passos |	1) Acessar a aplicação em dispositivos Android e IOS .	 |
|Critérios de êxito| A aplicação deve ser compativel com os dois sistemas operacionais. |

 
# Evidências de Testes de Software

Vídeo do teste sendo executado e o resultado obtido disponível em https://youtu.be/6uhKPuJ4zO0
Vídeo do segundo teste executado e o resultado obtido disponível em https://drive.google.com/file/d/1LjzG5YRUYHeaDZ008VdXbgsuNEI8Dvjt/view?usp=sharing
