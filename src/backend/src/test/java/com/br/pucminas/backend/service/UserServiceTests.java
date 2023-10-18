package com.br.pucminas.backend.service;
import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

public class UserServiceTests {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFindAll() {
        User user1 = new User();
        User user2 = new User();
        ArrayList<User> userList = new ArrayList<>();
        userList.add(user1);
        userList.add(user2);

        Mockito.when(userRepository.findAll()).thenReturn(userList);

        ArrayList<User> result = (ArrayList<User>) userService.findAll();

        assertEquals(2, result.size());
        assertEquals(user1, result.get(0));
        assertEquals(user2, result.get(1));
    }

    @Test
    public void testCreateUser() {
        UserForm userForm = new UserForm();
        userForm.setEmail("user@example.com");
        userForm.setPassword("password");

        Mockito.when(userRepository.findByEmail(userForm.getEmail())).thenReturn(null);
        Mockito.when(passwordEncoder.encode(userForm.getPassword())).thenReturn("encodedPassword");

        User createdUser = new User();
        Mockito.when(userRepository.save(Mockito.any(User.class))).thenReturn(createdUser);

        User result = userService.createUser(userForm);

        assertEquals(createdUser, result);
        assertEquals("encodedPassword", result.getPassword());
    }

    @Test
    public void testGetUserByEmail() {
        String email = "user@example.com";
        User user = new User();
        Mockito.when(userRepository.findByEmail(email)).thenReturn(user);

        User result = userService.getUserByEmail(email);

        assertEquals(user, result);
    }

    @Test
    public void testLoginUser() {
        String email = "user@example.com";
        String password = "password";
        LoginDTO loginDTO = new LoginDTO(email, password);

        User user = new User();
        Mockito.when(userRepository.findByEmail(email)).thenReturn(user);
        Mockito.when(passwordEncoder.matches(password, user.getPassword())).thenReturn(true);

        AutenticationDTO autenticationDTO = userService.loginUser(loginDTO);

        assertNotNull(autenticationDTO);
        assertEquals(user.getId(), autenticationDTO.getId());
        assertEquals(email, autenticationDTO.getEmail());
        assertNotNull(autenticationDTO.getToken());
        assertEquals(false, autenticationDTO.getIsRootUser());
    }

    @Test
    public void testLoginUserWithRootEmail() {
        String email = "sys_root@gmail.com";
        String password = "password";
        LoginDTO loginDTO = new LoginDTO(email, password);

        User user = new User();
        Mockito.when(userRepository.findByEmail(email)).thenReturn(user);

        AutenticationDTO autenticationDTO = userService.loginUser(loginDTO);

        assertNotNull(autenticationDTO);
        assertEquals(user.getId(), autenticationDTO.getId());
        assertEquals(email, autenticationDTO.getEmail());
        assertNotNull(autenticationDTO.getToken());
        assertEquals(true, autenticationDTO.getIsRootUser());
    }

    @Test
    public void testLoginUserInvalidPassword() {
        String email = "user@example.com";
        String password = "invalid_password";
        LoginDTO loginDTO = new LoginDTO(email, password);

        User user = new User();
        Mockito.when(userRepository.findByEmail(email)).thenReturn(user);
        Mockito.when(passwordEncoder.matches(password, user.getPassword())).thenReturn(false);

        AutenticationDTO autenticationDTO = userService.loginUser(loginDTO);

        assertNull(autenticationDTO);
    }

    @Test
    public void testUpdateUser() {
        Integer id = 1;
        UserForm userForm = new UserForm();
        User user = new User();
        Mockito.when(userRepository.findById(id)).thenReturn(Optional.of(user));

        User updatedUser = userService.updateUser(userForm, id);

        assertNotNull(updatedUser);
        Mockito.verify(userRepository).save(user);
    }

    @Test
    public void testUpdateUserNotFound() {
        Integer id = 1;
        UserForm userForm = new UserForm();
        Mockito.when(userRepository.findById(id)).thenReturn(Optional.empty());

        User updatedUser = userService.updateUser(userForm, id);

        assertNull(updatedUser);
    }
}
