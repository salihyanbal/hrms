package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateImageService;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.concretes.CandidateImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/candidateimages")
@CrossOrigin
public class CandidateImagesController {

    private CandidateImageService candidateImageService;

    @Autowired
    public CandidateImagesController(CandidateImageService candidateImageService) {
        this.candidateImageService = candidateImageService;
    }

    @PostMapping(value = "/change")
    public ResponseEntity<?> change(@RequestBody MultipartFile file,@RequestParam int candidateId) {
        CandidateImage candidateImage = new CandidateImage();
        Candidate candidate = new Candidate();
        candidate.setId(candidateId);
        candidateImage.setCandidate(candidate);
        return ResponseEntity.ok(this.candidateImageService.change(candidateImage,file));
    }

    @PostMapping(value = "/delete")
    public ResponseEntity<?> delete(@RequestParam int candidateId) {
        return ResponseEntity.ok(this.candidateImageService.delete(candidateId));
    }


    @GetMapping("/getall")
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateImageService.getAll());
    }

    @GetMapping("/getByCandidateIdAndNotDeleted")
    public ResponseEntity<?> getByCandidateIdAndNotDeleted(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateImageService.getByCandidateIdAndNotDeleted(candidateId));
    }

}
