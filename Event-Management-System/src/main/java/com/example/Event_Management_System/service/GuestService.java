package com.example.Event_Management_System.service;
import com.example.Event_Management_System.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// This is the service class, which contains all the business logic, and calls to the repository layer for database handles
@Service
public class GuestService {

    @Autowired
    private AdminRepository adminRepo;

    // Add functions for the application funtionality accordingly!!
}
