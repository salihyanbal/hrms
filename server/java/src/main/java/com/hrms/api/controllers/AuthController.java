package com.hrms.api.controllers;

import com.hrms.business.abstracts.AuthService;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.dtos.RegisterForCandidateDto;
import com.hrms.entities.dtos.RegisterForEmployerDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registerforemployer")
    public Result registerForEmployer(@RequestBody RegisterForEmployerDto registerForEmployerDto) {
        return authService.registerForEmployer(registerForEmployerDto);
    }

    @PostMapping("/registerforjobseeker")
    public Result registerForJobSeeker(@RequestBody RegisterForCandidateDto registerForJobSeekerDto) {
        return authService.registerForCandidate(registerForJobSeekerDto);
    }

}
