package com.hrms.api.controllers;


import com.hrms.business.abstracts.JobPostingConfirmationService;
import com.hrms.entities.concretes.JobPostingConfirmation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobpostingconfirmations")
@CrossOrigin
public class JobPostingConfirmationsController {

    private JobPostingConfirmationService jobPostingConfirmationService;

    @Autowired
    public JobPostingConfirmationsController(JobPostingConfirmationService jobPostingConfirmationService) {
        this.jobPostingConfirmationService = jobPostingConfirmationService;
    }


    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody JobPostingConfirmation jobPostingConfirmation){
        return ResponseEntity.ok(this.jobPostingConfirmationService.add(jobPostingConfirmation));
    }

    @GetMapping("/getbyjobpostingid")
    public ResponseEntity<?> getByJobPostingId(int jobPostingId){
        return ResponseEntity.ok(this.jobPostingConfirmationService.getByJobPostingId(jobPostingId));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.jobPostingConfirmationService.getAll());
    }
}
