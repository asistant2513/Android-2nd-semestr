package com.igor.android.services;

import com.igor.android.models.Member;
import com.igor.android.models.User;
import com.igor.android.repos.MemberRepository;
import com.igor.android.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository){
        this.repository = repository;
    }

    public User getOneById(String username){
        return this.repository.findById(username).orElse(null);
    }

    public void save(User user){
        this.repository.save(user);
    }

    public List<User> getAll(){
        return this.repository.findAll();
    }

    public void delete(User user){
        this.repository.delete(user);
    }

    public void deleteById(String username){
        this.repository.deleteById(username);
    }

}
