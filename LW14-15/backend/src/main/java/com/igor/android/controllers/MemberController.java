package com.igor.android.controllers;

import com.igor.android.models.Member;
import com.igor.android.services.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {

    private final MemberService service;

    @Autowired
    public MemberController(MemberService service){
        this.service = service;
    }

    @GetMapping
    public List<Member> getAll(){
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    public Member getById(@PathVariable long id){
        return this.service.getOneById(id);
    }

    @PostMapping
    public void add(@RequestBody Member member){
        this.service.save(member);
    }

    @PatchMapping
    public void edit(@RequestBody Member member){
        this.service.save(member);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){
        this.service.deleteById(id);
    }
}
