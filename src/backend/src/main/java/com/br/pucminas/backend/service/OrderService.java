package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.entity.*;
import com.br.pucminas.backend.model.usercase.*;
import org.springframework.stereotype.Service;

import com.br.pucminas.backend.repository.CartRepository;
import com.br.pucminas.backend.repository.OrderProductRepository;
import com.br.pucminas.backend.repository.OrderRepository;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.repository.UserRepository;
import com.br.pucminas.backend.utils.enums.Operacao;
import com.br.pucminas.backend.utils.enums.StatusPedido;
import com.br.pucminas.backend.utils.enums.SystemErrors;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderProductRepository orderProductRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    @Autowired
    CartService cartService;

    @Autowired
    CartRepository cartRepository;

    public List<OrderResponse> findAllOrders(){
        
        log.info("findAll");        
        List<OrderResponse> pedidosEntity = new ArrayList<>();

        orderRepository.findAll().forEach(fr -> pedidosEntity.add(this.prepareOrderFormFromEntity(fr)));

        return pedidosEntity;
    }

    public List<OrderResponse> findAllOrdersByStatus(String status){

        log.info("findAll");
        List<OrderResponse> pedidosEntity = new ArrayList<>();

        orderRepository.findAllOrdersByStatus(status).forEach(fr -> pedidosEntity.add(this.prepareOrderFormFromEntity(fr)));

        return pedidosEntity;
    }

    public OrderResponse prepareOrderFormFromEntity(Order orderEntity){


            OrderResponse order = new OrderResponse();

            order.setId(orderEntity.getId());
            order.setCreatedAt(orderEntity.getCreatedAt());
            order.setUpdatedAt(orderEntity.getUpdatedAt());

            User user = userRepository.findByEmail(orderEntity.getEmailUser());

            order.setUser(UserFlat.builder().name(user.getName()).email(user.getEmail()).phone(user.getPhone()).address(user.getAddress()).zipCode(user.getZipCode()).build());
            order.setOrderStatus(orderEntity.getOrderStatus());
            order.setTotalValueOrder(orderEntity.getTotalValueOrder());
            order.setPaymentMethod(orderEntity.getPaymentMethod());

            List<String> productInfo = new ArrayList<>();

            for(OrderProduct itemPedido : orderEntity.getOrderProductList()){
                productInfo.add(itemPedido.getQuantity().toString() + " x " + itemPedido.getProduto().getName() + " ");
            }

            order.setProductInfo(String.join(",", productInfo));


        return order;
    }


    public OrderResponse updateStatusOrder(Integer id, String orderStatus){
            Order orderEntity = null;

            log.info("updateStatusOrder " + id);

            try{
                orderEntity = orderRepository.findById(id).orElse(null);
                orderEntity.setOrderStatus(orderStatus);
                orderEntity.setUpdatedAt(Timestamp.from(Instant.now()));
                orderEntity = orderRepository.save(orderEntity);
            }catch (Exception e) {
                log.error("Erro ao atualizar status do pedido", e);
            }


            return this.prepareOrderFormFromEntity(orderEntity);
    }



    public List<Order> findOrderByUserId(Integer id) throws Exception{
        
        log.info("findOrderById " + id);
        return orderRepository.findAll(); //.stream().filter(fr -> fr.getCliente().getId().equals(id)).collect(Collectors.toList());
    }


    @Transactional
    public OrderResponse creatNewOrder(OrderForm formFront){
       
        Order orderEntity = new Order();
        List<OrderProduct> itensPedido = null;
        ArrayList<OrderProduct> itensPedidoAtualizado = new ArrayList<OrderProduct>();

        //Cria Pedido        
        orderEntity = Order
                .builder()
                .createdAt(formFront.getCreatedAt())
                .updatedAt(formFront.getUpdatedAt())
                .paymentMethod(formFront.getPaymentMethod())
                .orderStatus(StatusPedido.RECEBIDO.getValor())
                .totalValueOrder(formFront.getTotalValueOrder())
                .emailUser(formFront.getEmailUser())
                .build();

        orderEntity = orderRepository.save(orderEntity);
        log.info("Pedido Criado --> " + orderEntity.getId());

        log.info("Associando itens selecionados ao pedido");
        //Associa produtos do carrinho ao pedido recem criado        
        itensPedido = this.getOrderProducts(formFront, orderEntity);
        OrderProduct itemPedido = null;
        for (OrderProduct orderProduct : itensPedido) {
            itemPedido = orderProductRepository.save(orderProduct);            
            log.info("Ítem " + orderProduct.getProduto().getName() + " adicionado ao pedido " + orderEntity.getId() );
            itensPedidoAtualizado.add(itemPedido);
        }

        orderEntity.setOrderProductList(itensPedidoAtualizado);
        log.info("Ítens do Carrinho adicionados ao pedido.");
        log.info("Pedido gerado com sucesso!");

        return this.prepareOrderFormFromEntity(orderEntity);
    }


    private List<OrderProduct> getOrderProducts(OrderForm formFront,Order orderEntity){

        List<OrderProduct> listaItensPedido = new ArrayList<>();

        try {
                List<OrderProductForm>  itensPedido = formFront.getItensDoPedido();
                for (OrderProductForm orderItenForm : itensPedido) {

                    OrderProduct item = new OrderProduct();
                    Product produto = productRepository.findByProductId(orderItenForm.getProductId()).get();

                    item.setQuantity(orderItenForm.getQuantity());
                    item.setOrder(orderEntity);
                    item.setProduto(produto);

                    listaItensPedido.add(item);
                }

        } catch (Exception e) {
            log.error("Erro ao buscar ítens de pedido", e);
        }
        return listaItensPedido;
    }

}
