package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateDao;
import com.hrms.entities.concretes.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateManager implements CandidateService {

    private CandidateDao candidateDao;

    @Autowired
    public CandidateManager(CandidateDao candidateDao) {
        this.candidateDao = candidateDao;
    }

    @Override
    public Result add(Candidate candidates) {
        this.candidateDao.save(candidates);
        return new SuccessResult("İş arayan eklendi.");
    }

    @Override
    public DataResult<Candidate> getByIdentificationNumber(String identificationNumber) {
        return new SuccessDataResult<>(this.candidateDao.getByIdentificationNumber(identificationNumber));
    }

    @Override
    public DataResult<List<Candidate>> getAll() {
        return new SuccessDataResult<>(this.candidateDao.findAll());
    }

}
