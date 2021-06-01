package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateLanguageService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateLanguageDao;
import com.hrms.entities.concretes.CandidateLanguage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateLanguageManager implements CandidateLanguageService {

    private CandidateLanguageDao candidateLanguageDao;

    @Autowired
    public CandidateLanguageManager(CandidateLanguageDao candidateLanguageDao) {
        this.candidateLanguageDao = candidateLanguageDao;
    }

    @Override
    public Result add(CandidateLanguage candidateLanguage) {
        this.candidateLanguageDao.save(candidateLanguage);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateLanguage>> getAll() {
        return new SuccessDataResult<>(this.candidateLanguageDao.findAll());
    }

    @Override
    public DataResult<List<CandidateLanguage>> getAllByCandidateId(int candidateId) {
        return new SuccessDataResult<>(this.candidateLanguageDao.getAllByCandidateId(candidateId));
    }
}
