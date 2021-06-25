package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateSkillService;
import com.hrms.business.abstracts.LanguageService;
import com.hrms.entities.concretes.CandidateSkill;
import com.hrms.entities.concretes.Language;
import org.apache.commons.codec.language.bm.Lang;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/languages")
@CrossOrigin
public class LanguagesController {

    private LanguageService languageService;

    @Autowired
    public LanguagesController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Language language){
        return ResponseEntity.ok(this.languageService.add(language));
    }


    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.languageService.getAll());
    }

}
