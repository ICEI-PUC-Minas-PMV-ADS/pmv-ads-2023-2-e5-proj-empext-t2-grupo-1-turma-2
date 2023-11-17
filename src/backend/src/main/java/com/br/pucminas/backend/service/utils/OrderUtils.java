package com.br.pucminas.backend.service.utils;

import java.util.ArrayList;
import java.util.List;

import com.br.pucminas.backend.domain.entity.Order;
import com.br.pucminas.backend.domain.entity.OrderProduct;
import com.br.pucminas.backend.model.usercase.OrderForm;
import com.br.pucminas.backend.model.usercase.OrderItenForm;
import com.br.pucminas.backend.utils.enums.SystemErrors;

public abstract class OrderUtils {

    
    public List<OrderForm> prepareOrderFormFromEntity(List<Order> pedidosEntity)throws Exception{
       
        List<OrderForm> listaPedidos = new ArrayList<OrderForm>();
       
        for (Order orderEntity : pedidosEntity) {                    
            OrderForm order = new OrderForm();            
            
            order.setId(orderEntity.getId());
            order.setClientMail(null);
            order.setDataHoraPedido(orderEntity.getDataHoraPedido());
            order.setFormaPagamento(orderEntity.getFormaPagamento());            
            order.setStatusPedido(orderEntity.getStatusPedido());            
            order.setOperacao(null);
            
            //Seta ítens associados ao pedido
            Float totalPedido = 0.0f;
            List<OrderItenForm> listaItemPedidos = new ArrayList<OrderItenForm>();
//            for (OrderProduct itemPedido : orderEntity.getItensPedido()) {
//                 OrderItenForm itensForm = new OrderItenForm();
//                 itensForm.setOrderItenId(itemPedido.getId());
//                 itensForm.setProductId(itemPedido.getProduto().getId());
//                 itensForm.setImageLink(itemPedido.getImageLink());
//                 itensForm.setProductDesc(itemPedido.getProductName());
//                 itensForm.setProductPrice(itemPedido.getPrice());
//                 itensForm.setQuantity(itemPedido.getQuantity());
//                 totalPedido+=itemPedido.getPrice()*itemPedido.getQuantity();
//                 listaItemPedidos.add(itensForm);
//            }
            order.setValorTotalPedido(totalPedido);
            order.setItensDoPedido(listaItemPedidos);
            
            listaPedidos.add(order);
        }

        return listaPedidos;
    } 
    
    
    /**
     * Valida campos enviados do front com dados de pedido a ser atualizado
     * @param formFront : Dados enviados do FrontEnd
     * @throws Exception
     */
    public void validaFormAtualizaPedido(OrderForm formFront)throws Exception{
        if(formFront == null 
                || formFront.getFormaPagamento()== null 
                || formFront.getStatusPedido()==null                 
                || formFront.getItensDoPedido() ==null 
                || formFront.getItensDoPedido().size() <= 0){            
                
            throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
        }
    }

    /**
     * Valida campos enviados do front com dados de pedido a ser Criado
     * @param formFront : Dados enviados do FrontEnd
     * @throws Exception
     */
    public void validaFormCriaPedido(OrderForm formFront)throws Exception{
        if(formFront == null 
                || formFront.getFormaPagamento()== null 
                || formFront.getStatusPedido()==null                                 
                || formFront.getClientMail() == null
        ){            
                
            throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
        }
    }

    /**
     * Converte uma Entity do tipo Order em um objeto do tipo OrderForm
     * 
     * @param pedido: Entity do tipo Order
     * 
     * @return : Objeto do tipo  OrderForm
     * @throws Exception
     */
    public OrderForm getOrderFormFromOrderEntity(Order pedido,List<OrderProduct> itensPedido) throws Exception{
        OrderForm form = new  OrderForm();

        if(pedido != null){
            
            form.setId(pedido.getId());
            form.setClientMail(pedido.getEmailCliente());
            form.setFormaPagamento(pedido.getFormaPagamento());
            form.setStatusPedido(pedido.getStatusPedido());
            form.setDataHoraPedido(pedido.getDataHoraPedido());
            form.setValorTotalPedido(pedido.getValorTotalPedido());

            ArrayList<OrderItenForm> listaOrderItenForm = new ArrayList<OrderItenForm>();
            
            for (OrderProduct orderProduct : itensPedido) {
                
                //Calcula valor total do pedido

                OrderItenForm itemForm = new OrderItenForm();
                itemForm.setProductId(orderProduct.getProduto().getId());                                       
                itemForm.setOrderItenId(orderProduct.getId());

                listaOrderItenForm.add(itemForm);
            }

            form.setItensDoPedido(listaOrderItenForm);
        }

       return form;     
    }
    
}
