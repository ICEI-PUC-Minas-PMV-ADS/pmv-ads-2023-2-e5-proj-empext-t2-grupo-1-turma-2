package com.br.pucminas.backend.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.br.pucminas.backend.model.usercase.OrderForm;
import com.br.pucminas.backend.service.OrderService;
import com.br.pucminas.backend.util.enums.SystemErrors;

import java.net.URI;

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

    /**
     * Rota para POST de criação de pedido
     * @param form
     * @return
     */
    @PostMapping("/v1/order")
    public ResponseEntity<OrderForm> criaPedido(@RequestBody OrderForm form) {
        
        OrderForm newOrder= new OrderForm();
        log.info("Chamando Controler <POST>/v1/order/, método criaPedido()");

        try{
             
            newOrder = pedidoService.creatNewOrder(form);                         
            newOrder.setServerResponseMessage(SystemErrors.MSG_PEDIDO_PROCESSADO_COM_SUCESSO.getValor());
            
        } catch (Exception e) {
            log.error(SystemErrors.MSG_ERRO_GERA_PEDIDO.getValor(), e);
            if(e.getMessage().contains(SystemErrors.ERRO_SEM_ESTOQUE.getValor())){
                newOrder.setServerResponseMessage(SystemErrors.MSG_SEM_ESTOQUE.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(newOrder);                
            }else {
                return ResponseEntity.internalServerError().body(newOrder);
            }
        }
        return ResponseEntity.created(URI.create("/v1/order")).body(newOrder);
    }

    /**
     * Atualiza Pedido
     * @param form
     * @return
     */
    @PutMapping("/v1/order/{id}")
    public ResponseEntity<OrderForm> atualizaPedido(@PathVariable("id") Integer id, @RequestBody OrderForm form) {
        
        OrderForm order = new OrderForm();
        log.info("Atualiza pedido - /v1/order/{id}");

        try {
            
            order = pedidoService.updateOrder(form, id);

        } catch (Exception e) {
            log.error(SystemErrors.MSG_ERRO_ATUALIZA_PEDIDO.getValor() + id, e);
            return ResponseEntity.internalServerError().body(order);
        }
    
        return ResponseEntity.created(URI.create("/v1/order/" + order.getId())).body(order);

    }


}
