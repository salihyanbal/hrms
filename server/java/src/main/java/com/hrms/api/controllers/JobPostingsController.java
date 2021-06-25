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

    //TODO: refactor
    private enum StatusType{
        WAITING_FOR_PUBLISH(1),APPROVED(2), REJECTED (3), WAITING_FOR_UPDATE(4);
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
    public ResponseEntity<?> add(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) JobPosting jobPosting){
        return ResponseEntity.ok(this.jobPostingService.add(jobPosting));
    }

    @PostMapping("/delete")
    public ResponseEntity<?> delete(@RequestParam int id){
        return ResponseEntity.ok(this.jobPostingService.delete(id));
    }

    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.jobPostingService.getAll());
    }

    @GetMapping("/getbyid")
    public ResponseEntity<?> getById(@RequestParam int id){
        return ResponseEntity.ok(this.jobPostingService.getById(id));
    }

    @GetMapping("/getallbyapplicationdeadline")
    public ResponseEntity<?> getAllByApplicationDeadline(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date){
        return ResponseEntity.ok(this.jobPostingService.getAllByApplicationDeadline(date));
    }

    @GetMapping("/getallbyemployerid")
    public ResponseEntity<?> getAllByEmployerId(@RequestParam int employerId){
        return ResponseEntity.ok(this.jobPostingService.getAllByEmployerId(employerId));
    }

    @GetMapping("/getallapprovedstatus")
    public ResponseEntity<?> getAllApprovedStatus(){
        return ResponseEntity.ok(this.jobPostingService.getAllByStatusId(StatusType.APPROVED.getValue()));
    }

    @GetMapping("/getallapprovedstatusbypagenumber")
    public ResponseEntity<?> getAllApprovedStatusByPageNumber(int pageNumber){
        return ResponseEntity.ok(this.jobPostingService.getAllByStatusIdAndPageNumber(StatusType.APPROVED.getValue(),pageNumber));
    }

    @GetMapping("/getallbyemployeridanddeletedfalse")
    public ResponseEntity<?> getAllByEmployerIdAndDeletedFalse(@RequestParam int employerId) {
        return ResponseEntity.ok(this.jobPostingService.getAllByEmployerIdAndIsDeletedFalse(employerId));
    }
}