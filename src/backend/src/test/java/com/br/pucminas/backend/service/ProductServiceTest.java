package com.br.pucminas.backend.service;

import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.repository.ProductRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class ProductServiceTest {

    @InjectMocks
    private ProductService productService;

    @Mock
    private ProductRepository productRepository;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindAll() {
        List<Product> productList = new ArrayList<>();
        Mockito.when(productRepository.findAll()).thenReturn(productList);

        List<Product> result = productService.findAll();

        assertEquals(productList, result);
    }

    @Test
    public void testFindByCategory() {
        String category = "ExampleCategory";
        List<Product> productList = new ArrayList<>();
        Mockito.when(productRepository.findByCategory(category)).thenReturn(productList);

        List<Product> result = productService.findByCategory(category);

        assertEquals(productList, result);
    }

    @Test
    public void testCreateProduct() {
        ProductForm productForm = new ProductForm();
        Product createdProduct = new Product();
        Mockito.when(productRepository.save(Mockito.any(Product.class))).thenReturn(createdProduct);

        Product result = productService.createProduct(productForm);

        assertEquals(createdProduct, result);
    }
}
