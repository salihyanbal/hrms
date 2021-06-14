package com.hrms.api.controllers;

import com.hrms.business.abstracts.JobPostingService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPosting;
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

    private enum StatusType{
        WAITING(1),APPROVED(2), REJECTED (3);
        private final Integer value;

        StatusType(Integer value) {
            this.value = value;
        }

        public Integer getValue() {
            return value;
        }
    }

    private JobPostingService jobPostingService;

    @Autowired
    public JobPostingsController(JobPostingService jobPostingService) {
        this.jobPostingService = jobPostingService;
    }

    @PostMapping("/add")
    public Result add(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) JobPosting jobPosting){
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

    @GetMapping("/getallbyemployerid")
    public DataResult<List<JobPosting>> getAllByEmployerId(@RequestParam int employerId){
        return this.jobPostingService.getAllByEmployerId(employerId);
    }

    @GetMapping("/getallapprovedstatus")
    public ResponseEntity<?> getAllApprovedStatus(){
        return ResponseEntity.ok(this.jobPostingService.getAllByStatusId(StatusType.APPROVED.getValue()));
    }

}
