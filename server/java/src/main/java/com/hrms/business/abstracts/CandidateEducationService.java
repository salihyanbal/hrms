package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateEducation;
import com.hrms.entities.concretes.CandidateExperience;

import java.util.List;

public interface CandidateEducationService {
    Result add(CandidateEducation candidateEducation);
    DataResult<List<CandidateEducation>> getAll();
    DataResult<List<CandidateEducation>> getAllByCandidateIdOrderByGraduationYear(int candidateId);
}
