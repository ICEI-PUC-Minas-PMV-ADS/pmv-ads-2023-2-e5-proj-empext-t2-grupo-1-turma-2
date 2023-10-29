package com.br.pucminas.backend.model.usercase;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItenForm {
    
    /**
     * Id do carrinho
     */
    private Integer cartId;

    /**
     * Id do item do carrinho
     */
    private Integer cartItenId;

    /**
     * Id do produto que esta no carrinho
     */
    private Integer productId;

    /**
     * descrição do produto
     */
    private String descProduct;

    /**
     * Quantidade do ítem selecionado
     */
    private Integer quantity;

    /**
     * Valor atualizado do item
     */
    private Float valorTotal;


    /**
     * Menságem de status de processamento do Servidor
     */
    private String serverResponseMessage;


}
