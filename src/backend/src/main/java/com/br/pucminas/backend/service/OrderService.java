package com.br.pucminas.backend.service;

import org.springframework.stereotype.Service;

import com.br.pucminas.backend.domain.entity.Cart;
import com.br.pucminas.backend.domain.entity.CartItens;
import com.br.pucminas.backend.domain.entity.Order;
import com.br.pucminas.backend.domain.entity.OrderProduct;
import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.OrderForm;
import com.br.pucminas.backend.model.usercase.OrderItenForm;
import com.br.pucminas.backend.repository.CartRepository;
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
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Autowired
    CartService cartService;

    @Autowired
    CartRepository cartRepository;

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
    public List<Order> findOrderByUserId(Integer id) throws Exception{
        
        log.info("findOrderById " + id);
        return orderRepository.findAll(); //.stream().filter(fr -> fr.getCliente().getId().equals(id)).collect(Collectors.toList());
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

        
        Order orderEntity = new Order();
                    
        try{
            //Novo Pedido, Seta DataHora pedido e Status do pedido para recebido
            if(formFront.getOperacao().equals(Operacao.CRIAR_PEDIDO.getValor())){

                log.info(formFront.getOperacao());        
                orderEntity.setId(formFront.getId());
                orderEntity.setDataHoraPedido(new Timestamp(System.currentTimeMillis()));
                orderEntity.setStatusPedido(StatusPedido.RECEBIDO.getValor());
                orderEntity.setFormaPagamento(formFront.getFormaPagamento());
                orderEntity.setEmailCliente(formFront.getClientMail());
                orderEntity.setValorTotalPedido(formFront.getValorTotalPedido());
            }else if(formFront.getOperacao().equals(Operacao.ATUALIZAR_PEDIDO.getValor())){   
                log.info("Atualizar dados do pedido " + formFront.getId() + formFront.getOperacao());
                orderEntity = null;
                //Busca pedido que será atualizado
                orderEntity = orderRepository.getById(formFront.getId());
                orderEntity.setFormaPagamento(formFront.getFormaPagamento());
                orderEntity.setStatusPedido(formFront.getStatusPedido());                
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
//                        item.setPrice(orderItenForm.getProductPrice());
//                        item.setQuantity(orderItenForm.getQuantity());
                     }else { //Atualizar pedido já existente
                        if(formFront.getOperacao().equals(Operacao.ATUALIZAR_PEDIDO.getValor())){   
                            item = null;
                            //Busca ítem de pedido
                            log.info("Busncando ítem de pedido a ser atualizado");
                            item = orderProductRepository.getById(orderItenForm.getOrderItenId());
                            //Atualiza Quandidade e Preço
//                            item.setPrice(orderItenForm.getProductPrice());
//                            item.setQuantity(orderItenForm.getQuantity());
                        }
                     }
                    //Busca produtos a partir da lista de Ids de Produtos que vieram do front
                    Optional<Product> optionalProduct = productRepository.findByProductId(orderItenForm.getProductId());
                    Product produto = optionalProduct.get();

                    item.setProduto(produto);
//                    item.setProductName(produto.getName());
//                    item.setImageLink(produto.getLink());
                    listaItensPedido.add(item);
                }
            }
        } catch (Exception e) {
            log.error("Erro ao buscar ítens de pedido", e);
            throw new Exception(e);
        }
        return listaItensPedido;
    }

    
    /**
     * Gera um pedido com base em um carrinho do usuário
     
     * @param idCarrinho : Identificador do carrinho do usuário
     * @return
     * @throws Exception
     */
    public OrderForm creatNewOrderByIdCarrinho(Integer idCarrinho,String formaPagamento) throws Exception{
        
        log.info("#########  creatNewOrderByIdCarrinho()  ##########");
        log.info("Buscando dados do pedido a partir do carrinho do usuário.");

        Optional<Cart> carrinho;
        OrderForm formFront = new OrderForm();
        try {
            if(idCarrinho != null){
                carrinho  = cartRepository.findById(idCarrinho);
                if(!carrinho.isPresent()) throw new Exception(SystemErrors.ERRO_INCONSISTENCIA_CAMPOS_FRONT.getValor());

                //Montando Objeto OrderForm a partir do carrinho para só então gerar o pedido
                formFront.setClientMail(carrinho.get().getCliente().getEmail());
                formFront.setDataHoraPedido(new Timestamp(System.currentTimeMillis()));
                formFront.setFormaPagamento(formaPagamento);
                formFront.setStatusPedido(StatusPedido.RECEBIDO.getValor());
                                
                ArrayList<CartItens> listaCarrinho = new ArrayList<CartItens>(carrinho.get().getItensCarrinho());
                ArrayList<OrderItenForm> listaItensPedido =  new ArrayList<OrderItenForm>();
                for (CartItens cartItens : listaCarrinho) {
                    OrderItenForm orderItens = new OrderItenForm();
                    orderItens.setProductId(cartItens.getProduto().getId());
                    listaItensPedido.add(orderItens);
                }
                formFront.setItensDoPedido(listaItensPedido);                

                log.info("Gerando pedido a partir dos dados extraidos do carrinho");
                formFront = this.creatNewOrder(formFront);

                log.info("Excluindo carrinho.");
                cartService.deleteCartByUser(carrinho.get().getCliente().getId());
            
            }                        
            
        } catch (Exception e) {
            log.error("Erro ao gerar pedido a partir do carrinho", e);
            throw e;
        }
        return formFront;
    }

}
