package com.br.pucminas.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import java.security.SecureRandom;

@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new PasswordEncoder() {

            final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10, new SecureRandom());

            @Override public String encode(CharSequence rawPassword) {
                return encoder.encode(rawPassword);
            }

            @Override public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return encoder.matches(rawPassword, encodedPassword);
            }
        };
    }


}
