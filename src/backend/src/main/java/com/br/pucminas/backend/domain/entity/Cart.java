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
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId", referencedColumnName = "id")
    private User cliente;

    @OneToMany(mappedBy="cart",fetch = FetchType.EAGER)
    private Set<CartItens> itensCarrinho;

    @Column(name = "dataHoraCarrinho")
    private Timestamp dataHoraAtualizacaoCarrinho;


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Cart cart = (Cart) o;
        return getId() != null && Objects.equals(getId(), cart.getId());
    }
    
    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
    
}
