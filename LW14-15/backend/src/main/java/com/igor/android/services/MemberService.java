package com.igor.android.services;

import com.igor.android.models.Member;
import com.igor.android.repos.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    private final MemberRepository repository;

    @Autowired
    public MemberService(MemberRepository repository){
        this.repository = repository;
    }

    public Member getOneById(long id){
        return this.repository.findById(id).orElse(null);
    }

    public void save(Member member){
        this.repository.save(member);
    }

    public List<Member> getAll(){
        return this.repository.findAll();
    }

    public void delete(Member member){
        this.repository.delete(member);
    }

    public void deleteById(long id){
        this.repository.deleteById(id);
    }
}