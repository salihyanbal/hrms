package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateLinkService;
import com.hrms.business.abstracts.CandidateSkillService;
import com.hrms.entities.concretes.CandidateLink;
import com.hrms.entities.concretes.CandidateSkill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/candidateskills")
@CrossOrigin
public class CandidateSkillsController {

    private CandidateSkillService candidateSkillService;

    @Autowired
    public CandidateSkillsController(CandidateSkillService candidateSkillService) {
        this.candidateSkillService = candidateSkillService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody CandidateSkill candidateSkill){
        return ResponseEntity.ok(this.candidateSkillService.save(candidateSkill));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestBody CandidateSkill candidateSkill){
        return ResponseEntity.ok(this.candidateSkillService.delete(candidateSkill));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateSkillService.getAll());
    }

    @GetMapping("/getallbycandidateid")
    public ResponseEntity<?> getAllByCandidateId(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateSkillService.getAllByCandidateId(candidateId));
    }
}
