package com.br.pucminas.backend.service;

import org.springframework.stereotype.Service;

import com.br.pucminas.backend.domain.entity.Order;
import com.br.pucminas.backend.domain.entity.OrderProduct;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.OrderForm;
import com.br.pucminas.backend.model.usercase.OrderItenForm;
import com.br.pucminas.backend.repository.OrderProductRepository;
import com.br.pucminas.backend.repository.OrderRepository;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.repository.UserRepository;
import com.br.pucminas.backend.service.utils.OrderUtils;
import com.br.pucminas.backend.utils.enums.Operacao;
import com.br.pucminas.backend.utils.enums.StatusPedido;
import com.br.pucminas.backend.utils.enums.SystemErrors;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OrderService extends OrderUtils{

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderProductRepository orderProductRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    /**
     * Lista todos os ppedidos cadastrados no sistema
     * @return
     */ 
    public List<OrderForm> findAllOrders() throws Exception{
        
        log.info("findAll");        
        //Busca lista de pedidos
        List<Order> pedidosEntity = orderRepository.findAll();                        
        return this.prepareOrderFormFromEntity(pedidosEntity);
    }

    /**
     * Busca pedido de acordo com seu ID
     * @param id : Número de identificação do pedido
     * @return : Objeto do tipo OrderForm
     * @throws Exception
     */
    public OrderForm findOrdeById(Integer id) throws Exception{
        
        log.info("findOrderById " + id);
        OrderForm order = new OrderForm();
        
        try {                    
            //Busca Pedido de acordo com o id
            List<Order> listaPedidos = new ArrayList<Order>();
            Order pedido = orderRepository.getById(id);
            if(pedido!=null) {
                listaPedidos.add(pedido);
                order = this.prepareOrderFormFromEntity(listaPedidos).get(0);
                order.setServerResponseMessage(SystemErrors.MSG_PEDIDO_ENCOTRADO.getValor());
            }            
        } catch (Exception e) {            
            if(e.getClass().getName().contains("EntityNotFoundException")){
                order = new OrderForm();
                order.setServerResponseMessage(SystemErrors.MSG_PEDIDO_NAO_ENCOTRADO.getValor());
            }else{
                log.error(SystemErrors.ERRO_AO_BUSCAR_PEDIDO.getValor(),e);
                throw new Exception(SystemErrors.ERRO_AO_BUSCAR_PEDIDO.getValor(), e);
            }
        }
        return order;
    }

    /**
     * Cria um novo pedido a partir dos produtos contidos no carrinho
     * 
     * @return
     */
    @Transactional
    public OrderForm creatNewOrder(OrderForm formFront) throws Exception{
       
        OrderForm orderForm = new OrderForm();
        Order orderEntity = null;        
        List<OrderProduct> itensPedido = null;
        formFront.setOperacao(Operacao.CRIAR_PEDIDO.getValor());

        ArrayList<OrderProduct> itensPedidoAtualizado = new ArrayList<OrderProduct>();
                
        log.info("creatNewOrder()");
        log.info("Iniciando processo de criação do pedido");
        
        if(formFront == null || formFront.getFormaPagamento()== null || formFront.getClientMail() == null){
            log.info("Erro na validação de campos do frontend.");
            throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());
        }

        
        //Cria Pedido        
        orderEntity = this.getOrderEntityFromOrderForm(formFront);
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
        log.info("Ítens do Carrinho adicionados ao pedido.");

        //Converte uma Entity do tipo Order em um objeto do tipo OrderForm
        orderForm = this.getOrderFormFromOrderEntity(orderEntity,itensPedidoAtualizado);
        
        orderForm.setServerResponseMessage(SystemErrors.MSG_PEDIDO_PROCESSADO_COM_SUCESSO.getValor());                
        log.info("Pedido gerado com sucesso!");

        return orderForm;
    }

 
    /**
     * Atualiza dados de um determinado pedido
     
     * @param formFront : Dados atualizados vindos do front
     * @param id : Número do pedido a ser atualizado
     * @return : Dados atualizados do pedido
     * @throws Exception
     */
    @Transactional
    public OrderForm updateOrder(OrderForm formFront,Integer id) throws Exception{
        OrderForm orderForm = new OrderForm();

        //Validar campos enviados do frontend
        this.validaFormAtualizaPedido(formFront);
        formFront.setOperacao(Operacao.ATUALIZAR_PEDIDO.getValor());

        //Atualizar dados do pedido
        Order orderEntity = null;
        List<OrderProduct> itensPedido = null;
        ArrayList<OrderProduct> itensPedidoAtualizado = new ArrayList<OrderProduct>();
        orderEntity = this.getOrderEntityFromOrderForm(formFront);
        orderEntity = orderRepository.save(orderEntity);
        
        //Atualiza ítens de pedido      
        itensPedido = this.getOrderProducts(formFront, orderEntity);
        OrderProduct itemPedido = null;
        for (OrderProduct orderProduct : itensPedido) {
            itemPedido = orderProductRepository.save(orderProduct);            
            log.info("Ítem " + orderProduct.getProduto().getName() + " atualizado  dentro do pedido " + orderEntity.getId() );
            itensPedidoAtualizado.add(itemPedido);
        }

        //Gerar form que será retornado para o frontend        
        orderForm = this.getOrderFormFromOrderEntity(orderEntity,itensPedidoAtualizado);
        orderForm.setServerResponseMessage(SystemErrors.MSG_PEDIDO_PROCESSADO_COM_SUCESSO.getValor());        

        return orderForm;
    }

   
    
    /**
     * Converte um objeto do tipo OrderForm em uma entity do tipo Order
     *
     * @param formFront: Objeto do tipo OrderForm
     * @return: Entity do tipo Order
     * 
     * @throws Exception
     */
    private Order getOrderEntityFromOrderForm(OrderForm formFront) throws Exception{

        
        User clienteEntity = null;    
        Order orderEntity = new Order();    
                    
        try{
            //Novo Pedido, Seta DataHora pedido e Status do pedido para recebido
            if(formFront.getOperacao().equals(Operacao.CRIAR_PEDIDO.getValor())){        
                log.info(formFront.getOperacao());        
                orderEntity.setDataHoraPedido(new Timestamp(System.currentTimeMillis()));
                orderEntity.setStatusPedido(StatusPedido.RECEBIDO.getValor());
                orderEntity.setFormaPagamento(formFront.getFormaPagamento());
            }else if(formFront.getOperacao().equals(Operacao.ATUALIZAR_PEDIDO.getValor())){   
                log.info("Atualizar dados do pedido " + formFront.getId() + formFront.getOperacao());
                orderEntity = null;
                //Busca pedido que será atualizado
                orderEntity = orderRepository.getById(formFront.getId());
                orderEntity.setFormaPagamento(formFront.getFormaPagamento());
                orderEntity.setStatusPedido(formFront.getStatusPedido());                
            }
            
            //Busca dados do cliente que esta efetuando o pedido. Somente na criação do prdido
            if(formFront.getClientMail() != null && formFront.getOperacao().equals(Operacao.CRIAR_PEDIDO.getValor())){                
                clienteEntity = userRepository.findByEmail(formFront.getClientMail()); 
                if(clienteEntity != null){
                    log.info("Cliente associado ao pedido : " + clienteEntity.getEmail());
                    orderEntity.setCliente(clienteEntity);           
                }
            }
        } catch (Exception e) {
            log.error("Erro ao criar pedido!", e);
            throw new Exception(e);
        }

        return orderEntity;
    }

    /**
     * Converte a lista de itens que compoem o pedido que veio do front em uma lista de entities do tipo OrderProduct
     *
     * @param formFront : Dados vindos do Frontend
     * @return : Lista de  Objetos do tipo OrderProduct
     * @throws Exception
     */
    private List<OrderProduct> getOrderProducts(OrderForm formFront,Order orderEntity) throws Exception{
                
        List<OrderProduct> listaItensPedido = new ArrayList<OrderProduct>();
       
        try {                    
            if(formFront.getItensDoPedido()!= null && formFront.getItensDoPedido().size() > 0){
                List<OrderItenForm>  itensPedido = formFront.getItensDoPedido();
                for (OrderItenForm orderItenForm : itensPedido) {
                
                    OrderProduct item = new OrderProduct();                    
                    //Inserir ítens a novo pedido
                    if(formFront.getOperacao().equals(Operacao.CRIAR_PEDIDO.getValor())){        
                        item.setOrder(orderEntity);
                        item.setPrice(orderItenForm.getProductPrice());
                        item.setQuantity(orderItenForm.getQuantity());                
                     }else { //Atualizar pedido já existente
                        if(formFront.getOperacao().equals(Operacao.ATUALIZAR_PEDIDO.getValor())){   
                            item = null;
                            //Busca ítem de pedido
                            log.info("Busncando ítem de pedido a ser atualizado");
                            item = orderProductRepository.getById(orderItenForm.getOrderItenId());                        
                            //Atualiza Quandidade e Preço
                            item.setPrice(orderItenForm.getProductPrice());
                            item.setQuantity(orderItenForm.getQuantity());                
                        }
                     }
                    //Busca produtos a partir da lista de Ids de Produtos que vieram do front
                    Product produto = productRepository.getById(orderItenForm.getProductId());                    
                    if(produto.getQuantity().intValue() < orderItenForm.getQuantity().intValue()){                        
                        log.error("Produto " + produto.getDescription()+ " não disponivel em estoque. Solicitados " + orderItenForm.getQuantity() + " e temos disponíveis apenas " +  produto.getQuantity() + " !");
                        throw new Exception(SystemErrors.ERRO_SEM_ESTOQUE.getValor());
                    }else{
                        //Atualiza estoque do produto que foi vendido
                        log.info("Atualizando estoque do produto " + produto.getName());
                        produto.setQuantity(produto.getQuantity().intValue() - orderItenForm.getQuantity().intValue());
                        productRepository.save(produto);
                        log.info("Estoque do produto " + produto.getName() + " foi atualizado com sucesso!");
                    }

                    item.setProduto(produto);
                    item.setProductName(produto.getName());
                    item.setImageLink(produto.getLink());
                    listaItensPedido.add(item);
                }
            }
        } catch (Exception e) {
            log.error("Erro ao buscar ítens de pedido", e);
            throw new Exception(e);
        }
        return listaItensPedido;
    }
}
