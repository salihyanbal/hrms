package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateLinkService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateLinkDao;
import com.hrms.entities.concretes.CandidateLink;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateLinkManager implements CandidateLinkService {

    private CandidateLinkDao candidateLinkDao;

    @Autowired
    public CandidateLinkManager(CandidateLinkDao candidateLinkDao) {
        this.candidateLinkDao = candidateLinkDao;
    }

    @Override
    public Result save(CandidateLink candidateLink) {
        this.candidateLinkDao.save(candidateLink);
        return new SuccessResult();
    }

    @Override
    public Result delete(CandidateLink candidateLink) {
        this.candidateLinkDao.delete(candidateLink);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateLink>> getAll() {
        return new SuccessDataResult<>(this.candidateLinkDao.findAll());
    }

    @Override
    public DataResult<List<CandidateLink>> getAllByCandidateId(int candidateId) {
        return new SuccessDataResult<>(this.candidateLinkDao.getAllByCandidateId(candidateId));
    }
}
