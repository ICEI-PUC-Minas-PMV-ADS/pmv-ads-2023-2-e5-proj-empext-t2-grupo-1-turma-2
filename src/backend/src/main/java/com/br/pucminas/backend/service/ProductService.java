package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
@Slf4j
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> findAll(String category){
        return productRepository.findByCategory(category);
    }

    public List<Product> findByCategory(String category){
        return productRepository.findByCategory(category);
    }

    public Product createProduct(ProductForm form){

        Product newProduct = Product.
                builder().
                name(form.getName()).
                description(form.getDescription()).
                category(form.getCategory()).
                quantity(form.getQuantity()).
                link(form.getLink()).
                price(form.getPrice()).
                build();

        productRepository.save(newProduct);

        return newProduct;
    }




}
