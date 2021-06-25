package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateLanguage;

import java.util.List;

public interface CandidateLanguageService {
    Result save(CandidateLanguage candidateLanguage);
    Result delete(CandidateLanguage candidateLanguage);
    DataResult<List<CandidateLanguage>> getAll();
    DataResult<List<CandidateLanguage>> getAllByCandidateId(int candidateId);
}
