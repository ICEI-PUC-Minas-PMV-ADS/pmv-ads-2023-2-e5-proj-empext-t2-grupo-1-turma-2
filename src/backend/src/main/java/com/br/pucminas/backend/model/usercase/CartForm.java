package com.br.pucminas.backend.model.usercase;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartForm {

    private String serverResponseMessage;
    private Integer id;
    private Timestamp dataHoraAtualizacaoCarrinho;
    
    private String clientMail;
    private Float valorTotalcarrinho;
    private List<CartItenForm> itensCarrinho;
    
    
}
