package com.hrms.api.controllers;

import com.hrms.business.abstracts.AuthService;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.dtos.RegisterForCandidateDto;
import com.hrms.entities.dtos.RegisterForEmployerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registerforemployer")
    public ResponseEntity<?> registerForEmployer(@RequestBody RegisterForEmployerDto registerForEmployerDto) {
        return ResponseEntity.ok(authService.registerForEmployer(registerForEmployerDto));
    }

    @PostMapping("/registerforcandidate")
    public ResponseEntity<?> registerForCandidate(@RequestBody RegisterForCandidateDto registerForJobSeekerDto) {
        return ResponseEntity.ok(authService.registerForCandidate(registerForJobSeekerDto));
    }

}
