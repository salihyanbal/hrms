package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.Result;
import com.hrms.entities.dtos.LoginForUserDto;
import com.hrms.entities.dtos.RegisterForCandidateDto;
import com.hrms.entities.dtos.RegisterForEmployerDto;

public interface AuthService {

    Result registerForEmployer(RegisterForEmployerDto registerForEmployerDto);
    Result registerForCandidate(RegisterForCandidateDto registerForJobSeekerDto);
    Result login(LoginForUserDto loginForUserDto);

}
