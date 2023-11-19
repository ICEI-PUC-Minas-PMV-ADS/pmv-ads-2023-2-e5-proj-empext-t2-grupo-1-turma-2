package com.br.pucminas.backend.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AutenticationDTO {
    private Integer id;
    private String name;
    private String email;
    private String token;
    private Boolean isRootUser;
    private String adress;
    private String cellphone;
}
