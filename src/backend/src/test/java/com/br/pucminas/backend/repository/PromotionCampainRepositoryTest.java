package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.PromotionCampain;
import com.br.pucminas.backend.repository.PromotionCampainRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class PromotionCampainRepositoryTest {

    @Autowired
    private PromotionCampainRepository promotionCampainRepository;

    @Test
    public void testFindAll() {
        // Crie algumas campanhas de promoção para testar
        PromotionCampain campain1 = new PromotionCampain("Campain 1");
        PromotionCampain campain2 = new PromotionCampain("Campain 2");

        promotionCampainRepository.save(campain1);
        promotionCampainRepository.save(campain2);

        // Execute a consulta padrão de findAll
        List<PromotionCampain> campains = promotionCampainRepository.findAll();

        assertEquals(2, campains.size());
        assertEquals(campain1.getTitle(), campains.get(0).getTitle());
        assertEquals(campain2.getTitle(), campains.get(1).getTitle());
    }
}
