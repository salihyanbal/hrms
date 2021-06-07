package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateExperienceService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateExperienceDao;
import com.hrms.entities.concretes.CandidateExperience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateExperienceManager implements CandidateExperienceService {

    private CandidateExperienceDao experienceDao;

    @Autowired
    public CandidateExperienceManager(CandidateExperienceDao experienceDao) {
        this.experienceDao = experienceDao;
    }

    @Override
    public Result add(CandidateExperience candidateExperience) {
        this.experienceDao.save(candidateExperience);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateExperience>> getAll() {
        return new SuccessDataResult<>(this.experienceDao.findAll());
    }

    @Override
    public DataResult<List<CandidateExperience>> getAllByCandidateIdOrderByLeaveDate(int candidateId) {
        return new SuccessDataResult<>(this.experienceDao.getAllByCandidateIdOrderByLeaveDateDesc(candidateId));
    }
}
