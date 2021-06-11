package com.hrms.api.controllers;

import com.hrms.business.abstracts.EmploymentTypeService;
import com.hrms.entities.concretes.EmploymentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employmenttypes")
@CrossOrigin
public class EmploymentTypesController {

    private EmploymentTypeService employmentTypeService;

    @Autowired
    public EmploymentTypesController(EmploymentTypeService employmentTypeService) {
        this.employmentTypeService = employmentTypeService;
    }


    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody EmploymentType employmentType){
        return ResponseEntity.ok(this.employmentTypeService.add(employmentType));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.employmentTypeService.getAll());
    }
}
