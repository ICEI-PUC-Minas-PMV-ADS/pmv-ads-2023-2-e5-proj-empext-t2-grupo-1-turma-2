package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.service.ProductService;
import com.br.pucminas.backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequestMapping("/api")
@RestController
@Slf4j
public class ProductController {

    @Autowired
    ProductService productService;

    // ROTA DE GET - /v1/profile
    @GetMapping("/v1/product")
    public ResponseEntity<List<Product>> getProduct(@RequestParam(value = "category", required = true) String category) {
        return ResponseEntity.ok(productService.findAll(category));
    }

    // ROTA DE POST - /v1/profile Teste@123.com
    @PostMapping("/v1/product")
    public ResponseEntity<Product> postUser(@RequestBody ProductForm form) {
        Product newProduct = productService.createProduct(form);
        return ResponseEntity.created(URI.create("/v1/product" + newProduct.getId())).body(newProduct);
    }
}
