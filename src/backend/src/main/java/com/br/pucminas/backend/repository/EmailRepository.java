package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.Email;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface EmailRepository extends JpaRepository<Email, UUID> {
}
