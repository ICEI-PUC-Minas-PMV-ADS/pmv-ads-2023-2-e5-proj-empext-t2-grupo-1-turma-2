package com.br.pucminas.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.pucminas.backend.model.usercase.CartForm;
import com.br.pucminas.backend.model.usercase.CartItenForm;
import com.br.pucminas.backend.service.CartService;
import com.br.pucminas.backend.utils.enums.SystemErrors;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/api")
@RestController
@Slf4j
public class CartController {
    
    @Autowired
    CartService cartService;

    
    
    /**
     * Adiciona ítem ao carrinho associado ao usuário
     * @param form : Dados do front contendo ítem a ser adicionado ao carrinho
     * @param id : Id do usuário que esta adicionando o ítem ao carrinho
     * @return : Objeto contendo dados atualizados referentes ao carrinho
     */
    @PostMapping("/v1/cart/{id}")
    public ResponseEntity<CartItenForm> adicionaItemCarrinho(@RequestBody CartItenForm form, @PathVariable("id") Integer id) {
        
        CartItenForm item = new CartItenForm();
        try {
        
            item = cartService.addItenToCart(id, form);            
        
        } catch (Exception e) {            
            if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(item);                
            }            
            item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
            return ResponseEntity.internalServerError().body(item);  
        }

        return ResponseEntity.ok().body(item);
    }
    
    /**
     * Retorna um carrinho ativo associado  a um determinado usuário.
     * Se não encontrar carrinho ativo, cria um novo carrinho.
     * @param id : Identificador do usuário.
     * @return  : Objeto do tipo  CartForm a ser utilizado pelo frontend da aplicação
     */
    @GetMapping("/v1/cart/{id}")
    public ResponseEntity<CartForm> getCarrinho(@PathVariable("id") Integer id) {
        CartForm carrinho = new CartForm();
        try {
        
            carrinho = cartService.getCartByUser(id);
        
        } catch (Exception e) {
             
            if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                carrinho.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(carrinho);                
            }            
            
            carrinho.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
            return ResponseEntity.internalServerError().body(carrinho);  
        }

        return ResponseEntity.ok().body(carrinho); 
    }

    /**
     * Exclui um determinado ítem de compra que esta associado a uum carrinho
     * @param form : Ítem do carrinho a ser excluido
     * @return : CartItenForm
     */
    @DeleteMapping("/v1/cart")
    public ResponseEntity<CartItenForm> excluiItemCarrinho(@RequestBody CartItenForm form) {
        CartItenForm item = new CartItenForm();
        
        try {
        
            cartService.deleteCartItem(form);
            item.setServerResponseMessage(SystemErrors.MSG_SUCESSO_PROCESSAMENTO.getValor());
        
        } catch (Exception e) {
            
            if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(item);                
            }            
            item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
            return ResponseEntity.internalServerError().body(item);  
        }
        return ResponseEntity.ok().body(item);
    }

    /**
     * Atualiza a quantidade de um determinado produto que esta associado a um determinado carrinho
     * @param form : Ítem do carrinho que terá sua quantidade atualizada.
     * @return : Ítem do carrinho contendo a quantidade atualizada
     */
    @PutMapping("/v1/cart")
    public ResponseEntity<CartItenForm> atualizaItemCarrinho(@RequestBody CartItenForm form) {
        CartItenForm item = new CartItenForm();

        try {
            
            item = cartService.updateItenCart(form);
            item.setServerResponseMessage(SystemErrors.MSG_SUCESSO_PROCESSAMENTO.getValor());

        } catch (Exception e) {             
            
            if(e.getMessage().contains(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor())){
                item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(item);                
            }            
            
            item.setServerResponseMessage(SystemErrors.MSG_ERRO_PROCESSAMENTO.getValor());
            return ResponseEntity.internalServerError().body(item);  
        }
        return ResponseEntity.ok().body(item);
    }
}