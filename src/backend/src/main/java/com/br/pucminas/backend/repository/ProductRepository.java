package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT pr.* FROM product pr WHERE pr.category = ?1", nativeQuery = true)
    List<Product> findByCategory(String category);
}
