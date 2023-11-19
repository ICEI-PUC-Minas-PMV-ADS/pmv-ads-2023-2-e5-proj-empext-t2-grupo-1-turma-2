package com.br.pucminas.backend.utils.enums;

public enum StatusPedido {
    RECEBIDO("0"),
    EM_PREPARACAO("1"),
	EM_ROTA_DE_ENVIO("2"),
    ENTREGUE("3"),
    FINALIZADO("4")
    ;

		private final String valor;
		StatusPedido(String valorOpcao){
		valor = valorOpcao;
		}
		public String getValor(){
		return valor;
		}
}
