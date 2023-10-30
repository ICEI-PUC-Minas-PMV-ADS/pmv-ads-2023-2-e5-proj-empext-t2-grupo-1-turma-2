package com.br.pucminas.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.pucminas.backend.domain.entity.Cart;

@Repository
public interface CartRepository  extends JpaRepository<Cart, Integer>  {
    
    /**
     * Busca último carrinho ativo associado ao usuário
     * @param id : Id do usuário
     * @return Objeto do tipo Cart
     */
    Cart findFirstByClienteIdOrderByDataHoraAtualizacaoCarrinho(Integer id);
}
