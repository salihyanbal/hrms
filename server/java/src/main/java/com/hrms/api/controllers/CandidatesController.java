package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateService;
import com.hrms.entities.concretes.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidates")
@CrossOrigin
public class CandidatesController {

    private CandidateService candidateService;

    @Autowired
    public CandidatesController(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Candidate candidates){
        return ResponseEntity.ok(this.candidateService.save(candidates));
    }

    @GetMapping("/getbyid")
    public ResponseEntity<?> getById(@RequestParam int id){
        return ResponseEntity.ok(this.candidateService.getById(id));
    }

    @GetMapping("/getresumebycandidateid")
    public ResponseEntity<?> getResumeByCandidateId(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateService.getResumeByCandidateId(candidateId));
    }
}
