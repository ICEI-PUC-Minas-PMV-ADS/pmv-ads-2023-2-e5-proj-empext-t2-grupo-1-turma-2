package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT pr.* FROM product pr WHERE pr.category LIKE CONCAT('%', ?1, '%')", nativeQuery = true)
    List<Product> findByCategory(String category);

    @Query(value = "SELECT * FROM product WHERE id =:id", nativeQuery = true)
    Optional<Product> findByProductId(Integer id);

}
