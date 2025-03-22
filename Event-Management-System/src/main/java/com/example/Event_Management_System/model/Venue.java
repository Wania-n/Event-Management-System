package com.example.Event_Management_System.model;
import jakarta.persistence.*;

// This is Venue class, managed by the Admin
@Entity
@Table(name = "Venue")
public class Venue {

    // Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int venueID;

    @Column(name = "venue_name")
    private String name;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "address")
    private String address;

    @Column(name = "price")
    private float price;

    // Constructor
    public Venue(){}

    public Venue(String name, int capacity, String address, float price){
        this.name = name;
        this.capacity = capacity;
        this.address = address;
        this.price = price;
    }

    // Add setters and getters

}
