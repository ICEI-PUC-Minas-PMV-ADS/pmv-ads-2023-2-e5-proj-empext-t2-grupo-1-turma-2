package com.br.pucminas.backend.domain.dto;

import lombok.Data;


@Data
public class EmailDto {

    private String ownerRef;
    private String emailFrom;
    private String emailTo;
    private String subject;
    private String text;
}