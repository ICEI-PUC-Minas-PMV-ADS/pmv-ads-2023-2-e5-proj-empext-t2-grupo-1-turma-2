package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.Product;
import com.br.pucminas.backend.domain.entity.PromotionCampain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PromotionCampainRepository  extends JpaRepository<PromotionCampain, Integer> {
}
