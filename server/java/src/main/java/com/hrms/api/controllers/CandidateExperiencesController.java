package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateExperienceService;
import com.hrms.entities.concretes.CandidateExperience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidateexperiences")
@CrossOrigin
public class CandidateExperiencesController {

    private CandidateExperienceService candidateExperienceService;

    @Autowired
    public CandidateExperiencesController(CandidateExperienceService candidateExperienceService) {
        this.candidateExperienceService = candidateExperienceService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) CandidateExperience candidateExperience){
        return ResponseEntity.ok(this.candidateExperienceService.save(candidateExperience));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody CandidateExperience candidateExperience){
        return ResponseEntity.ok(this.candidateExperienceService.delete(candidateExperience));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateExperienceService.getAll());
    }

    @GetMapping("/getallbycandidateidorderbyleavedate")
    public ResponseEntity<?> getAllOrderByLeaveDate(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateExperienceService.getAllByCandidateIdOrderByLeaveDate(candidateId));
    }

}
