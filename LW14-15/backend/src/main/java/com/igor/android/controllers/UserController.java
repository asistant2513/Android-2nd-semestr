package com.igor.android.controllers;

import com.igor.android.models.User;
import com.igor.android.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    @Autowired
    public UserController(UserService service){
        this.service = service;
    }

    @GetMapping
    public List<User> getAll(){
        return this.service.getAll();
    }

    @GetMapping("/{username}")
    public User signIn(@PathVariable String username, @RequestParam String password){
        User u = this.service.getOneById(username);
        if(u != null && u.checkPassword(password)){
            return u;
        }
        else
            return null;
    }

    @PostMapping
    public void add(@RequestBody User user){
        this.service.save(user);
    }

    @PatchMapping
    public void edit(@RequestBody User user){
        if(user.getPassword().length() != 32){
            user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        }
        this.service.save(user);
    }

    @DeleteMapping("/{username}")
    public void delete(@PathVariable String username){
        this.service.deleteById(username);
    }

}
