package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    AuthenticationController.class
            );

    private final JwtService jwtService;

    public AuthenticationController(
            JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            Authentication authentication) {

        LOGGER.info("authenticate() started");

        String username = authentication.getName();

        LOGGER.debug(
                "Authenticated user: {}",
                username
        );

        String token =
                jwtService.generateToken(username);

        Map<String, String> response =
                new HashMap<>();

        response.put("token", token);

        LOGGER.info("authenticate() ended");

        return response;
    }
}