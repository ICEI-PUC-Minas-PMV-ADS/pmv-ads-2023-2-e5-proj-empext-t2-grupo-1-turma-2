package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.repository.ProductRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @Test
    public void testFindByCategory() {
        // Crie alguns produtos com uma categoria específica para testar
        Product product1 = new Product("Product 1", "Category A");
        Product product2 = new Product("Product 2", "Category B");
        Product product3 = new Product("Product 3", "Category A");

        productRepository.save(product1);
        productRepository.save(product2);
        productRepository.save(product3);

        // Execute a consulta personalizada
        List<Product> productsInCategoryA = productRepository.findByCategory("Category A");

        // Verifique se os produtos retornados têm a categoria correta
        assertEquals(2, productsInCategoryA.size());

        for (Product product : productsInCategoryA) {
            assertEquals("Category A", product.getCategory());
        }
    }
}
