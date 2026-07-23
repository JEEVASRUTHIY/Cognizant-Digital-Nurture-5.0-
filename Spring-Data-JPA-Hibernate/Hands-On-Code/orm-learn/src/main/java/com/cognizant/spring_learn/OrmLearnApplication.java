package com.cognizant.spring_learn;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    OrmLearnApplication.class
            );

    private static CountryService countryService;

    public static void main(String[] args) {

        ConfigurableApplicationContext context =
                SpringApplication.run(
                        OrmLearnApplication.class,
                        args
                );

        countryService =
                context.getBean(CountryService.class);

        // Previous Hands-on tests
        // getCountryByCodeTest();
        // testAddCountry();

        // Query Methods tests
        testCountryContainingText();
        testCountryContainingTextSorted();
        testCountryStartingWith();
    }

    // Find country using country code
    private static void getCountryByCodeTest() {

        LOGGER.info("Find country test started");

        Country country =
                countryService.findCountryByCode("IN");

        LOGGER.debug("Country: {}", country);

        if ("India".equals(country.getName())) {
            LOGGER.info(
                    "Test passed: IN refers to India"
            );
        } else {
            LOGGER.error(
                    "Test failed: expected India but found {}",
                    country.getName()
            );
        }

        LOGGER.info("Find country test ended");
    }

    // Add a new country
    private static void testAddCountry() {

        LOGGER.info("Add country test started");

        Country newCountry =
                new Country("ZZ", "Test Country");

        countryService.addCountry(newCountry);

        Country savedCountry =
                countryService.findCountryByCode("ZZ");

        LOGGER.debug(
                "Added country: {}",
                savedCountry
        );

        LOGGER.info(
                "New country fetched successfully: {}",
                savedCountry
        );

        LOGGER.info("Add country test ended");
    }

    // Find country names containing "ou"
    private static void testCountryContainingText() {

        LOGGER.info(
                "Countries containing 'ou'"
        );

        List<Country> countries =
                countryService.searchCountries("ou");

        for (Country country : countries) {
            LOGGER.info(
                    "{} - {}",
                    country.getCode(),
                    country.getName()
            );
        }
    }

    // Find country names containing "ou",
    // sorted in ascending order by name
    private static void testCountryContainingTextSorted() {

        LOGGER.info(
                "Countries containing 'ou', sorted by name"
        );

        List<Country> countries =
                countryService.searchCountriesSorted("ou");

        for (Country country : countries) {
            LOGGER.info(
                    "{} - {}",
                    country.getCode(),
                    country.getName()
            );
        }
    }

    // Find country names beginning with "Z"
    private static void testCountryStartingWith() {

        LOGGER.info(
                "Countries starting with 'Z'"
        );

        List<Country> countries =
                countryService.searchCountriesStartingWith("Z");

        for (Country country : countries) {
            LOGGER.info(
                    "{} - {}",
                    country.getCode(),
                    country.getName()
            );
        }
    }
}