package com.hrms.api.controllers;

import com.hrms.business.abstracts.EmployerStatusService;
import com.hrms.entities.concretes.EmployerStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employerstatuses")
@CrossOrigin
public class EmployerStatusesController {

    private EmployerStatusService employerStatusService;

    @Autowired
    public EmployerStatusesController(EmployerStatusService employerStatusService) {
        this.employerStatusService = employerStatusService;
    }


    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody EmployerStatus employerStatus){
        return ResponseEntity.ok(this.employerStatusService.add(employerStatus));
    }

    @GetMapping("/getlastbyemployerid")
    public ResponseEntity<?> getLastByEmployerId(@RequestParam int employerId){
        return ResponseEntity.ok(this.employerStatusService.getLastByEmployerId(employerId));
    }

    @GetMapping("/getallbyemployerid")
    public ResponseEntity<?> getAllByEmployerId(@RequestParam int employerId){
        return ResponseEntity.ok(this.employerStatusService.getAllByEmployerId(employerId));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.employerStatusService.getAll());
    }
}
