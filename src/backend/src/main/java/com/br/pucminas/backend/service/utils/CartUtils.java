package com.br.pucminas.backend.service.utils;

import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import com.br.pucminas.backend.domain.entity.Cart;
import com.br.pucminas.backend.domain.entity.CartItens;
import com.br.pucminas.backend.model.usercase.CartForm;
import com.br.pucminas.backend.model.usercase.CartItenForm;
import com.br.pucminas.backend.repository.CartItenRepository;
import com.br.pucminas.backend.repository.CartRepository;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.utils.enums.SystemErrors;

@Slf4j
public class CartUtils {

    @Autowired
    CartRepository cartRepository;

    @Autowired
    CartItenRepository cartItenRepository;

    @Autowired
    ProductRepository productRepository;

    
        
    /**
     * Cria carrinho para usuário
     * @param mailUser
     * @return
     * @throws Exception
     */
    protected Cart createCart(Integer userId) throws Exception{
        log.info("Criando Carrinho : createCart()");
        return null;
    }

    /**
     * Exclui carrinho associado ao usuário
     * @param cartId
     * @throws Exception
     */
    protected void deleteCart(Integer cartId) throws Exception{
        log.info("Excluindo carrinho finalizado/inativo : createCart()");        
    }

    /**
     * Busca carrinho ativo para o usuário
     * @param mailUser
     * @return
     * @throws Exception
     */
    protected Integer findActiveCartFromUser(String mailUser) throws Exception{
        log.info("Buscando  carrinho ativo de usuário : findActiveCartFromUser()");        
        return null;
    }

    /**
     * Retorna um carrinho para o usuário corrente
     * @param id : Id do carrinho
     * @return
     * @throws Exception
     */
    protected Cart getCartByUserId(Integer userId) throws Exception{
        
        Cart carrinho=null;

        //Verifica se o usuário  é valido
        if(userId == null) throw new Exception(SystemErrors.MSG_ERRO_USUARIO_NAO_ENCONTRADO.getValor());
        carrinho = cartRepository.findFirstByClienteIdOrderByDataHoraAtualizacaoCarrinho(userId);
        
        return carrinho;
    }

    /**
     * Converte um objeto do tipo Cart em um objeto do tipo CartForm
     * @param cart
     * @return
     * @throws Exception
     */
    protected CartForm getCartFormFromEntity(Cart cart) throws Exception{
        
        CartForm cartForm = null;

        return cartForm;
    }

    /**
     * Converte um objeto do tipo Cart em um objeto do tipo CartForm
     * @param carrinho
     * @return
     * @throws Exception
     */
    protected CartForm getCartForFromCarEntity(Cart carrinho) throws Exception{

        log.info("##########  getCartForFromCarEntity())  ##########");
        log.info("Convertendo entity do tipo Cart em um objeto do tipo CartForm");

        CartForm cartForm = new CartForm();
        
        cartForm.setId(carrinho.getId());
        cartForm.setClientMail(carrinho.getCliente().getEmail());        
        cartForm.setDataHoraAtualizacaoCarrinho(carrinho.getDataHoraAtualizacaoCarrinho());        
        ArrayList<CartItens> listaCarrinho = null;         
        
        //Verifica se o carrinho possui ítens
        if(carrinho.getItensCarrinho()==null) listaCarrinho = new ArrayList<CartItens>();
        else listaCarrinho = new ArrayList<CartItens>(carrinho.getItensCarrinho());

        ArrayList<CartItenForm> listaForm = new ArrayList<CartItenForm>();
        Float  totalValorCarrinho = 0.0f;
        for (CartItens catCartItens : listaCarrinho) {
            log.info("Buscando item do carrinho : " + catCartItens.getId());
            CartItenForm itemform = new CartItenForm();
            itemform.setCartId(carrinho.getId());
            itemform.setCartItenId(catCartItens.getId());
            itemform.setProductId(catCartItens.getProduto().getId());
            itemform.setQuantity(catCartItens.getQuantity());
            itemform.setValorTotal(catCartItens.getQuantity() * catCartItens.getProduto().getPrice());
            itemform.setDescProduct(catCartItens.getProduto().getDescription());
            listaForm.add(itemform);
            totalValorCarrinho+=catCartItens.getQuantity()*catCartItens.getProduto().getPrice();
        }
        cartForm.setItensCarrinho(listaForm);
        cartForm.setValorTotalcarrinho(totalValorCarrinho);
        cartForm.setServerResponseMessage(SystemErrors.MSG_CARRINHO_GERADO_SUCESSO.getValor());    
        
        log.info("Conversão realizada com sucesso.");
        log.info(cartForm.toString());
        
        return cartForm;
    }

    
}
