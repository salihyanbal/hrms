package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateSkillService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateSkillDao;
import com.hrms.entities.concretes.CandidateSkill;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateSkillManager implements CandidateSkillService {

    private CandidateSkillDao candidateSkillDao;

    @Autowired
    public CandidateSkillManager(CandidateSkillDao candidateSkillDao) {
        this.candidateSkillDao = candidateSkillDao;
    }

    @Override
    public Result add(CandidateSkill candidateSkill) {
        this.candidateSkillDao.save(candidateSkill);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateSkill>> getAll() {
        return new SuccessDataResult<>(this.candidateSkillDao.findAll());
    }

    @Override
    public DataResult<List<CandidateSkill>> getAllByCandidateId(int candidateId) {
        return new SuccessDataResult<>(this.candidateSkillDao.getAllByCandidateId(candidateId));
    }
}
