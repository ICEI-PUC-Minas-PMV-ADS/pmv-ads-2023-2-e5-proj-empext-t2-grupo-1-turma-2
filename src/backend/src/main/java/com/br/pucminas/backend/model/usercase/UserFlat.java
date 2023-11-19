package com.br.pucminas.backend.model.usercase;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@NoArgsConstructor
@Data
public class UserFlat {
    private String name;
    private String phone;
    private String email;
    private String address;
    private String zipCode;
}
