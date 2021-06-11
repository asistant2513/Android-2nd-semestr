package com.igor.android.controllers;

import com.igor.android.models.Band;
import com.igor.android.services.BandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bands")
public class BandController {

    private final BandService service;

    @Autowired
    public BandController(BandService service){
        this.service = service;
    }

    @GetMapping
    public List<Band> getAll(){
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    public Band getBandById(@PathVariable long id){
        return this.service.getOneById(id);
    }

    @PostMapping
    public void addBand(@RequestBody Band band){
        this.service.save(band);
    }

    @PatchMapping
    public void editBand(@RequestBody Band band){
        this.service.save(band);
    }

    @DeleteMapping("/{id}")
    public void deleteBand(@PathVariable long id){
        this.service.deleteById(id);
    }
}
