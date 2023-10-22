package com.br.pucminas.backend.utils.enums;

public enum StatusPedido {
    RECEBIDO("Pedido recebido. Agaurdando preparação."), 
    EM_PREPARACAO("Em preparação"), 
	EM_ROTA_DE_ENVIO("Em rota de entrega"),
    ENTREGUE("Entregue"),
    FINALIZADO("Finalizado")
    ;

		private final String valor;
		StatusPedido(String valorOpcao){
		valor = valorOpcao;
		}
		public String getValor(){
		return valor;
		}
}
