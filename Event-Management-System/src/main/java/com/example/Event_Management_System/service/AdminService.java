package com.example.Event_Management_System.service;
import com.example.Event_Management_System.repository.AdminRepository;
import com.example.Event_Management_System.repository.InteriorDesignerRepository;
import com.example.Event_Management_System.repository.VendorRepository;
import com.example.Event_Management_System.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// This is the service class, which contains all the business logic, and calls to the repository layer for database handles
@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private VendorRepository vendorRepo;

    @Autowired
    private InteriorDesignerRepository interiorDesignerRepo;

    @Autowired
    private VenueRepository venueRepo;

    // Add functions for the application funtionality accordingly!!
}
