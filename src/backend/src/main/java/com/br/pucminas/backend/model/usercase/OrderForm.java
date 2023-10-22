package com.br.pucminas.backend.model.usercase;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderForm {

    //Operação a ser realizada com o pedido - Novo, Atualizar 
    private String operacao;
    private String serverResponseMessage;

    private Integer id;
    private Timestamp dataHoraPedido;    
    private String formaPagamento;
    private String statusPedido; 
    private Float valorTotalPedido;
            
    private String clientMail;
    private List<OrderItenForm> itensDoPedido;


    
}
