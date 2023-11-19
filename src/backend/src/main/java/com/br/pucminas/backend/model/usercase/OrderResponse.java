package com.br.pucminas.backend.model.usercase;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {

    private Integer id;

    private Timestamp createdAt;
    private Timestamp updatedAt;
    private UserFlat user;
    private String paymentMethod;
    private String orderStatus;
    private Float totalValueOrder;
    private String productInfo;

}
