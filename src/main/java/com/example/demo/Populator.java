package com.example.demo;

import com.example.demo.models.Instrument;
import com.example.demo.repos.InstrumentRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private InstrumentRepo instrumentRepo;

    @Override
    public void run(String... args) throws Exception {

        Instrument piano = new Instrument("piano", "a keyboard instrument " +
                "that you play by pressing black and white keys. Pressing keys cause hammers" +
                "to hit strings and produce sounds", "Famous Pianist: Ludwig Van Beethoven");

        Instrument guitar = new Instrument("guitar", "a stringed instrument with a " +
                "flat body, a long neck with frets, and six strings that are played with the fingers or with a " +
                "pick", "Famous Guitarist: Jimi Hendrix");

        Instrument trumpet = new Instrument("trumpet", "a brass instrument that has a metal tube with one" +
                "narrow end and one wide end. It is played by pressing three buttons to change notes.",
                "Famous Trumpet Player: Louis Armstrong");

        Instrument cello = new Instrument("cello", "a stringed instrument that is large and wooden with four strings." +
                "It is played with a bow while sitting down and holding it upright between your legs.",
                "Famous Cellist: Yo-Yo Ma");

        instrumentRepo.save(piano);
        instrumentRepo.save(guitar);
        instrumentRepo.save(trumpet);
        instrumentRepo.save(cello);
    }
}
