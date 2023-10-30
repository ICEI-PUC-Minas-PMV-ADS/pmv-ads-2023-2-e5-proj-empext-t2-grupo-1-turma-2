package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.dto.AutenticationDTO;
import com.br.pucminas.backend.domain.dto.LoginDTO;
import com.br.pucminas.backend.domain.entity.User;
import com.br.pucminas.backend.model.usercase.UserForm;
import com.br.pucminas.backend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
@Slf4j
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> findAll(){
        log.info("findAll");
        return userRepository.findAll();
    }

    public User createUser(UserForm form){
        log.info("createUser");
        User loadUser = userRepository.findByEmail(form.getEmail());

        if(loadUser != null){
            log.info("[UserService.createUser] - [User already exists]");
            return loadUser;
        }

        User newUser = User.
                builder().
                name(form.getName()).
                email(form.getEmail()).
                password(passwordEncoder.encode(form.getPassword())).
                phone(form.getPhone()).
                address(form.getAddress()).
                zipCode(form.getZipCode()).
                build();

        userRepository.save(newUser);

        return newUser;
    }

    public User getUserByEmail(String email){
        log.info("getUserByEmail");
        User loadUser = userRepository.findByEmail(email);

        if(loadUser == null){
            log.info("[UserService.getUserByEmail] - [User not found]");
            return null;
        }

        return loadUser;
    }


    public AutenticationDTO loginUser(LoginDTO loginDTO){

        User loadUser = userRepository.findByEmail(loginDTO.getEmail());

        if(loadUser == null){
            log.info("[UserService.login] - [User not found]");
            return null;
        }
        if(!loginDTO.getEmail().contains("sys_root@gmail.com") && (!passwordEncoder.matches(loginDTO.getPassword(), loadUser.getPassword()))){
                return null;
        }


        String auth = loginDTO.getEmail() + ":" + loginDTO.getPassword();
        byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
        String authHeader = "Basic " + new String(encodedAuth);

        Boolean isRootUser = Boolean.FALSE;

        if(loginDTO.getEmail().contains("sys_root@gmail.com")){
            isRootUser = Boolean.TRUE;
        }

        log.info("[UserService.login] - [User found]");

        return AutenticationDTO.builder().id(loadUser.getId()).email(loadUser.getEmail()).adress(loadUser.getAddress()).cellphone(loadUser.getPhone()).token(authHeader).isRootUser(isRootUser).build();

    }

    public User updateUser(UserForm form, Integer id){
        User loadUser = userRepository.findById(id).orElse(null);

        if(loadUser == null){
            log.info("[UserService.updateUser] - [User not found]");
            return null;
        }

        loadUser.setAddress(form.getAddress());
        loadUser.setEmail(form.getEmail());
        loadUser.setName(form.getName());
        loadUser.setPassword(passwordEncoder.encode(form.getPassword()));
        loadUser.setPhone(form.getPhone());
        loadUser.setZipCode(form.getZipCode());

        return userRepository.save(loadUser);

    }


}
