package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Candidate;

import java.util.List;

public interface CandidateService {

    Result add(Candidate candidates);
    DataResult<Candidate> getByIdentificationNumber(String identificationNumber);
    DataResult<List<Candidate>> getAll();

}
