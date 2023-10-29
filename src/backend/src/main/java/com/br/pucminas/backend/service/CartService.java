package com.br.pucminas.backend.service;

import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.br.pucminas.backend.domain.entity.Cart;
import com.br.pucminas.backend.domain.entity.CartItens;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.CartForm;
import com.br.pucminas.backend.model.usercase.CartItenForm;
import com.br.pucminas.backend.repository.CartItenRepository;
import com.br.pucminas.backend.repository.CartRepository;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.repository.UserRepository;
import com.br.pucminas.backend.service.utils.CartUtils;
import com.br.pucminas.backend.utils.enums.SystemErrors;

@Slf4j
@Service
public class CartService extends CartUtils{

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItenRepository cartItenRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    UserRepository userRepository;

    
    
    /**
     * Adiciona item ao carrinho
     * @param cartIten
     * @return
     * @throws Exception
     */    
    public CartItenForm addItenToCart(Integer userId,CartItenForm cartIten) throws Exception{
        
        log.info("##########  addItenToCart()  ##########");
        log.info("Adicinando ítem ao carrinho : " + cartIten.getProductId());
        
        CartItens item = null;    
        
        CartItenForm retForm = new CartItenForm();

        try {            
            if(cartIten != null && cartIten.getProductId()!=null 
                                && cartIten.getQuantity()!=null)
            {
                //Validando carrinho ativo do usuário  e produdo a ser adicionado ao carrinho
                Optional<Cart> cart = null;
                Optional<Product> produto = productRepository.findById(cartIten.getProductId());
                
                // Se não encontrou carrinho para o usuário, cria novo carrinho.
                cart = cartRepository.findById(getCartByUser(userId).getId());
                
                if(produto.isPresent()){
                    log.info("Produto válido encontrado.");
                    item = new CartItens();
                    item.setCart(cart.get());
                    item.setProduto(produto.get());                    
                    item.setQuantity(cartIten.getQuantity());                    
                    item = cartItenRepository.save(item);
                    log.info("Item adicionado ao carrinho");   
                    
                    retForm.setCartId(cart.get().getId());
                    retForm.setCartItenId(item.getId());
                    retForm.setProductId(produto.get().getId());
                    retForm.setValorTotal(cartIten.getQuantity()*produto.get().getPrice());
                    retForm.setDescProduct(produto.get().getDescription());
                    retForm.setQuantity(cartIten.getQuantity());
                    retForm.setServerResponseMessage(SystemErrors.MSG_SUCESSO_PROCESSAMENTO.getValor());

                    log.info(retForm.toString());
                    

                }else throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
            }else throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());                  
        } catch (Exception e) {            
            throw e;
        }
        
        return retForm;
    }

   
    /**
     * Atualiza a quantidade de um determinado ítem do carrinho
     * @param cartIten : Item do carrinho que terá a quantidade atualizada
     * @return : Objteto do tipo CartItenForm contendo item atualizado no carrinho
     * @throws Exception
     */
    public CartItenForm updateItenCart(CartItenForm cartIten) throws Exception{
        
        log.info("##########  updateItenCart() ##########");
        log.info("Atualizando ítem do carrinho : " + + cartIten.getCartItenId());
        
        CartItenForm itemForm = new CartItenForm();
        Optional<CartItens> cartItenEntity = null;
        Optional<Product> produto = null;

        try {
             if(cartIten != null  && cartIten.getCartItenId()!=null 
                                  && cartIten.getQuantity()!=null)
            {
                
                //Buscando e validando produto e tem de pedido a ser atualizado.
                cartItenEntity = cartItenRepository.findById(cartIten.getCartItenId()); 
                produto = productRepository.findById(cartItenEntity.get().getProduto().getId());                                  
                if(!produto.isPresent() || !cartItenEntity.isPresent())
                    throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());

                //Populando entity para atualização do ítem de pedido
                CartItens itemCarrinho = cartItenEntity.get();
                itemCarrinho.setQuantity(cartIten.getQuantity());                              
                itemCarrinho = cartItenRepository.save(itemCarrinho);

                //Montando form de retornoparaop frontend
                itemForm.setCartId(itemCarrinho.getCart().getId());
                itemForm.setCartItenId(itemCarrinho.getId());
                itemForm.setProductId(produto.get().getId());
                itemForm.setDescProduct(produto.get().getDescription());
                itemForm.setValorTotal(cartIten.getQuantity()*produto.get().getPrice());
                itemForm.setQuantity(cartIten.getQuantity());
                itemForm.setServerResponseMessage(SystemErrors.MSG_SUCESSO_PROCESSAMENTO.getValor());                            

                log.info("Ítem do carrinho : " +  cartIten.getCartItenId() + " atualizado com sucesso!");
                log.info(itemForm.toString());
            }
                
            
        } catch (Exception e) {
            log.error("Erro ao atualizar item + " + cartIten.getCartItenId() , e);
            throw e;
        }

        return itemForm;
    }

    
    /**
     *  Exclui um determinado carrinho
     *  @param : Código d e identificação do carrinho
     *  @throws Exception
     */
    public void deleteCartByUser(Integer userId) throws Exception{
        
        log.info("##########  deleteCartByUser() ##########");
        
        Optional<User> user;
        Cart carrinho;
        
        try {
            if(userId!=null){
                log.info("Excluindo carrinho associado co usuário " + userId);
                //Busca usuário
                user = userRepository.findById(userId);
                if(user.isPresent()){
                    carrinho = cartRepository.findFirstByClienteIdOrderByDataHoraAtualizacaoCarrinho(userId);
                    
                    ArrayList<CartItens> listaitensCarrinho =   new ArrayList<CartItens>(carrinho.getItensCarrinho());                    
                    if(carrinho !=  null) {
                        for (CartItens cartItens : listaitensCarrinho) 
                            cartItenRepository.deleteById(cartItens.getId());                    
                    
                        cartRepository.deleteById(carrinho.getId());                    
                    }
                }
            } else throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
                        
        } catch (Exception e) {
            log.error("Erro ao excluir carrinho associado ao usuário.",e);
            throw e;
        }
    }

    /**
     * Exclui um item específico de um determinado carrinho
     * @param cartIten: Objeto do tipo CartItenForm contendo dados enviados do frontend
     * @throws Exception
     */
    public void deleteCartItem(CartItenForm cartIten) throws Exception{
        
        log.info("##########  deleteCartItem() ##########");
        log.info("Excluindo ítem do carrinho : " + cartIten.getCartItenId());
        
        try {
             if(cartIten != null && cartIten.getCartId()!=null 
                                && cartIten.getCartItenId()!=null){

                cartItenRepository.deleteById(cartIten.getCartItenId());            

                log.info("Item " + cartIten.getCartItenId() + " foi excluido com sucesso.");
                log.info(cartIten.toString());

            }else throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
        } catch (Exception e) {
            log.error("Erro ao excluir item + " + cartIten.getCartItenId() + " do carrinho " + cartIten.getCartId(), e);
            throw e;
        }                
    }

    /**
     * Retorna carrinho de um determinado usuário
     * @param user
     * @return
     * @throws Exception
     */    
    public CartForm getCartByUser(Integer userId) throws Exception{
        
        log.info("##########  getCartByUser() ##########");
        log.info("Buscando/Criando carrinho para o usuário " + userId);

        Cart carrinho = null;        
        Optional<User> user = null;

        try {
            
            user = userRepository.findById(userId);
                        
            if(user.isEmpty()) { 
                log.info("Identificador de usuário inválido : " + userId);
                CartForm cf = new CartForm();
                cf.setServerResponseMessage(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
                return cf ;
            }
            else carrinho = this.getCartByUserId(userId);
            
            //Se não existir carrinho abandonado, cria um novo carrinho
            if(carrinho == null && user !=null){
                log.info("Carrinho não encontrado. Gerando um novo carrinho !");
                carrinho = new Cart();
                carrinho.setCliente(user.get());
                carrinho.setDataHoraAtualizacaoCarrinho(new Timestamp(System.currentTimeMillis()));                       
                carrinho = cartRepository.save(carrinho);
            }
                        
        } catch (Exception e) {
            log.error("Erro ao buscar / Criar carrinho do usuário",e);
            throw new Exception(SystemErrors.ERRO_CRIAR_RECUPERAR_CARRINHO.getValor(), e);
        }        
        return this.getCartForFromCarEntity(carrinho);
    } 
}
