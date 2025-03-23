package com.example.Event_Management_System.controller;
import com.example.Event_Management_System.model.Organizer;
import com.example.Event_Management_System.service.EventService;
import com.example.Event_Management_System.service.GuestService;
import com.example.Event_Management_System.service.OrganizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// This is the controller class for organizer, it will control the events, guests and all of that
@RestController
@RequestMapping("/api/organizer")
@CrossOrigin(origins = "http://localhost:3000")
public class OrganizerController {

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private EventService eventService;

    @Autowired
    private GuestService guestService;

    // Add relevants functions here!

    // Sign up organizer
    @PostMapping("/signup")
    public ResponseEntity<String> registerOrganizer(@RequestBody Organizer organizer) {

        // Right now just checking
        if (organizer == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nothing received!!");
        }

        // Log data for debugging
        System.out.println("Received Organizer Data: " + organizer);

        return ResponseEntity.ok("Organizer has data now!!!");

        //boolean isSaved = organizerService.registerOrganizer(organizer);

//        if (isSaved) {
//            return ResponseEntity.ok("Organizer registered successfully!");
//        } else {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register organizer.");
//        }
    }

    // Login Organizer
    //@PostMapping("/login")



}
