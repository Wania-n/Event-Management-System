package com.example.Event_Management_System.service;
import com.example.Event_Management_System.model.Organizer;
import com.example.Event_Management_System.repository.OrganizerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// This is the service class, which contains all the business logic, and calls to the repository layer for database handles
@Service
public class OrganizerService {

    // Repository class reference
    @Autowired
    private OrganizerRepository organizerRepo;

    // Add functions for the application funtionality accordingly!!

    // SignUp Organizer
    public boolean registerOrganizer(Organizer new_organizer){

        // Now adding validation rules


        return true;
    }

}
