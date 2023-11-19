package com.br.pucminas.backend.model.usercase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PromotionCampainForm {

    String name;
    String description;
    String imageLink;
    Boolean active;

}
