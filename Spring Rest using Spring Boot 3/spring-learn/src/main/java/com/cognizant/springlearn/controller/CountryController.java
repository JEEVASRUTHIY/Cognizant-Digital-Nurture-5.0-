package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    CountryController.class
            );

    private final CountryService countryService;

    public CountryController(
            CountryService countryService) {

        this.countryService = countryService;
        LOGGER.debug(
                "Inside CountryController constructor"
        );
    }

    @GetMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("getCountryIndia() started");

        Country country =
                countryService.getIndia();

        LOGGER.info("getCountryIndia() ended");

        return country;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {

        LOGGER.info("getAllCountries() started");

        List<Country> countries =
                countryService.getAllCountries();

        LOGGER.info("getAllCountries() ended");

        return countries;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(
            @PathVariable String code) {

        LOGGER.info(
                "getCountry() started for {}",
                code
        );

        Country country =
                countryService.getCountry(code);

        LOGGER.info("getCountry() ended");

        return country;
    }
}