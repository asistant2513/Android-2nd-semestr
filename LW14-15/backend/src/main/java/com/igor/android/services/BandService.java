package com.igor.android.services;

import com.igor.android.models.Band;
import com.igor.android.repos.BandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BandService {

    private final BandRepository repository;

    @Autowired
    public BandService(BandRepository repository){
        this.repository = repository;
    }

    public Band getOneById(long id){
        return this.repository.findById(id).orElse(null);
    }

    public void save(Band band){
        this.repository.save(band);
    }

    public List<Band> getAll(){
        return this.repository.findAll();
    }

    public void delete(Band band){
        this.repository.delete(band);
    }

    public void deleteById(long id){
        this.repository.deleteById(id);
    }
}
