package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Instrument {

    @Id
    @GeneratedValue
    private Long id;
    private String instrumentName;
//    private String image;
    private String description;
    private String famousArtist;

    public Instrument(){
    }

    public Instrument(String instrumentName, String description, String famousArtist) {   //String image
        this.instrumentName = instrumentName;
//        this.image = image;           //how do we handle urls?
        this.description = description;
        this.famousArtist = famousArtist;
    }

    public Instrument(String instrumentName) {
        this.instrumentName = instrumentName;
    }

    public Long getId() {
        return id;
    }

    public String getInstrumentName() {
        return instrumentName;
    }

    public String getImage() {
        return image;
    }

    public String getDescription() {
        return description;
    }

    public String getFamousArtist() {
        return famousArtist;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Instrument that = (Instrument) o;
        return Objects.equals(id, that.id) && Objects.equals(instrumentName, that.instrumentName) && Objects.equals(image, that.image) && Objects.equals(description, that.description) && Objects.equals(famousArtist, that.famousArtist);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, instrumentName, image, description, famousArtist);
    }
}
