package com.br.pucminas.backend.controller;

import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RequestMapping("/api")
@RestController
@Slf4j
public class UserController {

    @Autowired
    UserService userService;

    // ROTA DE GET - /v1/profile
    @GetMapping("/v1/user")
    public ResponseEntity<List<User>> getProfile() {
        return ResponseEntity.ok(userService.findAll());
    }

    // ROTA DE POST - /v1/profile
    @PostMapping("/v1/user")
    public ResponseEntity<User> postUser(@RequestBody UserForm form) {
        User newUser = userService.createUser(form);
        return ResponseEntity.created(URI.create("/v1/profile" + newUser.getId())).body(newUser);
    }

    // ROTA DE AUTENTICACAO - /v1/profile/autenticate-profile
    @PutMapping("/v1/user/login")
    public ResponseEntity<AutenticationDTO> autenticateUser(@RequestBody LoginDTO loginDto) {
        return ResponseEntity.ok().body(userService.loginUser(loginDto));
    }

    // ROTA DE PUT - /v1/profile Testenovo@123.com
    @PutMapping("/v1/user/{id}")
    public ResponseEntity<User> updateUser( @PathVariable("id") Integer id, @RequestBody UserForm form) {
        return ResponseEntity.accepted().body(userService.updateUser(form, id));
    }

    @DeleteMapping("/v1/user/{id}")
    public ResponseEntity<?> deleteUser( @PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/v1/user/recovery-password/{email}")
    public ResponseEntity<?> recoveryPassword( @PathVariable("email") String email) {
        userService.recoveryPassword(email);
        return ResponseEntity.noContent().build();
    }

}
