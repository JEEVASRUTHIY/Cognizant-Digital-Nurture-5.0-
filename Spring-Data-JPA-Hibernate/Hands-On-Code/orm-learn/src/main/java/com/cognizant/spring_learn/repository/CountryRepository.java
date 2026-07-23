package com.cognizant.spring_learn.repository;

import com.cognizant.spring_learn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository
        extends JpaRepository<Country, String> {

    // Country name containing text
    List<Country> findByNameContainingIgnoreCase(
            String text
    );

    // Country name containing text, sorted by name
    List<Country> findByNameContainingIgnoreCaseOrderByNameAsc(
            String text
    );

    // Country name starting with text, sorted by name
    List<Country> findByNameStartingWithIgnoreCaseOrderByNameAsc(
            String text
    );
}