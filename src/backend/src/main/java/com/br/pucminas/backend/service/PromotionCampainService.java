package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.PromotionCampain;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.ProductForm;
import com.br.pucminas.backend.model.usercase.PromotionCampainForm;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.repository.ProductRepository;
import com.br.pucminas.backend.repository.PromotionCampainRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class PromotionCampainService {

    @Autowired
    PromotionCampainRepository repository;

    public List<PromotionCampain> findAll(){
        log.info("findAll");
        return repository.findAll();
    }

    public PromotionCampain createProduct(PromotionCampainForm form){

        PromotionCampain newCampain = PromotionCampain.
                builder().
                title(form.getName()).
                description(form.getDescription()).
                imageLink(form.getImageLink()).
                build();

        repository.save(newCampain);

        return newCampain;
    }
    public PromotionCampain updatePromotion(PromotionCampainForm form, Integer id){
        PromotionCampain load = repository.findById(id).orElse(null);

        if(repository == null){
            log.info("[PromotionCampainService.updatePromotion] - [Promotion not found]");
            return null;
        }

        load.setDescription(form.getDescription());
        load.setTitle(form.getName());
        load.setImageLink(form.getImageLink());
        load.setActive(form.getActive());
        return repository.save(load);
    }

    public void deletePromotion(Integer id){
        PromotionCampain load = repository.findById(id).orElse(null);

        if(repository == null){
            log.info("[PromotionCampainService.updatePromotion] - [Promotion not found]");
            return;
        }

        repository.delete(load);
    }

}
