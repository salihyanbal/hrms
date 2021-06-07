package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateLink;

import java.util.List;

public interface CandidateLinkService {
    Result add(CandidateLink candidateLink);
    DataResult<List<CandidateLink>> getAll();
    DataResult<List<CandidateLink>> getAllByCandidateId(int candidateId);
}
