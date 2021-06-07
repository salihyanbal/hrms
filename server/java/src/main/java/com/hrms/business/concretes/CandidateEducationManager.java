package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateEducationService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateEducationDao;
import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.concretes.CandidateEducation;
import com.hrms.entities.concretes.CandidateExperience;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateEducationManager implements CandidateEducationService {

    private CandidateEducationDao candidateEducationDao;

    @Autowired
    public CandidateEducationManager(CandidateEducationDao candidateEducationDao) {
        this.candidateEducationDao = candidateEducationDao;
    }

    @Override
    public Result add(CandidateEducation candidateEducation) {
        this.candidateEducationDao.save(candidateEducation);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateEducation>> getAll() {
        return new SuccessDataResult<>(candidateEducationDao.findAll());
    }

    @Override
    public DataResult<List<CandidateEducation>> getAllByCandidateIdOrderByGraduationYear(int candidateId) {
        return new SuccessDataResult<>(candidateEducationDao.getAllByCandidateIdOrderByGraduationYear(candidateId));
    }
}
