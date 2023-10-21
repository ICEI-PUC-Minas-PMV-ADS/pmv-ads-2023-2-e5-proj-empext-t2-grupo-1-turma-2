package com.br.pucminas.backend.model.usercase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItenForm {
    
    /**
     * Identificador do produto que compoem o pedido
     */
    private Integer productId;
    
    /**
     * Identificador do produto dentro do  pedido
     */
    private Integer orderItenId;
    
    /**
     * Descrição do pdoduto no dia da compra
     */
    private String productDesc;
    
    /**
     * Imagem do produto no dia da compra
     */
    private String imageLink;
    
    /**
     * Preco do produto no dia da compra
     */
    private Float productPrice;
    
    /**
     * Quantidade comprada
     */
    private Integer quantity;
}
