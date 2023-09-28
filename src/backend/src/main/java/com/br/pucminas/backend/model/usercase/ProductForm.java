package com.br.pucminas.backend.model.usercase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductForm {
    private String name;
    private String description;
    private String category;
    private Integer quantity;
    private Float price;
    private String link;

}
