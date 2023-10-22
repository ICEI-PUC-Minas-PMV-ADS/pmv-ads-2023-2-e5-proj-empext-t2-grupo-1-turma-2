package com.br.pucminas.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.br.pucminas.backend.domain.entity.OrderProduct;

@Repository
public interface OrderProductRepository extends JpaRepository<OrderProduct, Integer> {
        
    @Query(value = "select iten.* from orderproduct iten where iten.pedido_id = ?1", nativeQuery = true)
    List<OrderProduct> findOrderItens(Integer id);
}
