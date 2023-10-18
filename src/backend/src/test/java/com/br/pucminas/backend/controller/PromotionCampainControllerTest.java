package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.controller.PromotionCampainController;
import com.br.pucminas.backend.domain.entity.PromotionCampain;
import com.br.pucminas.backend.model.usercase.PromotionCampainForm;
import com.br.pucminas.backend.service.PromotionCampainService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

public class PromotionCampainControllerTest {

    @InjectMocks
    private PromotionCampainController promotionCampainController;

    @Mock
    private PromotionCampainService promotionCampainService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetProfile() {
        List<PromotionCampain> campainList = new ArrayList<>();
        Mockito.when(promotionCampainService.findAll()).thenReturn(campainList);

        ResponseEntity<List<PromotionCampain>> response = promotionCampainController.getProfile();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(campainList, response.getBody());
    }

    @Test
    public void testPostUser() {
        PromotionCampainForm campainForm = new PromotionCampainForm();
        PromotionCampain createdCampain = new PromotionCampain();
        Mockito.when(promotionCampainService.createProduct(campainForm)).thenReturn(createdCampain);

        ResponseEntity<PromotionCampain> response = promotionCampainController.postUser(campainForm);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(createdCampain, response.getBody());
    }
}
