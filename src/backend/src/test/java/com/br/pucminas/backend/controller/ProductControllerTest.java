package com.br.pucminas.backend.controller;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.service.ProductService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class ProductControllerTest {

    @InjectMocks
    private ProductController productController;

    @Mock
    private ProductService productService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetProfile() {
        List<Product> productList = Arrays.asList(new Product(), new Product());
        Mockito.when(productService.findAll()).thenReturn(productList);

        ResponseEntity<List<Product>> response = productController.getProfile();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productList, response.getBody());
    }

    @Test
    public void testFindProductsByCategory() {
        String category = "exampleCategory";
        List<Product> productList = Arrays.asList(new Product(), new Product());
        Mockito.when(productService.findAll()).thenReturn(productList);

        ResponseEntity<List<Product>> response = productController.findProductsByCategory(category);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(productList, response.getBody());
    }

    @Test
    public void testPostUser() {
        ProductForm productForm = new ProductForm();
        Product createdProduct = new Product();
        Mockito.when(productService.createProduct(productForm)).thenReturn(createdProduct);

        ResponseEntity<Product> response = productController.postUser(productForm);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(createdProduct, response.getBody());
    }
}
