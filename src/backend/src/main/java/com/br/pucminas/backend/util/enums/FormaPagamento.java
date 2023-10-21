package com.br.pucminas.backend.util.enums;

public enum FormaPagamento {
    Cartao_Credito_Master("Master Card"), 
    Cartao_Credito_Visa("Visa"), 
	Pagar_Na_Entrega_Dinheiro("Pagar na Entrega - Dinheiro"),
	Pagar_Na_Entrega_MasterCard("Pagar na Entrega - Master Card"),
	Pagar_Na_Entrega_MasterVisa("Pagar na Entrega - Visa"),
    PIX("PIX");

		private final String valor;
		FormaPagamento(String valorOpcao){
		valor = valorOpcao;
		}
		public String getValor(){
		return valor;
		}
}
