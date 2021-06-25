package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateEducationService;
import com.hrms.entities.concretes.CandidateEducation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidateeducations")
@CrossOrigin
public class CandidateEducationsController {

    private CandidateEducationService candidateEducationService;

    @Autowired
    public CandidateEducationsController(CandidateEducationService candidateEducationService) {
        this.candidateEducationService = candidateEducationService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CandidateEducation candidateEducation){
        return ResponseEntity.ok(this.candidateEducationService.save(candidateEducation));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody CandidateEducation candidateEducation){
        return ResponseEntity.ok(this.candidateEducationService.delete(candidateEducation));
    }


    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateEducationService.getAll());
    }

    @GetMapping("/getallbycandidateidorderbygraduationyear")
    public ResponseEntity<?> getAllByCandidateIdOrderByGraduationYear(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateEducationService.getAllByCandidateIdOrderByGraduationYear(candidateId));
    }
}
