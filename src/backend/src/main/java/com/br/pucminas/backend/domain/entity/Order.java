package com.br.pucminas.backend.domain.entity;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;

import java.sql.Timestamp;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@ToString
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pedido")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "dataHoraPedido")
    private Timestamp dataHoraPedido;

    @Column(name = "formaPagamento")
    private String formaPagamento;

    @Column(name = "statusPedido")
    private String statusPedido;    

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User cliente;

    @OneToMany(mappedBy="order",fetch = FetchType.EAGER)
    private Set<OrderProduct> itensPedido;
    
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