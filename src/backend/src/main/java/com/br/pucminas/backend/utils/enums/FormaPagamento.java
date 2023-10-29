package com.br.pucminas.backend.utils.enums;

public enum FormaPagamento {

	Pagar_Na_Entrega_Dinheiro("Pagar na Entrega - Dinheiro"),
	Pagar_Na_Entrega_MasterCard("Pagar na Entrega - Master Card"),
	Pagar_Na_Entrega_MasterVisa("Pagar na Entrega - Visa"),
	Pagar_Na_Entrega_Ticket("Pagar na Entrega - Ticket"),
	Pagar_Na_Entrega_Sodexo("Pagar na Entrega - Sodexo"),
    PIX("PIX");

		private final String valor;
		FormaPagamento(String valorOpcao){
		valor = valorOpcao;
		}
		public String getValor(){
		return valor;
		}
}
