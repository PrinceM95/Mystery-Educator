package com.example.demo.restcontrollers;

import com.example.demo.models.Instrument;
import com.example.demo.repos.InstrumentRepo;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin
public class InstrumentController {

    @Resource
    private InstrumentRepo instrumentRepo;

    @GetMapping("/api/instruments")
    public Collection<Instrument> getInstruments() {
        return (Collection<Instrument>) instrumentRepo.findAll();
    }

    @GetMapping("api/instruments/{id}")
    public Optional<Instrument> getInstrument(@PathVariable Long id) {
        return instrumentRepo.findById(id);
    }

    @PostMapping("/api/add-instrument")
    public Collection<Instrument> addInstrument (@RequestBody String body) throws JSONException {
        JSONObject newInstrument = new JSONObject(body);
        String instrumentName = newInstrument.getString("name");
        Optional<Instrument> instrumentToAddOpt = instrumentRepo.findByInstrumentName(instrumentName);

        if (instrumentToAddOpt.isEmpty()) {
            Instrument instrumentToAdd = new Instrument(instrumentName);
            instrumentRepo.save(instrumentToAdd);
        }
        return (Collection<Instrument>) instrumentRepo.findAll();
    }

    @DeleteMapping("/api/instruments/{id}/delete-instrument")
    public Collection<Instrument> deleteInstrument(@PathVariable Long id) throws JSONException {
        Optional<Instrument> instrumentToRemoveOpt = instrumentRepo.findById(id);
        if(instrumentToRemoveOpt.isPresent()){
            instrumentRepo.delete(instrumentToRemoveOpt.get());
        }
        return (Collection<Instrument>) instrumentRepo.findAll();
    }

}
