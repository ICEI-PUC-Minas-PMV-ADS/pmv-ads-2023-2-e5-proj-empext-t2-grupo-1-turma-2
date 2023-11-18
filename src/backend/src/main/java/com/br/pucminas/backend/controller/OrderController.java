package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.domain.entity.Order;
import com.br.pucminas.backend.model.usercase.OrderResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.br.pucminas.backend.model.usercase.OrderForm;
import com.br.pucminas.backend.service.OrderService;
import com.br.pucminas.backend.utils.enums.SystemErrors;

import java.net.URI;
import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/api")
@RestController
@Slf4j
public class OrderController {
    
    @Autowired
    OrderService pedidoService;


    @PostMapping("/v1/order")
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderForm form) {
        
        log.info("Chamando Controler <POST>/v1/order/, método criaPedido()");
        form.setCreatedAt(Timestamp.from(Instant.now()));
        form.setUpdatedAt(Timestamp.from(Instant.now()));

        return ResponseEntity.created(URI.create("/v1/order")).body(pedidoService.creatNewOrder(form));
    }


    /**Pedro.jardim@test.com
     * Lista todos os pedidos
     * @return
     */
    @GetMapping("/v1/order")
    public ResponseEntity<List<OrderResponse>> findAllOrders(){
        
        List<OrderResponse> listaPedidos = new ArrayList<>();
        log.info("Busca todos os pedidos - /v1/order");

        try {
            listaPedidos = pedidoService.findAllOrders();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(listaPedidos);            
        }        
        return ResponseEntity.ok().body(listaPedidos);        
    }

    @GetMapping("/v1/order/{id}")
    public ResponseEntity<List<Order>> findOrderById(@PathVariable("id") Integer id) {
        try {
            return ResponseEntity.ok().body(pedidoService.findOrderByUserId(id));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
