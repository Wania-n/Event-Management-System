package com.example.Event_Management_System.controller;
import com.example.Event_Management_System.service.EventService;
import com.example.Event_Management_System.service.GuestService;
import com.example.Event_Management_System.service.OrganizerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This is the controller class for organizer, it will control the events, guests and all of that
@RestController
@RequestMapping("./organizers")
@CrossOrigin(origins = "http://localhost:3000")
public class OrganizerController {

    @Autowired
    private OrganizerService organizerService;

    @Autowired
    private EventService eventService;

    @Autowired
    private GuestService guestService;

    // Add relevants functions here!
}
