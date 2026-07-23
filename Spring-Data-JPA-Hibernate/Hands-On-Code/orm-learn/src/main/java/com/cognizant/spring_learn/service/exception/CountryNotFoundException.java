package com.cognizant.spring_learn.service.exception;

public class CountryNotFoundException
        extends RuntimeException {

    public CountryNotFoundException(String countryCode) {
        super("Country not found for code: " + countryCode);
    }
}