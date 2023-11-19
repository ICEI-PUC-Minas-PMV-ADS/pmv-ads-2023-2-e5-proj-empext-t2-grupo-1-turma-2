package com.br.pucminas.backend.model.usercase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductForm {

    private Integer productId;
    private Integer quantity;
}
