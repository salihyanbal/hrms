package com.hrms.api.controllers;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.hrms.business.abstracts.JobPostingService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPosting;
import org.apache.james.mime4j.dom.datetime.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/jobpostings")
@CrossOrigin
public class JobPostingsController {

    private JobPostingService jobPostingService;

    @Autowired
    public JobPostingsController(JobPostingService jobPostingService) {
        this.jobPostingService = jobPostingService;
    }

    @PostMapping("/add")
    public Result add(@RequestBody JobPosting jobPosting){
        return this.jobPostingService.add(jobPosting);
    }

    @PostMapping("/toggleactivestatus")
    public Result toggleActiveStatus(@RequestParam int id){
        return this.jobPostingService.toggleActiveStatus(id);
    }

    @GetMapping("/getall")
    public DataResult<List<JobPosting>> getAll(){
        return this.jobPostingService.getAll();
    }

    @GetMapping("/getbyid")
    public ResponseEntity<?> getById(@RequestParam int id){
        return ResponseEntity.ok(this.jobPostingService.getById(id));
    }

    @GetMapping("/getallbyapplicationdeadline")
    public DataResult<List<JobPosting>> getAllByApplicationDeadline(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        return this.jobPostingService.getAllByApplicationDeadline(date);
    }

    @GetMapping("/getallbyemployer")
    public DataResult<List<JobPosting>> getAllByEmployer(@RequestParam int employerId){
        return this.jobPostingService.getAllByEmployer(employerId);
    }

}
