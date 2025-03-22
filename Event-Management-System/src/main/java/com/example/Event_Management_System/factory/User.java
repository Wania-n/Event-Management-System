package com.example.Event_Management_System.factory;
import jakarta.persistence.*;

// This is an abstract class User with child class as Organizer and Admin
@MappedSuperclass
public abstract class User {

    // Attributes
    @Column(name = "phone", nullable = false, length = 11)
    private String phone;

    @Column(name = "firstname", length = 50)
    private String firstname;

    @Column(name = "lastname", length = 50)
    private String lastname;

    @Column(name = "email", length = 50)
    private String email;

    @Column(name = "address", length = 100)
    private String address;

    // Constructor
    public User(){}

    public User(String phone, String first, String last, String email, String address){
        this.phone = phone;
        this.firstname = first;
        this.lastname = last;
        this.email = email;
        this.address = address;
    }
}
