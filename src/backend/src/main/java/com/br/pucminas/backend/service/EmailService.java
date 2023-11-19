package com.br.pucminas.backend.service;

import com.br.pucminas.backend.domain.entity.Email;
import com.br.pucminas.backend.repository.EmailRepository;
import com.br.pucminas.backend.utils.enums.StatusEmail;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Properties;
import java.util.UUID;

@Service
@Slf4j
public class EmailService {

    @Autowired
    EmailRepository emailRepository;

    @Autowired
    private JavaMailSender emailSender;

    @Transactional
    public Email sendEmail(Email email) {
        email.setSendDateEmail(LocalDateTime.now());

        try{
            log.info("Enviando email...");
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(email.getEmailFrom());
            message.setTo(email.getEmailTo());
            message.setSubject(email.getSubject());
            message.setText(email.getText());
            email.setStatusEmail("0");


            JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();
            Properties props = javaMailSender.getJavaMailProperties();

            props.put("mail.transport.protocol", "smtp");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.debug", "true");

            javaMailSender.setHost("smtp.gmail.com");
            javaMailSender.setUsername(email.getEmailFrom());
            javaMailSender.setPassword("kuhbakqoqghulfmd");
            javaMailSender.setPort(Integer.parseInt("587"));
            javaMailSender.setProtocol("smtp");


            log.info("[EmailService.sentEmail] - [ Sending email to " + email.getEmailTo() + " from " + email.getEmailFrom() + " ]");
            javaMailSender.setJavaMailProperties(props);
            javaMailSender.send(message);


            email.setStatusEmail("1");
            log.info("Email enviado com sucesso!");
        } catch (MailException e){
            email.setStatusEmail("2");
            log.error("Ocorreu um erro ao tentar enviar o email. Causa: {}", e.getMessage());
            e.printStackTrace();
        } finally {
            log.info("status do envio do email: {}", email.getStatusEmail());
            log.info("emailModel: {}", email);
            log.info("Salvando email no banco de dados.");
            return emailRepository.save(email);
        }
    }

    public Page<Email> findAll(Pageable pageable) {
        return  emailRepository.findAll(pageable);
    }

    public Optional<Email> findById(UUID emailId) {
        return emailRepository.findById(emailId);
    }
}