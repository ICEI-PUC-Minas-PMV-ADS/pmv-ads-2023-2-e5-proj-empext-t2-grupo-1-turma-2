package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.entity.PromotionCampain;
import com.br.pucminas.backend.model.usercase.PromotionCampainForm;
import com.br.pucminas.backend.repository.PromotionCampainRepository;
import com.br.pucminas.backend.service.PromotionCampainService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;

public class PromotionCampainServiceTest {

    @InjectMocks
    private PromotionCampainService promotionCampainService;

    @Mock
    private PromotionCampainRepository promotionCampainRepository;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindAll() {
        List<PromotionCampain> campainList = new ArrayList<>();
        Mockito.when(promotionCampainRepository.findAll()).thenReturn(campainList);

        List<PromotionCampain> result = promotionCampainService.findAll();

        assertEquals(campainList, result);
    }

    @Test
    public void testCreateProduct() {
        PromotionCampainForm campainForm = new PromotionCampainForm();
        PromotionCampain createdCampain = new PromotionCampain();
        Mockito.when(promotionCampainRepository.save(Mockito.any(PromotionCampain.class))).thenReturn(createdCampain);

        PromotionCampain result = promotionCampainService.createProduct(campainForm);

        assertEquals(createdCampain, result);
    }
}
