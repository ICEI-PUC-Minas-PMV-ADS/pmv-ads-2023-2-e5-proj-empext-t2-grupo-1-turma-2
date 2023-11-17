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

}
