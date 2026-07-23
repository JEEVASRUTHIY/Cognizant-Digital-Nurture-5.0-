package com.cognizant.springlearn.service;

import com.cognizant.springlearn.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import jakarta.annotation.PreDestroy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    CountryService.class
            );

    private final ClassPathXmlApplicationContext context;

    public CountryService() {

        LOGGER.info("CountryService constructor started");

        context =
                new ClassPathXmlApplicationContext(
                        "country.xml"
                );

        LOGGER.info("CountryService constructor ended");
    }

    public Country getIndia() {

        LOGGER.info("getIndia() started");

        Country country =
                context.getBean(
                        "country",
                        Country.class
                );

        LOGGER.debug("Country: {}", country);
        LOGGER.info("getIndia() ended");

        return country;
    }

    public List<Country> getAllCountries() {

        LOGGER.info("getAllCountries() started");

        @SuppressWarnings("unchecked")
        List<Country> countries =
                context.getBean(
                        "countryList",
                        List.class
                );

        LOGGER.debug("Countries: {}", countries);
        LOGGER.info("getAllCountries() ended");

        return countries;
    }

    public Country getCountry(String code) {

        LOGGER.info(
                "getCountry() started for code: {}",
                code
        );

        Country country =
                getAllCountries()
                        .stream()
                        .filter(item ->
                                item.getCode()
                                        .equalsIgnoreCase(code)
                        )
                        .findFirst()
                        .orElseThrow(() ->
                                new CountryNotFoundException(code)
                        );

        LOGGER.debug("Country found: {}", country);
        LOGGER.info("getCountry() ended");

        return country;
    }

    @PreDestroy
    public void closeContext() {
        context.close();
    }
}