package com.br.pucminas.backend.model.usercase;

import com.br.pucminas.backend.domain.entity.Order;
import com.br.pucminas.backend.domain.entity.Product;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderProductResponse {

    private Integer quantity;

    private Product produto;

    
}
