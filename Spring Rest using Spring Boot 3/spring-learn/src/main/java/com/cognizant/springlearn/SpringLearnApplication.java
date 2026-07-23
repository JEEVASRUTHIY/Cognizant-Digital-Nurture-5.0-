package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(
                    SpringLearnApplication.class
            );

    public static void main(String[] args) {

        LOGGER.info("Application started");

        SpringApplication.run(
                SpringLearnApplication.class,
                args
        );

        displayCountry();

        LOGGER.info("Application initialization completed");
    }

    private static void displayCountry() {

        LOGGER.info("displayCountry() started");

        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext(
                             "country.xml"
                     )) {

            ApplicationContext applicationContext =
                    context;

            Country country =
                    applicationContext.getBean(
                            "country",
                            Country.class
                    );

            LOGGER.debug(
                    "Country loaded from XML: {}",
                    country
            );
        }

        LOGGER.info("displayCountry() ended");
    }
}