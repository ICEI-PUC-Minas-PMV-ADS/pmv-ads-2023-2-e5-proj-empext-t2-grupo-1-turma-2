package com.br.pucminas.backend.utils.enums;

public enum SystemErrors {
    ERRO_SEM_ESTOQUE("PRODUTO_FORA_DE_ESTOQUE"),
	ERRO_CRIAR_RECUPERAR_CARRINHO("ERRO_GERAR_RECUPERAR_CARRINHO"),
	ERRO_AO_ADICIONAR_ITEM_AO_CARRINHO("ERRO_AO_ADICIONAR_ITEM_AO_CARRINHO"),
	ERRO_INCONSISTENCIA_CAMPOS_FRONT("DADOS_DE_PEDIDO_INVALIDOS"),
	ERRO_AO_BUSCAR_PEDIDO("ERRO_AO_BUSCAR_PEDIDO"),
	MSG_ERRO_AO_BUSCAR_PEDIDO("Ocorreu um erro interno ao retornar as informações do pedido"),
    MSG_ERRO_INCONSISTENCIA_CAMPOS_FRONT("Dados enviados do frontend são inválidos"),
	MSG_PEDIDO_PROCESSADO_COM_SUCESSO("Pedido registrado com sucesso!"),
	MSG_ERRO_GERA_PEDIDO("Erro ao gerar pedido: "),
    MSG_ERRO_ATUALIZA_PEDIDO("Erro ao atualizar pedido: "),
	MSG_ERRO_USUARIO_NAO_ENCONTRADO("Usuário não encontrado!"),
	MSG_PEDIDO_ATUALIZADO_COM_SUCESSO("Pedido Atualizado com sucesso!"),
    MSG_SEM_ESTOQUE("O produto selecionado não possui estoque disponível para a quantidade selecionada!"),
	MSG_PEDIDO_NAO_ENCOTRADO("Pedido não encontrado!"),
	MSG_CARRINHO_GERADO_SUCESSO("Carrinho gerado/recupedado com sucesso!"),
	MSG_ERRO_PROCESSAMENTO("Erro no processamento"),
	MSG_SUCESSO_PROCESSAMENTO("Sucesso no processamento"),
	MSG_PEDIDO_ENCOTRADO("Pedido encontrado!");

    private final String valor;
		SystemErrors(String str){
		valor = str;
		}
		public String getValor(){
		return valor;
		}
}
