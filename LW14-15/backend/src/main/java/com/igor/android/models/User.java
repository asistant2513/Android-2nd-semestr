package com.igor.android.models;

import org.springframework.util.DigestUtils;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

    public User(){ }

    public User(String username, String password, String role) {
        this.username = username;
        this.password = DigestUtils.md5DigestAsHex(password.getBytes());
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = DigestUtils.md5DigestAsHex(password.getBytes());
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public boolean checkPassword(String password){
        return this.password.equals(DigestUtils.md5DigestAsHex(password.getBytes()));
    }
}
