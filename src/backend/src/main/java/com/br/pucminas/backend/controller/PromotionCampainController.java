package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.PromotionCampain;
import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.model.usercase.PromotionCampainForm;
import com.br.pucminas.backend.service.ProductService;
import com.br.pucminas.backend.service.PromotionCampainService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
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
public class PromotionCampainController {

    @Autowired
    PromotionCampainService service;

    // ROTA DE GET - /v1/profile
    @GetMapping("/v1/promotion-campain")
    public ResponseEntity<List<PromotionCampain>> getProfile() {
        return ResponseEntity.ok(service.findAll());
    }


    // ROTA DE POST - /v1/profile
    @PostMapping("/v1/promotion-campain")
    public ResponseEntity<PromotionCampain> postUser(@RequestBody PromotionCampainForm form) {
        PromotionCampain newCampain = service.createProduct(form);
        return ResponseEntity.created(URI.create("/v1/promotion-campain" + newCampain.getId())).body(newCampain);
    }
}
