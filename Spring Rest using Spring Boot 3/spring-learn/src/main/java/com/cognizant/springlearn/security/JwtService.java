package com.cognizant.springlearn.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

    private final SecretKey signingKey;
    private final long expirationMilliseconds;

    public JwtService(
            @Value("${jwt.secret}")
            String encodedSecret,

            @Value("${jwt.expiration-milliseconds}")
            long expirationMilliseconds) {

        this.signingKey =
                Keys.hmacShaKeyFor(
                        Decoders.BASE64.decode(
                                encodedSecret
                        )
                );

        this.expirationMilliseconds =
                expirationMilliseconds;
    }

    public String generateToken(String username) {

        Date issuedAt = new Date();

        Date expiresAt =
                new Date(
                        issuedAt.getTime()
                                + expirationMilliseconds
                );

        return Jwts.builder()
                .subject(username)
                .issuedAt(issuedAt)
                .expiration(expiresAt)
                .signWith(signingKey)
                .compact();
    }
}