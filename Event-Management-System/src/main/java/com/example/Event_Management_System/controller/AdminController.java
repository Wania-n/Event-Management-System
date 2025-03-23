package com.example.Event_Management_System.controller;
import com.example.Event_Management_System.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This is the admin controller, it will control the admins, venues, vendors and interior designers
@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // I didnt add the venue, vendor or interior designer service because they are very small

    // Add functionality accordingly!
}
