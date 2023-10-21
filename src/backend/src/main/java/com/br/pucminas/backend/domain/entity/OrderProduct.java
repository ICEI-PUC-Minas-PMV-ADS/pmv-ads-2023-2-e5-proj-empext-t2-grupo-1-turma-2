package com.br.pucminas.backend.domain.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;

import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orderproduct")
public class OrderProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pedidoId", referencedColumnName = "id")
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "productId", referencedColumnName = "id")
    private Product produto;
    
    @Column(name = "productName")
    private String productName; 

    @Column(name = "imageLink")
    private String imageLink; 


    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "price")
    private Float price;
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        OrderProduct orderProduct = (OrderProduct) o;
        return getId() != null && Objects.equals(getId(), orderProduct.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
    
}
