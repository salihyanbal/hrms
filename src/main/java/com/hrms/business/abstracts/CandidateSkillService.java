package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateSkill;

import java.util.List;

public interface CandidateSkillService {
    Result add(CandidateSkill candidateSkill);
    DataResult<List<CandidateSkill>> getAll();
    DataResult<List<CandidateSkill>> getAllByCandidateId(int candidateId);
}
