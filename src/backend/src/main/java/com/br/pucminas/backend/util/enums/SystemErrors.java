package com.br.pucminas.backend.util.enums;

public enum SystemErrors {
    ERRO_SEM_ESTOQUE("PRODUTO_FORA_DE_ESTOQUE"),
	ERRO_INCONSISTENCIA_CAMPOS_FRONT("DADOS_DE_PEDIDO_INVALIDOS"),
    MSG_ERRO_INCONSISTENCIA_CAMPOS_FRONT("Dados enviados do frontend são inválidos"),
	MSG_PEDIDO_PROCESSADO_COM_SUCESSO("Pedido registrado com sucesso."),
	MSG_ERRO_GERA_PEDIDO("Erro ao gerar pedido: "),
    MSG_ERRO_ATUALIZA_PEDIDO("Erro ao atualizar pedido: "),
    MSG_SEM_ESTOQUE("O produto selecionado não possui estoque disponível para a quantidade selecionada!");

    private final String valor;
		SystemErrors(String str){
		valor = str;
		}
		public String getValor(){
		return valor;
		}
}
