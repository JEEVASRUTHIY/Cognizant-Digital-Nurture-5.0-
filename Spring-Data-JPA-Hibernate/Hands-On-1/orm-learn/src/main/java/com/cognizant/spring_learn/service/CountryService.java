package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.repository.CountryRepository;
import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CountryService {

    private final CountryRepository countryRepository;

    public CountryService(
            CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }

    // Hands-on 6: Find country using country code
    @Transactional
    public Country findCountryByCode(String countryCode)
            throws CountryNotFoundException {

        Optional<Country> result =
                countryRepository.findById(countryCode);

        if (!result.isPresent()) {
            throw new CountryNotFoundException(countryCode);
        }

        Country country = result.get();

        return country;
    }

    // Hands-on 7: Add new country
    @Transactional
    public void addCountry(Country country) {
        countryRepository.save(country);
    }
}