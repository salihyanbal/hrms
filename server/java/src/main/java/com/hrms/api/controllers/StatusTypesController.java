package com.hrms.api.controllers;

import com.hrms.business.abstracts.StatusTypeService;
import com.hrms.entities.concretes.StatusType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/statustypes")
@CrossOrigin
public class StatusTypesController {

    private StatusTypeService statusTypeService;

    @Autowired
    public StatusTypesController(StatusTypeService statusTypeService) {
        this.statusTypeService = statusTypeService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(StatusType statusType){
        return ResponseEntity.ok(this.statusTypeService.add(statusType));
    }

    @GetMapping("/getbyname")
    public ResponseEntity<?> getByName(@RequestParam String name){
        return ResponseEntity.ok(this.statusTypeService.getByName(name));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.statusTypeService.getAll());
    }

}
