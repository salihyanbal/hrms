package com.hrms.api.controllers;

import com.hrms.business.abstracts.CandidateJobPostingFavoriteService;
import com.hrms.entities.concretes.CandidateJobPostingFavorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/candidatejobpostingfavorites")
@CrossOrigin
public class CandidateJobPostingFavoritesController {

    private CandidateJobPostingFavoriteService candidateJobPostingFavoriteService;

    @Autowired
    public CandidateJobPostingFavoritesController(CandidateJobPostingFavoriteService candidateJobPostingFavoriteService) {
        this.candidateJobPostingFavoriteService = candidateJobPostingFavoriteService;
    }

    @PostMapping("/save")
    private ResponseEntity<?> save(@RequestBody CandidateJobPostingFavorite candidateJobPostingFavorite){
        return ResponseEntity.ok(this.candidateJobPostingFavoriteService.save(candidateJobPostingFavorite));
    }

    @PostMapping("/delete")
    private ResponseEntity<?> delete(@RequestBody CandidateJobPostingFavorite candidateJobPostingFavorite){
        return ResponseEntity.ok(this.candidateJobPostingFavoriteService.delete(candidateJobPostingFavorite));
    }

    @GetMapping("/getall")
    private ResponseEntity<?> getAll(){
        return ResponseEntity.ok(this.candidateJobPostingFavoriteService.getAll());
    }

    @GetMapping("/getallbycandidateid")
    private ResponseEntity<?> getAllByCandidateId(@RequestParam int candidateId){
        return ResponseEntity.ok(this.candidateJobPostingFavoriteService.getAllByCandidateId(candidateId));
    }

    @GetMapping("/getbycandidateidandjobpostingid")
    private ResponseEntity<?> getByCandidateIdAndJobPostingId(@RequestParam int candidateId,int jobPostingId){
        return ResponseEntity.ok(this.candidateJobPostingFavoriteService.getByCandidateIdAndJobPostingId(candidateId,jobPostingId));
    }
}
