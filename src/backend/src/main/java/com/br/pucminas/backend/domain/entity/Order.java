package com.br.pucminas.backend.domain.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@ToString
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "updated_at")
    private Timestamp updatedAt;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "email_user")
    private String emailUser;

    @Column(name = "total_value_order")
    private Float totalValueOrder;

    @OneToMany(mappedBy="order",fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<OrderProduct> orderProductList = new ArrayList<>();
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Order pedido = (Order) o;
        return getId() != null && Objects.equals(getId(), pedido.getId());
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }



}
