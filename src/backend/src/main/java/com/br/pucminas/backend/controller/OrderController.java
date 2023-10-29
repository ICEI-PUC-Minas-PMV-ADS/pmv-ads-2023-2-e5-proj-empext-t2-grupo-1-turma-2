package com.br.pucminas.backend.controller;

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

    
    @PostMapping("/v1/order/{idCarrinho}")
    public ResponseEntity<OrderForm> criaPedidoByCarrinhoId(@PathVariable("idCarrinho") Integer idCarrinho,
                                                            @RequestParam(value = "formaPagamento", required = true) String formaPagamento) {
        OrderForm newOrder= new OrderForm();

        try {
            newOrder = pedidoService.creatNewOrderByIdCarrinho(idCarrinho,formaPagamento);
            newOrder.setServerResponseMessage(SystemErrors.MSG_PEDIDO_PROCESSADO_COM_SUCESSO.getValor());
        } catch (Exception e) {
              log.error("Erro na criação do pedido!");
            log.error(SystemErrors.MSG_ERRO_GERA_PEDIDO.getValor(), e);
            e.getMessage();            
            if(e.getMessage().contains(SystemErrors.ERRO_SEM_ESTOQUE.getValor())){
                newOrder= new OrderForm();
                newOrder.setServerResponseMessage(SystemErrors.MSG_SEM_ESTOQUE.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(newOrder);                
            }else if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                newOrder= new OrderForm();
                newOrder.setServerResponseMessage(SystemErrors.MSG_ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(newOrder);                
            }else {
                return ResponseEntity.internalServerError().body(newOrder);
            }
        }

        return ResponseEntity.created(URI.create("/v1/order")).body(newOrder);
    
    }
    
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
            log.error("Erro na criação do pedido!");
            log.error(SystemErrors.MSG_ERRO_GERA_PEDIDO.getValor(), e);
            e.getMessage();            
            if(e.getMessage().contains(SystemErrors.ERRO_SEM_ESTOQUE.getValor())){
                newOrder= new OrderForm();
                newOrder.setServerResponseMessage(SystemErrors.MSG_SEM_ESTOQUE.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(newOrder);                
            }else if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                newOrder= new OrderForm();
                newOrder.setServerResponseMessage(SystemErrors.MSG_ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
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
            if(e.getMessage().contains(SystemErrors.ERRO_SEM_ESTOQUE.getValor())){
                order = new OrderForm();
                order.setServerResponseMessage(SystemErrors.MSG_SEM_ESTOQUE.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(order);                
            } else if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                order = new OrderForm();
                order.setServerResponseMessage(SystemErrors.MSG_ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(order);                
            }else{
                order.setServerResponseMessage(SystemErrors.MSG_ERRO_ATUALIZA_PEDIDO.getValor());
                return ResponseEntity.internalServerError().body(order);
            }
        }
    
        return ResponseEntity.created(URI.create("/v1/order/" + order.getId())).body(order);

    }

    /**
     * Lista todos os pedidos
     * @return
     */
    @GetMapping("/v1/order")
    public ResponseEntity<List<OrderForm>> findAllOrders(){
        
        List<OrderForm> listaPedidos = new ArrayList<OrderForm>();
        log.info("Busca todos os pedidos - /v1/order");

        try {
            listaPedidos = pedidoService.findAllOrders();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(listaPedidos);            
        }        
        return ResponseEntity.ok().body(listaPedidos);        
    }

    /**
     * Busca pedido de acordo com o id indicado
     * @param id : Id do pedido
     * @param form : Objeto do tipo OrderForm
     * @return
     */
    @GetMapping("/v1/order/{id}")
    public ResponseEntity<OrderForm> findOrderById(@PathVariable("id") Integer id) {
        
        OrderForm orderForm = new OrderForm();
        log.info("Busca pedido: " + id + "/v1/order/{id}");

        try {
            orderForm = pedidoService.findOrdeById(id);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(orderForm);            
        }

        return ResponseEntity.ok().body(orderForm);        
    }

}
