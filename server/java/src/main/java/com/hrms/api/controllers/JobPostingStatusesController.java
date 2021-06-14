package com.hrms.api.controllers;


import com.hrms.business.abstracts.JobPostingStatusService;
import com.hrms.entities.concretes.JobPostingStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/jobpostingstatuses")
@CrossOrigin
public class JobPostingStatusesController {

    private JobPostingStatusService jobPostingStatusService;

    @Autowired
    public JobPostingStatusesController(JobPostingStatusService jobPostingStatusService) {
        this.jobPostingStatusService = jobPostingStatusService;
    }


    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody JobPostingStatus jobPostingStatus){
        return ResponseEntity.ok(this.jobPostingStatusService.add(jobPostingStatus));
    }

    @GetMapping("/getlastbyjobpostingid")
    public ResponseEntity<?> getLastByJobPostingId(@RequestParam int jobPostingId){
        return ResponseEntity.ok(this.jobPostingStatusService.getLastByJobPostingId(jobPostingId));
    }

    @GetMapping("/getallbyjobpostingid")
    public ResponseEntity<?> getAllByJobPostingId(@RequestParam int jobPostingId){
        return ResponseEntity.ok(this.jobPostingStatusService.getAllByJobPostingId(jobPostingId));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.jobPostingStatusService.getAll());
    }
}
