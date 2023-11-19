package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.br.pucminas.backend.domain.entity.Order;

import java.util.List;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Integer> {

    @Query("SELECT o FROM Order o WHERE o.orderStatus = ?1 ORDER BY o.updatedAt DESC")
    List<Order> findAllOrdersByStatus(String status);


}
