package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.net.URI;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

public class UserControllerTest {

    @InjectMocks
    private UserController userController;

    @Mock
    private UserService userService;

    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetProfile() {
        List<User> userList = Arrays.asList(new User(), new User());
        Mockito.when(userService.findAll()).thenReturn(userList);

        ResponseEntity<List<User>> response = userController.getProfile();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(userList, response.getBody());
    }

    @Test
    public void testPostUser() {
        UserForm userForm = new UserForm();
        User newUser = new User();
        Mockito.when(userService.createUser(userForm)).thenReturn(newUser);

        ResponseEntity<User> response = userController.postUser(userForm);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(newUser, response.getBody());
    }

    @Test
    public void testAutenticateUser() {
        LoginDTO loginDto = new LoginDTO();
        AutenticationDTO autenticationDTO = new AutenticationDTO();
        Mockito.when(userService.loginUser(loginDto)).thenReturn(autenticationDTO);

        ResponseEntity<AutenticationDTO> response = userController.autenticateUser(loginDto);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(autenticationDTO, response.getBody());
    }

    @Test
    public void testUpdateUser() {
        Integer userId = 1;
        UserForm userForm = new UserForm();
        User updatedUser = new User();
        Mockito.when(userService.updateUser(userForm, userId)).thenReturn(updatedUser);

        ResponseEntity<User> response = userController.updateUser(userId, userForm);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(updatedUser, response.getBody());
    }
}