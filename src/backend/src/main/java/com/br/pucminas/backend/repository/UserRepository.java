package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT u.* FROM user_profile u WHERE u.email = ?1", nativeQuery = true)
    User findByEmail(String email);

}
