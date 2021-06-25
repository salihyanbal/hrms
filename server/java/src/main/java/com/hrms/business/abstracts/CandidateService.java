package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.dtos.CandidateResumeDto;

import java.util.List;

public interface CandidateService {

    Result save(Candidate candidates);
    DataResult<Candidate> getByIdentificationNumber(String identificationNumber);
    DataResult<Candidate> getById(int id);
    DataResult<List<Candidate>> getAll();
    DataResult<CandidateResumeDto> getResumeByCandidateId(int candidateId);

}
