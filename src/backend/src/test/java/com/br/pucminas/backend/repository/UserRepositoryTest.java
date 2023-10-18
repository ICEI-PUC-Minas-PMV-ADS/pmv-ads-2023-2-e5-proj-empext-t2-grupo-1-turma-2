package com.br.pucminas.backend.repository;

import com.br.pucminas.backend.domain.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByEmail() {
        // Crie um usuário com um email específico para testar
        User user = User.builder().name("Test User").email("test@example.com").password("password").build();

        userRepository.save(user);

        // Execute a consulta personalizada
        User foundUser = userRepository.findByEmail("test@example.com");

        // Verifique se o usuário retornado tem o email correto
        assertEquals("test@example.com", foundUser.getEmail());
    }
}
