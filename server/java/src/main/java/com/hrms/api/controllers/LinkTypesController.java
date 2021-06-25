package com.hrms.api.controllers;

import com.hrms.business.abstracts.LanguageService;
import com.hrms.business.abstracts.LinkTypeService;
import com.hrms.entities.concretes.Language;
import com.hrms.entities.concretes.LinkType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/linktypes")
@CrossOrigin
public class LinkTypesController {

    private LinkTypeService linkTypeService;

    @Autowired
    public LinkTypesController(LinkTypeService linkTypeService) {
        this.linkTypeService = linkTypeService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody LinkType linkType){
        return ResponseEntity.ok(this.linkTypeService.add(linkType));
    }


    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.linkTypeService.getAll());
    }
}
