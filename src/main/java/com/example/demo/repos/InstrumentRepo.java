package com.example.demo.repos;

import com.example.demo.models.Instrument;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface InstrumentRepo extends CrudRepository<Instrument, Long> {

    Optional<Instrument> findByInstrumentName(String instrumentName);

}
