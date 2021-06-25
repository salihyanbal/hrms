package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateLinkService;
import com.hrms.entities.concretes.CandidateLink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidatelinks")
@CrossOrigin
public class CandidateLinksController {

    private CandidateLinkService candidateLinkService;

    @Autowired
    public CandidateLinksController(CandidateLinkService candidateLinkService) {
        this.candidateLinkService = candidateLinkService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CandidateLink candidateLink){
        return ResponseEntity.ok(this.candidateLinkService.save(candidateLink));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody CandidateLink candidateLink){
        return ResponseEntity.ok(this.candidateLinkService.delete(candidateLink));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateLinkService.getAll());
    }

    @GetMapping("/getallbycandidateid")
    public ResponseEntity<?> getAllByCandidateId(int candidateId){
        return ResponseEntity.ok(this.candidateLinkService.getAllByCandidateId(candidateId));
    }
}
